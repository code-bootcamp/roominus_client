import { css } from "@emotion/react";
import { breakPoints } from "./media";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    /* font-family: "GowunDodum-Regular"; */
    /* margin: 0.3em 0em; */
    // 메인 상단에 빈 공간이 생깁니다
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    font-size: 16px;
    font-family: "Noto Sans KR";

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

  // 폰트 예시

  @import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);

  .notosanskr * {
    font-family: "Noto Sans KR", sans-serif;
  }
`;
