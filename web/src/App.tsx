import { GlobalStyles } from "@styles/GlobalStyles"
import { defaultTheme } from "@styles/theme"
import styled, { ThemeProvider } from "styled-components"

interface AppProps {}

export const App = ({ ...props }: AppProps) => {
  return (
    <StyledApp {...props}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <h1>App Component</h1>
      </ThemeProvider>
    </StyledApp>
  )
}

type StyledAppProps = {}
const StyledApp = styled.div<StyledAppProps>``
