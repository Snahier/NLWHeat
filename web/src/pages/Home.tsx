import bannerImg from "@assets/banner-girl.png"
import logoImg from "@assets/logo.svg"
import { MessageList } from "@components/MessageList"
import styled from "styled-components"

interface PageHomeProps {}

export const PageHome = ({ ...props }: PageHomeProps) => {
  return (
    <StyledPageHome {...props}>
      <Main>
        <LogoImg src={logoImg} alt="logo" />
        <MessageList />
      </Main>
      <Aside>
        <BannerImg src={bannerImg} alt="banner" />
      </Aside>
    </StyledPageHome>
  )
}

type StyledPageHomeProps = {}
const StyledPageHome = styled.div<StyledPageHomeProps>`
  justify-self: center;

  display: grid;
  grid:
    "main aside"
    /41.75rem 28.25rem;

  max-width: 1200px;
  min-width: 100vh;
`

type MainProps = {}
const Main = styled.main<MainProps>`
  grid-area: main;

  display: grid;
  grid:
    "logo    "
    "messages" 1fr;
  align-items: center;

  margin-top: 2rem;
`

type LogoImgProps = {}
const LogoImg = styled.img<LogoImgProps>`
  grid-area: logo;
`

type AsideProps = {}
const Aside = styled.aside<AsideProps>`
  grid-area: aside;
`

type BannerImgProps = {}
const BannerImg = styled.img<BannerImgProps>``
