import { Header } from "@components/Header"
import { MessageList } from "@components/MessageList"
import React from "react"
import { View } from "react-native"
import { getStatusBarHeight } from "react-native-iphone-x-helper"
import styled, { css } from "styled-components"

interface HomeProps {}

export const Home = ({ ...props }: HomeProps) => {
  return (
    <StyledHome {...props}>
      <Header />
      <MessageList />
    </StyledHome>
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
