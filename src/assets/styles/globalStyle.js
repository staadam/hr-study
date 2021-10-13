import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
  }

  *, *::before, *::after{
    box-sizing: inherit;
  }

  body{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  a, button, input{
    font-family: 'Montserrat', sans-serif;
  }
`;
