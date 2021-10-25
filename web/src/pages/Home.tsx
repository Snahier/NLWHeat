import logoImg from "@assets/logo.svg"
import { LoginBox } from "@components/LoginBox"
import { MessageList } from "@components/MessageList"
import styled from "styled-components"

interface PageHomeProps {}

export const PageHome = ({ ...props }: PageHomeProps) => {
  return (
    <StyledPageHome {...props}>
      <LogoImg src={logoImg} alt="logo" />
      <StyledMessageList />

      <LoginBox style={{ gridArea: "aside" }} />
    </StyledPageHome>
  )
}

type StyledPageHomeProps = {}
const StyledPageHome = styled.div<StyledPageHomeProps>`
  justify-self: center;

  display: grid;
  grid:
    "logo     aside"
    "messages aside" 1fr
    /41.75rem 28.25rem;

  max-width: 1200px;
  min-width: 100vh;
`

type StyledMessageListProps = {}
const StyledMessageList = styled(MessageList)<StyledMessageListProps>`
  grid-area: messages;
  align-self: center;
`

type LogoImgProps = {}
const LogoImg = styled.img<LogoImgProps>`
  grid-area: logo;

  margin-top: 2rem;
`
