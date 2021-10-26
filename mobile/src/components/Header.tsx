import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import styled, { css } from "styled-components"

import LogoSvg from "@assets/logo.svg"

interface HeaderProps {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <StyledHeader {...props}>
      <LogoSvg />
      <LogOutButton>
        <LogOutText>Sair</LogOutText>
      </LogOutButton>
    </StyledHeader>
  )
}

type StyledHeaderProps = {}
const StyledHeader = styled(View)<StyledHeaderProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  width: 100%;
`

type LogOutButtonProps = {}
const LogOutButton = styled(TouchableOpacity)<LogOutButtonProps>``

type LogOutTextProps = {}
const LogOutText = styled(Text)<LogOutTextProps>`
  ${({ theme }) => css`
    color: ${theme.white};
    font-family: ${theme.fonts.roboto.regular};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  `}
`
