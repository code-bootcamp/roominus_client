import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-family: "Noto Sans KR", sans-serif;
  }

  html,
  body {
    max-width: 1200px;
    /* padding: 0px 20px; */
    margin: auto;
    width: 100vw;
    height: 100vh;
    font-size: 16px;
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

  // 커뮤니티 페이지 폰트
  @font-face {
    font-family: "GowunDodum-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  // 기본 폰트

  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

  .notosanskr * {
    font-family: "Noto Sans KR", sans-serif;
  }
`;
