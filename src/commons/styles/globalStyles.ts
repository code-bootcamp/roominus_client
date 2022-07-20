import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    margin: auto;
    max-width: 1200px;
    width: 100vw;
    height: 100vh;
    font-family: "Noto Sans KR", sans-serif;
    overflow-x: hidden; // 가로 스크롤 제거
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

  // 영어 폰트
  @font-face {
    font-family: "StMarie";
    src: url("/fonts/StMarie-Thin.otf");
  }
`;
