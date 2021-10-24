import { Message } from "@components/Message"
import { api } from "@services/api"
import { useEffect, useState } from "react"
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

const useMessageList = () => {
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get<IMessage[]>("/messages/last3")
      setMessages(data)
    })()
  }, [])

  return { messages }
}

interface MessageListProps {}

export const MessageList = ({ ...props }: MessageListProps) => {
  const { messages } = useMessageList()

  return (
    <StyledMessageList {...props}>
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
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
