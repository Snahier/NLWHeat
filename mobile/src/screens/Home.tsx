import { Header } from "@components/Header"
import { LoginButton } from "@components/LoginButton"
import { MessageList } from "@components/MessageList"
import { SendMessageForm } from "@components/SendMessageForm"
import { AuthContext } from "@contexts/auth"
import React, { useContext } from "react"
import { KeyboardAvoidingView, Platform, View } from "react-native"
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper"
import styled, { css } from "styled-components"

interface HomeProps {}

export const Home = ({ ...props }: HomeProps) => {
  const { isSigningIn, user } = useContext(AuthContext)

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
      <StyledHome {...props}>
        <Header />
        <MessageList />
        {!user ? (
          <LoginButton
            style={{
              margin: 20,
              marginBottom: getBottomSpace() + 32,
            }}
            loading={isSigningIn}
          />
        ) : (
          <SendMessageForm
            style={{
              marginBottom: getBottomSpace(),
              paddingTop: 16,
              paddingHorizontal: 24,
            }}
          />
        )}
      </StyledHome>
    </KeyboardAvoidingView>
  )
}

type StyledHomeProps = {}
const StyledHome = styled(View)<StyledHomeProps>`
  ${({ theme }) => css`
    flex: 1;
    padding-top: ${getStatusBarHeight() + 17}px;

    background: ${theme.blackSecondary};
  `}
`
