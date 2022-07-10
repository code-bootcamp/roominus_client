import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    @media ${breakPoints.mobile} {
      max-width: 390px;
    }
  }

  html,
  body {
    max-width: 1200px;
    margin: auto;
    width: 100vw;
    height: 100vh;
    font-size: 16px;
    font-family: "Noto Sans KR", sans-serif;

    @media ${breakPoints.tablet} {
    }

    @media ${breakPoints.mobile} {
      padding: 0px;
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

  // 기본 폰트

  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
  .notosanskr * {
    font-family: "Noto Sans KR", sans-serif;
  }

  // 커뮤니티 페이지 폰트
  @font-face {
    font-family: "GowunDodum-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "PressStart2P";
    src: url("/fonts/PressStart2P-Regular.ttf");
  }
`;
