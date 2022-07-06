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
    max-width: 1440px;
    padding: 0px 20px;
    margin: auto;
    width: 100vw;
    height: 100vh;
    font-size: 16px;
    font-family: "GowunDodum-Regular";
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

  @font-face {
    font-family: "GowunDodum-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "NanumSquareRound";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "GangwonEdu_OTFLightA";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
`;
