import { api } from "@services/api"
import { createContext, ReactNode, useEffect, useState } from "react"

type IUser = {
  id: string
  name: string
  login: string
  avatar_url: string
}

type IAuthResponse = {
  token: string
  user: {
    id: string
    avatar_url: string
    name: string
    login: string
  }
}

type AuthContextData = {
  user: IUser | null
  signInUrl: string
  signOut: () => void
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProviderProps = {
  children: ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=80ad4853b02822fc5e89`

  const [user, setUser] = useState<IUser | null>(null)

  const signIn = async (githubCode: string) => {
    const response = await api.post<IAuthResponse>("/authenticate", {
      code: githubCode,
    })

    const { token, user } = response.data

    localStorage.setItem("@dowhile:token", token)

    api.defaults.headers.common.authorization = `Bearer ${token}`

    setUser(user)
  }

  const signOut = () => {
    setUser(null)
    localStorage.removeItem("@dowhile:token")
  }

  useEffect(() => {
    const url = window.location.href
    const hasGithubCode = url.includes("?code=")

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split("?code=")

      window.history.pushState({}, "", urlWithoutCode)

      signIn(githubCode)
    }
  }, [])

  useEffect(() => {
    ;(async () => {
      const token = localStorage.getItem("@dowhile:token")

      if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`

        const { data: user } = await api.get<IUser>("/profile")
        setUser(user)
      }
    })()
  }, [])

  return <AuthContext.Provider value={{ signInUrl, user, signOut }}>{props.children}</AuthContext.Provider>
}
