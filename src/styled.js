import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`  
  * {
    box-sizing: border-box;
  };

  body {
    margin: 0;
    padding: 0;
    background-color: #080808;
    color: white;
  }

  body,
  button,
  a {
    font-family: 'Questrial', sans-serif;
  }
`;
