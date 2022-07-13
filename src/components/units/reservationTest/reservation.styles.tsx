import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const NoBox = styled.div`
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
`;

export const Notice = styled.p`
  font-size: 1.3em;
`;
export const Container = styled.main`
  padding: 2em 0em 2em 0em;
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 3em;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const ImageInfoBox = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
`;

export const ImageBox = styled.div``;

export const Image = styled.img`
  width: 27em;

  @media ${breakPoints.tablet} {
    width: 23em;
  }

  @media ${breakPoints.mobile} {
    width: 10em;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 40em;

  border: 1px solid gray;

  @media ${breakPoints.tablet} {
    font-size: 1em;
    width: 50%;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

export const ThemeTitle = styled.h1`
  font-size: 2em;
  font-family: "GowunDodum-Regular";

  @media ${breakPoints.tablet} {
    font-size: 3em;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 2em;
`;

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-top: 1px solid darkgray;
  padding-top: 1.5em;

  width: 100%;
  font-size: 2em;

  @media ${breakPoints.tablet} {
    font-size: 1.5em;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const InformationUse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid darkgray;
  padding: 1em;
`;
