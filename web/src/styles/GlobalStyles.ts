import { createGlobalStyle, css } from "styled-components"

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    font-family: Roboto, sans-serif;
  }

  html,
  body,
  #root {
    min-height: 100vh;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    background: ${theme.background};
    color: ${theme.text};
  }

  button {
    cursor: pointer;
  }
`}
`
