import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;  }
html,body{
  height: 100%;
  background: #f6f6f6;
}

button{ 
  cursor: pointer;
   }
`;

export default GlobalStyle;
