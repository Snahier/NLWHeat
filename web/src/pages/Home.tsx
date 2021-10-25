import logoImg from "@assets/logo.svg"
import { LoginBox } from "@components/LoginBox"
import { MessageList } from "@components/MessageList"
import { SendMessageForm } from "@components/SendMessageForm"
import { AuthContext } from "@contexts/auth"
import { useContext } from "react"
import styled from "styled-components"

interface PageHomeProps {}

export const PageHome = ({ ...props }: PageHomeProps) => {
  const { user } = useContext(AuthContext)

  return (
    <StyledPageHome {...props}>
      <LogoImg src={logoImg} alt="logo" />
      <StyledMessageList />

      {!!user ? <StyledSendMessageForm /> : <StyledLoginBox />}
    </StyledPageHome>
  )
}

type StyledPageHomeProps = {}
const StyledPageHome = styled.div<StyledPageHomeProps>`
  justify-self: center;

  display: grid;
  grid:
    "logo     login"
    "messages login" 1fr
    /41.75rem 28.25rem;
  align-items: start;

  max-width: 1200px;
  min-width: 100vh;
`

type LogoImgProps = {}
const LogoImg = styled.img<LogoImgProps>`
  grid-area: logo;

  margin-top: 2rem;
`

type StyledMessageListProps = {}
const StyledMessageList = styled(MessageList)<StyledMessageListProps>`
  grid-area: messages;
  align-self: center;
`

type StyledSendMessageFormProps = {}
const StyledSendMessageForm = styled(SendMessageForm)<StyledSendMessageFormProps>`
  grid-area: login;

  align-self: center;
`

type StyledLoginBoxProps = {}
const StyledLoginBox = styled(LoginBox)<StyledLoginBoxProps>`
  grid-area: login;
`
