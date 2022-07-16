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

    // 세로 스크롤제거 -> 했더니 메인에서 양 옆에 흰색 선이 생겨서 주석처리 먼저 해놓습니다. 스크롤바 없이 스크롤은 잘 됩니다.

    /* -ms-overflow-style: none;  */
    /* IE and Edge */
    /* scrollbar-width: none;  */
    /* Firefox */
    /* ::-webkit-scrollbar {
      display: none;
    }  */
    /* Chrome, Safari, Opera*/
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
