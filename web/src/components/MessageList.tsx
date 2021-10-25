import { Message } from "@components/Message"
import { api } from "@services/api"
import { HTMLAttributes, useEffect, useState } from "react"
import { io } from "socket.io-client"
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

const messagesQueue: IMessage[] = []

const socket = io("http://localhost:4000")

socket.on("new_message", (newMessage: IMessage) => {
  messagesQueue.push(newMessage)
})

const useMessageList = () => {
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages((prev) => [messagesQueue[0], prev[0], prev[1]].filter(Boolean))

        messagesQueue.shift()
      }
    }, 3000)
  }, [])

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get<IMessage[]>("/messages/last3")
      setMessages(data)
    })()
  }, [])

  return { messages }
}

interface MessageListProps extends HTMLAttributes<HTMLDivElement> {}

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
