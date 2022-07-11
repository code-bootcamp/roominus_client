import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.main`
  padding: 2em 0em 2em 0em;
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
  }
`;

export const StepBar = styled.div`
  width: 100%;
  height: 3.5em;
  display: flex;

  @media ${breakPoints.tablet} {
    height: 5em;
  }
`;

export const Step = styled.div`
  width: 25%;
  border: 1px solid white;
  text-align: center;
  color: white;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkGray;

  @media ${breakPoints.tablet} {
    padding: 1.6em;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const StepNow = styled.div`
  width: 25%;
  border: 1px solid white;
  text-align: center;
  color: white;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4a00e0;
  @media ${breakPoints.tablet} {
    padding: 1.6em;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const SearchBarBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  padding: 1em 0em 1em 0em;

  @media ${breakPoints.tablet} {
    gap: 1em;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
`;

export const ImageInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1em;
  gap: 2em;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
  }
`;

export const ImageBox = styled.div``;

export const Image = styled.img`
  width: 100%;

  @media ${breakPoints.tablet} {
    width: 21.88em;
    height: 31.25em;
  }
  @media ${breakPoints.mobile} {
    width: 15em;
    height: 20em;
  }
`;

export const InfoBox = styled.div`
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const ThemeInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
`;
export const ThemeInfo = styled.h2`
  font-size: 1.3em;

  @media ${breakPoints.tablet} {
    font-size: 2em;
  }
  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  gap: 2em;
  padding-top: 1em;
`;

export const TimeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  background-color: white;
  color: #26282c;
  border: 2px solid #26282c;
  width: 8em;
  height: 3em;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transition: 0.3s;
    border: 2px solid #4a00e0;
    color: #4a00e0;
  }

  @media ${breakPoints.tablet} {
    width: 5em;
    height: 2em;
  }
  @media ${breakPoints.mobile} {
    width: 5em;
    height: 2em;
  }

  :disabled {
    background-color: black;
    color: white;
    cursor: default;
    border: none;
  }
`;

export const TimeButtonLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Time = styled.span`
  @media ${breakPoints.tablet} {
    font-size: 0.8em;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.7em;
  }
`;

export const Status = styled.span`
  font-size: 0.7em;
  color: darkgray;

  @media ${breakPoints.tablet} {
    font-size: 0.5em;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.5em;
  }
`;
