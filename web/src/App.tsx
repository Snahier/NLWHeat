import { GlobalStyles } from "@styles/GlobalStyles"
import { defaultTheme } from "@styles/theme"
import styled, { ThemeProvider } from "styled-components"
import { PageHome } from "@pages/Home"

interface AppProps {}

export const App = ({ ...props }: AppProps) => {
  return (
    <StyledApp {...props}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <PageHome />
      </ThemeProvider>
    </StyledApp>
  )
}

type StyledAppProps = {}
const StyledApp = styled.div<StyledAppProps>`
  position: relative;

  display: grid;
  min-height: 100vh;
`
