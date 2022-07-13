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
  gap: 2em;

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
  display: flex;
  background-color: rebeccapurple;
`;

export const ImageBox = styled.div`
  background-color: rebeccapurple;
`;

export const Image = styled.img`
  width: 80%;

  @media ${breakPoints.tablet} {
    width: 70%;
  }
  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: pink;
  width: 100%;

  @media ${breakPoints.mobile} {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: red;
    width: 100%;
  }
`;

export const ThemeTitle = styled.h1`
  font-size: 2em;

  @media ${breakPoints.tablet} {
    font-size: 3em;
  }
  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;
