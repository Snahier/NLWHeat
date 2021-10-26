import { StatusBar } from "expo-status-bar"
import React from "react"
import { StyleSheet, View } from "react-native"
import { ThemeProvider } from "styled-components"
import { Home } from "@screens/Home"
import { defaultTheme } from "@styles/theme"

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StatusBar style="auto" />
      <Home />
    </ThemeProvider>
  )
}
