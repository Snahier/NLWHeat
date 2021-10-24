import styled from "styled-components"

interface AppProps {}

export const App = ({ ...props }: AppProps) => {
  return (
    <StyledApp {...props}>
      <h1>App Component</h1>
    </StyledApp>
  )
}

type StyledAppProps = {}
const StyledApp = styled.div<StyledAppProps>``
