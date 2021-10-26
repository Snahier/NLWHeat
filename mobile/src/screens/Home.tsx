import React from "react"
import { Text, View } from "react-native"
import styled, { css } from "styled-components"

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
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;

    background: ${theme.blackSecondary};
  `}
`

type StyledTextProps = {}
const StyledText = styled(Text)<StyledTextProps>`
  ${({ theme }) => css`
    color: ${theme.grayTertiary};
    font-size: 64px;
  `};
`
