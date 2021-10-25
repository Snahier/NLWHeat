import { Avatar } from "@components/Avatar"
import { SendMessageInput } from "@components/SendMessageInput"
import { AuthContext } from "@contexts/auth"
import { Github } from "@styled-icons/bootstrap"
import { LogOut } from "@styled-icons/boxicons-regular"
import { FormEvent, HTMLAttributes, useContext } from "react"
import styled, { css } from "styled-components"
import sealImg from "@assets/seal.svg"

interface SendMessageFormProps extends HTMLAttributes<HTMLFormElement> {}

export const SendMessageForm = ({ ...props }: SendMessageFormProps) => {
  const { user, signOut } = useContext(AuthContext)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  if (!user) return null
  return (
    <StyledSendMessageForm {...props} onSubmit={handleSubmit}>
      <SealImg src={sealImg} alt="seal" />
      <SignOutButton onClick={signOut}>
        <LogOut size="2rem" />
      </SignOutButton>

      <StyledAvatar src={user.avatar_url} alt="Snahier" />

      <Name>{user.name}</Name>

      <GithubProfileLink href="#">
        <Github size="1rem" />
        {user.login}
      </GithubProfileLink>

      <SendMessageInput style={{ marginTop: "3rem" }} />
    </StyledSendMessageForm>
  )
}

type StyledSendMessageFormProps = {}
const StyledSendMessageForm = styled.form<StyledSendMessageFormProps>`
  position: relative;

  display: grid;
  grid:
    "profileImg"
    "name      "
    "github    "
    "input     ";
  justify-items: center;

  padding: 1.5rem;
  padding-top: 3rem;

  background: #1b1b1f;
`

type SealImgProps = {}
const SealImg = styled.img<SealImgProps>`
  position: absolute;
  top: 0;
  right: 2.5rem;
  transform: translateY(-50%);
`

type SignOutButtonProps = {}
const SignOutButton = styled.button<SignOutButtonProps>`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;

  border: none;
  background: transparent;

  color: #c4c4cc;
`

type StyledAvatarProps = {}
const StyledAvatar = styled(Avatar)<StyledAvatarProps>`
  width: 7rem;
  height: 7rem;
`

type NameProps = {}
const Name = styled.span<NameProps>`
  margin-top: 1rem;

  font-size: 1.5rem;
  font-weight: bold;
`

type GithubProfileLinkProps = {}
const GithubProfileLink = styled.a<GithubProfileLinkProps>`
  ${({ theme }) => css`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    margin-top: 0.5rem;

    color: ${theme.text};
    text-decoration: none;
    font-size: 14px;
  `}
`
