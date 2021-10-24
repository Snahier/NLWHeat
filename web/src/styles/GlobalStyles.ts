import { createGlobalStyle, css } from "styled-components"

export const GlobalStyles = createGlobalStyle`
${() => css`
  html,
  body,
  #root {
    min-height: 100vh;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  button {
    cursor: pointer;
  }
`}
`
