import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    font-size: 62.5%;
  }
  body {
    @font-face {
      font-family: "GoBold";
      src: url("${require("../public/fonts/gobold/Gobold_Bold.otf")}") format("opentype");
      font-style: normal;
      font-weight: bold;
    }
    @font-face {
      font-family: "GoBold";
      src: url("${require("../public/fonts/gobold/Gobold_Regular.otf")}") format("opentype");
      font-style: normal;
      font-weight: normal;
    }
    font-family: "GoBold", sans-serif;
    font-weight: normal;
    font-style: normal;

    letter-spacing: 1px;
    box-sizing: border-box;
    background-color: black;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    /* box-sizing: inherit; */
    box-sizing: border-box;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
