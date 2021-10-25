import React from "react"
import { Text, View } from "react-native"
import styled from "styled-components"

interface HomeProps {}

export const Home = ({ ...props }: HomeProps) => {
  return (
    <StyledHome {...props}>
      <StyledText>Hello World</StyledText>
    </StyledHome>
  )
}

type StyledHomeProps = {}
const StyledHome = styled(View)<StyledHomeProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: skyblue;
  width: 100%;
  height: 100%;
`

type StyledTextProps = {}
const StyledText = styled(Text)<StyledTextProps>`
  font-size: 64px;
`
