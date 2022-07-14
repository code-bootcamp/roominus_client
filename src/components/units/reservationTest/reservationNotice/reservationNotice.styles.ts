import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  width: 100%;
`;

export const TitleBox = styled.div``;

export const ContainerTitle = styled.h1`
  font-size: 1.56em;
  font-weight: 700;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
`;

export const Step = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 50%;

  width: 10em;
  height: 10em;

  background: linear-gradient(
    90deg,
    #6ac0de -0.01%,
    #76bbe0 10.99%,
    #9eabe6 49.99%,
    #b6a2ea 81%,
    #bf9eeb 100%
  );

  @media ${breakPoints.tablet} {
    width: 8em;
    height: 8em;
  }

  @media ${breakPoints.mobile} {
    width: 4.5em;
    height: 4.5em;
  }
`;

export const StepNumber = styled.span`
  font-size: 2em;
  color: white;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

export const Guide = styled.span`
  font-size: 1.1em;
  font-weight: 500;

  @media ${breakPoints.tablet} {
    font-size: 0.8em;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.6em;
  }
`;

export const Arrow = styled.img`
  margin: 0em 0.2em 0em 0.2em;

  @media ${breakPoints.tablet} {
    width: 5em;
  }

  @media ${breakPoints.mobile} {
    width: 3em;
  }
`;

export const StepBoxs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StepBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

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
`;

export const RecommendationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1.5em;
`;

export const TypingBox = styled.div`
  font-weight: 800;
  font-size: 1.5em;
  color: #4a00e0e7;
  font-family: "GowunDodum-Regular";
`;
