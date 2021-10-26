import { Avatar } from "@components/Avatar"
import { MotiView } from "@motify/components"
import React from "react"
import { Text, View } from "react-native"
import styled, { css } from "styled-components"

type IUser = {
  name: string
  avatar_url?: string
}

interface MessageProps {
  text: string
  user: IUser
}

export const Message = ({ text, user, ...props }: MessageProps) => {
  return (
    <StyledMessage
      {...props}
      from={{
        opacity: 0,
        translateY: -50,
      }}
      animate={{
        opacity: 1,
        translateY: 0,
      }}
    >
      <MessageText>{text}</MessageText>

      <UserWrapper>
        <Avatar imageUri={user.avatar_url} />
        <UserName>{user.name}</UserName>
      </UserWrapper>
    </StyledMessage>
  )
}

type StyledMessageProps = {}
const StyledMessage = styled(MotiView)<StyledMessageProps>``

type MessageTextProps = {}
const MessageText = styled(Text)<MessageTextProps>`
  ${({ theme }) => css`
    color: ${theme.grayTertiary};
  `}
`

type UserWrapperProps = {}
const UserWrapper = styled(View)<UserWrapperProps>`
  flex-direction: row;
  align-items: center;

  margin-top: 12px;
`

type UserNameProps = {}
const UserName = styled(Text)<UserNameProps>`
  ${({ theme }) => css`
    margin-left: 16px;

    color: ${theme.grayTertiary};
  `}
`
