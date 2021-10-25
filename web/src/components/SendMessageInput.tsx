import { HTMLAttributes } from "react"
import styled from "styled-components"

interface SendMessageInputProps extends HTMLAttributes<HTMLDivElement> {}

export const SendMessageInput = ({ ...props }: SendMessageInputProps) => {
  return (
    <StyledSendMessageInput {...props}>
      <Label>Mensagem</Label>
      <TextArea placeholder="Qual sua expectativa para o evento?" rows={10}></TextArea>
      <SendButton>enviar mensagem</SendButton>
    </StyledSendMessageInput>
  )
}

type StyledSendMessageInputProps = {}
const StyledSendMessageInput = styled.div<StyledSendMessageInputProps>`
  display: grid;

  width: 100%;

  background: #202024;
`

type LabelProps = {}
const Label = styled.label<LabelProps>`
  padding: 1rem 1.5rem;

  background: #29292e;
`

type TextAreaProps = {}
const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  padding: 1.5rem;

  border: none;
  background: transparent;

  color: #8d8d99;

  resize: vertical;
`

type SendButtonProps = {}
const SendButton = styled.button<SendButtonProps>`
  justify-self: end;

  margin: 1.5rem;
  width: fit-content;
  padding: 0.75rem 2rem;

  border: none;
  background: #ff008e;

  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`
