import bannerImg from "@assets/banner-girl.png"
import sealImg from "@assets/seal.svg"
import { AuthContext } from "@contexts/auth"
import { HTMLAttributes, useContext } from "react"
import styled, { css } from "styled-components"
import { Github } from "styled-icons/bootstrap"

interface LoginBoxProps extends HTMLAttributes<HTMLDivElement> {}

export const LoginBox = ({ ...props }: LoginBoxProps) => {
  const { signInUrl } = useContext(AuthContext)

  return (
    <StyledLoginBox {...props}>
      <BannerImg src={bannerImg} alt="banner" />
      <SealImg src={sealImg} alt="seal" />

      <Title>Envie e compartilhe sua mensagem</Title>
      <a href={signInUrl}>
        <SigninButton>
          <Github size="1.5rem" /> Entrar com Github
        </SigninButton>
      </a>
    </StyledLoginBox>
  )
}

type StyledLoginBoxProps = {}
const StyledLoginBox = styled.div<StyledLoginBoxProps>`
  position: relative;

  display: grid;
  grid:
    "banner"
    "title"
    "button";
  align-content: start;
  justify-items: center;

  background: #17171a;

  a {
    text-decoration: none;
  }
`

type BannerImgProps = {}
const BannerImg = styled.img<BannerImgProps>`
  grid-area: banner;
`

type SealImgProps = {}
const SealImg = styled.img<SealImgProps>`
  position: absolute;
  top: 8rem;
  left: 6rem;
`

type TitleProps = {}
const Title = styled.strong<TitleProps>`
  grid-area: title;

  margin-top: 2.5rem;

  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`

type SigninButtonProps = {}
const SigninButton = styled.button<SigninButtonProps>`
  ${({ theme }) => css`
    grid-area: button;

    display: flex;
    align-items: center;
    gap: 0.75rem;

    margin-top: 2rem;
    padding: 1rem 2.5rem;

    border: none;
    background: ${theme.yellow};

    color: ${theme.black};
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;

    &:hover {
      filter: brightness(0.9);
    }
  `}
`
