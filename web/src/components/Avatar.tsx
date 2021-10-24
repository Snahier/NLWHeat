import styled, { css } from "styled-components"

interface AvatarProps {
  src: string
  alt?: string
}

export const Avatar = ({ src, alt, ...props }: AvatarProps) => {
  return (
    <StyledAvatar {...props}>
      <Image src={src} alt={alt} />
    </StyledAvatar>
  )
}

type StyledAvatarProps = {}
const StyledAvatar = styled.div<StyledAvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.5rem;
  height: 2.5rem;

  border-radius: 50%;
  background: linear-gradient(125deg, #ff008e, #ffcd1e);
`

type ImageProps = {}
const Image = styled.img<ImageProps>`
  ${({ theme }) => css`
    width: 2.25rem;
    height: 2.25rem;

    border: 0.25rem solid ${theme.background};
    border-radius: 50%;
  `}
`
