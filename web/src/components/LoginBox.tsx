import styled, { css } from "styled-components"
import bannerImg from "@assets/banner-girl.png"
import sealImg from "@assets/seal.svg"
import { Github } from "styled-icons/bootstrap"

interface LoginBoxProps {}

export const LoginBox = ({ ...props }: LoginBoxProps) => {
  return (
    <StyledLoginBox {...props}>
      <BannerImg src={bannerImg} alt="banner" />
      <SealImg src={sealImg} alt="seal" />

      <Title>Envie e compartilhe sua mensagem</Title>
      <SigninButton>
        <Github size="1.5rem" /> Entrar com Github
      </SigninButton>
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
