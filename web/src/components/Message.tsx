import { Avatar } from "@components/Avatar"
import styled from "styled-components"

type IUser = {
  id: string
  avatar_url: string
  name: string
}

type IMessage = {
  id: string
  text: string
  user: IUser
}

interface MessageProps {
  message: IMessage
}

export const Message = ({ message, ...props }: MessageProps) => {
  return (
    <StyledMessage {...props}>
      <MessageText>{message.text}</MessageText>
      <Avatar src={message.user.avatar_url} alt={message.user.name} />
      <UserName>{message.user.name}</UserName>
    </StyledMessage>
  )
}

type StyledMessageProps = {}
const StyledMessage = styled.div<StyledMessageProps>`
  display: grid;
  grid:
    "message message"
    "avatar  name   "
    / max-content 1fr;
  gap: 1rem 0.75rem;
  align-items: center;

  width: 27.5rem;
  height: fit-content;
`

type MessageTextProps = {}
const MessageText = styled.p<MessageTextProps>`
  grid-area: message;
`

type UserNameProps = {}
const UserName = styled.span<UserNameProps>`
  grid-area: name;
`
