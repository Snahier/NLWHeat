import { Message } from "@components/Message"
import styled from "styled-components"

interface MessageListProps {}

export const MessageList = ({ ...props }: MessageListProps) => {
  return (
    <StyledMessageList {...props}>
      <Message />
      <Message />
      <Message />
    </StyledMessageList>
  )
}

type StyledMessageListProps = {}
const StyledMessageList = styled.div<StyledMessageListProps>`
  display: grid;
  gap: 2.5rem;

  > * {
    :nth-child(2) {
      margin-left: 5rem;
    }
  }
`
