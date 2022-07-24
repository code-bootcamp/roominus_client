import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.5em;
  width: 100%;
  height: 4em;
  margin-top: 1em;

  @media ${breakPoints.mobile} {
    display: none;
  }

  & h1 {
    font-weight: 700;
    font-size: 1.5em;
    margin: 0;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

export const StepBoxs = styled.div`
  display: flex;
  gap: 1em;
  padding-top: 1em;

  @media ${breakPoints.mobile} {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const StepBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
  font-size: 1.3em;
  gap: 0.5em;

  width: 8em;
  height: 8em;

  border: 1px solid #b6a2ea;

  /* background: linear-gradient(
    90deg,
    #6ac0de -0.01%,
    #76bbe0 10.99%,
    #9eabe6 49.99%,
    #b6a2ea 81%,
    #bf9eeb 100%
  ); */

  & h4 {
    font-weight: 600;

    @media ${breakPoints.mobile} {
      padding: 0;
      margin: 0;
      font-size: 0.7em;
    }
  }

  & h6 {
    display: none;

    @media ${breakPoints.tablet} {
      display: none;
    }

    @media ${breakPoints.mobile} {
      display: inline;
      padding: 0;
      margin: 0;
      font-size: 0.8em;
    }
  }

  @media ${breakPoints.tablet} {
    width: 6.5em;
    height: 6.5em;
  }

  @media ${breakPoints.mobile} {
    gap: 0;
    width: 6em;
    height: 6em;
    font-size: 0.8em;
  }
`;

export const Arrow = styled.img`
  width: 4em;

  @media ${breakPoints.tablet} {
    width: 3em;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

// 테마 추천
export const SelectGuideBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3em 0em 1em 0em;
`;

export const ThemeGuide = styled.span`
  font-size: 1.5em;
  font-family: "GowunDodum-Regular";

  @media ${breakPoints.mobile} {
    font-size: 1.2em;
  }
`;

export const RecommendationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

export const TypingBox = styled.div`
  font-weight: 800;
  font-size: 2em;
  color: #4a00e0e7;
  font-family: "GowunDodum-Regular";
  text-shadow: 1px 1px 0px #b6a2ea, 2px 2px 0px #9eabe6, 3px 1px 0px #bf9eeb;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;
