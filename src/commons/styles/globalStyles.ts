import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "myFont";
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    font-size: 16px;

    @media ${breakPoints.mobile} {
      font-size: 12px;
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
