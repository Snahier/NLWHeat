import React from "react"
import { api } from "@services/api"
import { createContext, ReactNode, useEffect, useState } from "react"
import * as AuthSessions from "expo-auth-session"
import AsyncStorage from "@react-native-async-storage/async-storage"

const CLIENT_ID = "6c7a067e2014243e49da"
const SCOPE = "read:user"

type IUser = {
  id: string
  name: string
  login: string
  avatar_url: string
}

type IAuthResponse = {
  token: string
  user: IUser
}

type IAuthorizarionResponse = {
  params: {
    code?: string
    error?: string
  }
  type?: string
}

type AuthContextData = {
  user: IUser | null
  isSigningIn: boolean
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const [isSigningIn, setisSigningIn] = useState(true)
  const [user, setUser] = useState<IUser | null>(null)

  const signIn = async () => {
    try {
      setisSigningIn(true)
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`
      const authSessionResponse = (await AuthSessions.startAsync({ authUrl })) as IAuthorizarionResponse

      if (authSessionResponse.type === "success" && authSessionResponse.params !== "access_denied") {
        const authResponse = await api.post<IAuthResponse>("/authenticate", {
          code: authSessionResponse.params.code,
        })
        const { user, token } = authResponse.data

        api.defaults.headers.common["Authorization"] = `Bearer ${token}`
        await AsyncStorage.setItem("@nlwheat:user", JSON.stringify(user))
        await AsyncStorage.setItem("@nlwheat:token", token)

        setUser(user)
      }

      setisSigningIn(false)
    } catch (error) {
      console.log(error)
    } finally {
      setisSigningIn(false)
    }
  }

  const signOut = async () => {
    setUser(null)
    await AsyncStorage.removeItem("@nlwheat:token")
    await AsyncStorage.removeItem("@nlwheat:token")
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const userStorage = await AsyncStorage.getItem("@nlwheat:user")
      const tokenStorage = await AsyncStorage.getItem("@nlwheat:token")

      if (userStorage && tokenStorage) {
        api.defaults.headers.common["Authorization"] = `Bearer ${tokenStorage}`
        setUser(JSON.parse(userStorage))
      }

      setisSigningIn(false)
    }
    loadUserStorageData()
  }, [])

  // useEffect(() => {
  //   const url = window.location.href
  //   const hasGithubCode = url.includes("?code=")

  //   if (hasGithubCode) {
  //     const [urlWithoutCode, githubCode] = url.split("?code=")

  //     window.history.pushState({}, "", urlWithoutCode)

  //     signIn(githubCode)
  //   }
  // }, [])

  // useEffect(() => {
  //   ;(async () => {
  //     const token = localStorage.getItem("@dowhile:token")

  //     if (token) {
  //       api.defaults.headers.common.authorization = `Bearer ${token}`

  //       const { data: user } = await api.get<IUser>("/profile")
  //       setUser(user)
  //     }
  //   })()
  // }, [])

  return (
    <AuthContext.Provider value={{ isSigningIn, user, signIn, signOut }}>{props.children}</AuthContext.Provider>
  )
}
