import LogoSvg from "@assets/logo.svg"
import { Avatar } from "@components/Avatar"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import styled, { css } from "styled-components"

interface HeaderProps {}

export const Header = ({ ...props }: HeaderProps) => {
  return (
    <StyledHeader {...props}>
      <LogoSvg />

      <ProfileWrapper>
        <LogOutButton>
          <LogOutText>Sair</LogOutText>
        </LogOutButton>
        <Avatar />
      </ProfileWrapper>
    </StyledHeader>
  )
}

type StyledHeaderProps = {}
const StyledHeader = styled(View)<StyledHeaderProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  width: 100%;
`

type ProfileWrapperProps = {}
const ProfileWrapper = styled(View)<ProfileWrapperProps>`
  flex-direction: row;
  align-items: center;
`

type LogOutButtonProps = {}
const LogOutButton = styled(TouchableOpacity)<LogOutButtonProps>`
  margin-right: 20px;
`

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
