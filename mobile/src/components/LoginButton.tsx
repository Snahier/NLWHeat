import React, { useContext } from "react"
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import styled, { css, useTheme } from "styled-components"
import { AntDesign } from "@expo/vector-icons"
import { AuthContext } from "@contexts/auth"

interface LoginButtonProps extends TouchableOpacityProps {
  loading?: boolean
}

export const LoginButton = ({ loading = false, ...props }: LoginButtonProps) => {
  const theme = useTheme()
  const { signIn } = useContext(AuthContext)

  return (
    <StyledLoginButton {...props} activeOpacity={0.7} disabled={loading} onPress={signIn}>
      {loading ? (
        <ActivityIndicator color={theme.blackPrimary} size={24} />
      ) : (
        <>
          <AntDesign name="github" size={24} style={{ marginRight: 12 }} />
          <ButtonText>Entrar com Github</ButtonText>
        </>
      )}
    </StyledLoginButton>
  )
}

type StyledLoginButtonProps = {}
const StyledLoginButton = styled(TouchableOpacity)<StyledLoginButtonProps>`
  ${({ theme }) => css`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 12px 0;

    background: ${theme.yellow};
  `}
`

type ButtonTextProps = {}
const ButtonText = styled(Text)<ButtonTextProps>`
  ${({ theme }) => css`
    color: ${theme.blackPrimary};
    font-weight: bold;
    text-transform: uppercase;
  `}
`
