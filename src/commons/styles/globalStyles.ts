import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    box-sizing: border-box;

    font-family: "myFont";
    margin: 0.3em 0em;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    font-size: 16px;
    @media ${breakPoints.mobile} {
      margin: 0;
    }
  }

  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  /* @font-face {
    font-family: "myFont";
    src: url("/fonts/Jua-Regular.ttf");
  } */
`;
