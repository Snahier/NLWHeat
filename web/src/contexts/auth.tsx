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

    setUser(user)
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

  return <AuthContext.Provider value={{ signInUrl, user }}>{props.children}</AuthContext.Provider>
}
