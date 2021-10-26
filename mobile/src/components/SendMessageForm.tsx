import React, { useState } from "react"
import { Text, TextInput, TouchableOpacity, View, ViewProps } from "react-native"
import { getBottomSpace } from "react-native-iphone-x-helper"
import styled, { css, useTheme } from "styled-components"

interface SendMessageFormProps extends ViewProps {}

export const SendMessageForm = ({ ...props }: SendMessageFormProps) => {
  const theme = useTheme()

  const [message, setMessage] = useState("")
  const [isSendingMessage, setIsSendingMessage] = useState(false)

  return (
    <StyledSendMessageForm {...props}>
      <Input
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={theme.grayPrimary}
        textAlignVertical="top"
        keyboardAppearance="dark"
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!isSendingMessage}
      />

      <SendMessageButton>
        <ButtonText>Enviar mensagem</ButtonText>
      </SendMessageButton>
    </StyledSendMessageForm>
  )
}

type StyledSendMessageFormProps = {}
const StyledSendMessageForm = styled(View)<StyledSendMessageFormProps>`
  ${({ theme }) => css`
    height: 184px;
    background: ${theme.blackTertiary};
  `}
`

type InputProps = {}
const Input = styled(TextInput)<InputProps>`
  ${({ theme }) => css`
    width: 100%;
    height: 88px;

    color: ${theme.white};
  `}
`

type SendMessageButtonProps = {}
const SendMessageButton = styled(TouchableOpacity)<SendMessageButtonProps>`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 48px;

    background: ${theme.pink};
  `}
`

type ButtonTextProps = {}
const ButtonText = styled(Text)<ButtonTextProps>`
  ${({ theme }) => css`
    color: ${theme.white};
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
  `}
`
