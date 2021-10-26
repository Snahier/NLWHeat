import { Message } from "@components/Message"
import { api } from "@services/api"
import React, { useEffect, useState } from "react"
import { FlatList, ScrollView, View } from "react-native"
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

interface MessageListProps {}

export const MessageList = ({ ...props }: MessageListProps) => {
  const [messages, setMessages] = useState<IMessage[]>([])

  useEffect(() => {
    ;(async () => {
      const { data } = await api.get<IMessage[]>("/messages/last3")
      setMessages(data)
    })()
  }, [])

  return (
    <StyledMessageList
      {...props}
      keyboardShouldPersistTaps="never"
      contentContainerStyle={{
        justifyContent: "center",
      }}
    >
      {messages.map((message) => (
        <React.Fragment key={message.id}>
          <Message text={message.text} user={message.user} />
          <Spacing key={`message-${message.id}-spacing`} />
        </React.Fragment>
      ))}
    </StyledMessageList>
  )
}

type StyledMessageListProps = {}
const StyledMessageList = styled(ScrollView)<StyledMessageListProps>`
  margin-top: 8px;
  padding: 0 20px;
  padding-top: 134px;
  padding-bottom: 184px;
`

type SpacingProps = {}
const Spacing = styled(View)<SpacingProps>`
  height: 32px;
`
