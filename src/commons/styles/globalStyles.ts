import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "myFont";
  }

  html,
  body {
    width: 100vw;
    height: 100vh;

    @media ${breakPoints.mobile} {
      font-size: 12px;
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
