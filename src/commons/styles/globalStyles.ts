import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: "myFont";
    /* margin: 0.3em 0em; */
    // 메인 상단에 빈 공간이 생깁니다
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    font-size: 16px;

    @media ${breakPoints.tablet} {
      margin: 0;
    }

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

  a {
    color: black;
    :hover {
      color: black;
    }
  }

  /* @font-face {
    font-family: "myFont";
    src: url("/fonts/Jua-Regular.ttf");
  } */
`;
