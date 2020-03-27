import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
  body{
      margin:0px;
      background: ${props => props.theme.color.bodyColor};
      color:${props => props.theme.color.fontColor};
    * {
      font-family: 'Roboto', sans-serif;
      box-sizing:border-box;
      outline:none;
    }
  }
`;

export default GlobalStyle;
