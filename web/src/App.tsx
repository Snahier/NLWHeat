import styled from "styled-components"
import { GlobalStyles } from "./styles/GlobalStyles"

interface AppProps {}

export const App = ({ ...props }: AppProps) => {
  return (
    <StyledApp {...props}>
      <GlobalStyles />
      <h1>App Component</h1>
    </StyledApp>
  )
}

type StyledAppProps = {}
const StyledApp = styled.div<StyledAppProps>``
