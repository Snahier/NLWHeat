import avatarImg from "@assets/avatar.png"
import { LinearGradient } from "expo-linear-gradient"
import React from "react"
import { Image } from "react-native"
import styled, { css, useTheme } from "styled-components"

const defaultAvatar = Image.resolveAssetSource(avatarImg).uri

interface AvatarProps {
  imageUri?: string
  size?: number
}

export const Avatar = ({ size = 48, imageUri, ...props }: AvatarProps) => {
  const theme = useTheme()

  return (
    <StyledLinearGradient
      colors={[theme.pink, theme.yellow]}
      start={{ x: 0, y: 0.8 }}
      end={{ x: 0.9, y: 1 }}
      style={{
        width: size,
        height: size,
      }}
    >
      <StyledAvatar
        {...props}
        source={{ uri: imageUri || defaultAvatar }}
        style={{
          width: size - 4,
          height: size - 4,
          borderWidth: size * 0.05,
        }}
      />
    </StyledLinearGradient>
  )
}

type StyledAvatarProps = {}
const StyledAvatar = styled(Image)<StyledAvatarProps>`
  ${({ theme }) => css`
    border-radius: 100px;
    border-color: ${theme.blackSecondary};
  `}
`

type StyledLinearGradientProps = {}
const StyledLinearGradient = styled(LinearGradient)<StyledLinearGradientProps>`
  justify-content: center;
  align-items: center;

  border-radius: 100px;
`
