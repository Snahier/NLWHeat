import { Avatar } from "@components/Avatar"
import styled from "styled-components"

interface MessageProps {}

export const Message = ({ ...props }: MessageProps) => {
  return (
    <StyledMessage {...props}>
      <MessageText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam excepturi labore ea voluptas quod ullam ad
        doloremque alias! Maxime sed beatae magni ad in itaque molestiae non alias recusandae pariatur.
      </MessageText>
      <Avatar src={"https://avatars.githubusercontent.com/snahier"} />
      <UserName>Snahier</UserName>
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
