import { Message } from "@components/Message"
import React from "react"
import { ScrollView, View } from "react-native"
import styled from "styled-components"

interface MessageListProps {}

export const MessageList = ({ ...props }: MessageListProps) => {
  return (
    <StyledMessageList
      {...props}
      keyboardShouldPersistTaps="never"
      contentContainerStyle={{
        justifyContent: "center",
      }}
    >
      <Message text="message 1" user={{ name: "Snahier" }} />
      <Spacing />
      <Message text="message 1" user={{ name: "Snahier" }} />
      <Spacing />
      <Message text="message 1" user={{ name: "Snahier" }} />
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
