import { AuthProvider } from "@contexts/auth"
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { Home } from "@screens/Home"
import { defaultTheme } from "@styles/theme"
import AppLoading from "expo-app-loading"
import { useFonts } from "expo-font"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { ThemeProvider } from "styled-components"

export default function App() {
  const [areFontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  })

  if (!areFontsLoaded) return <AppLoading />
  return (
    <AuthProvider>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar style="light" />
        <Home />
      </ThemeProvider>
    </AuthProvider>
  )
}
