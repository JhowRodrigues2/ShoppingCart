import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Lato', sans-serif;  }

    html,body{
  min-height: 100vh;
  min-width: 100%;
  background: #f6f6f6;
  overflow-x:hidden
    }
button{ 
  cursor: pointer;
   }
`;

export default GlobalStyle;
