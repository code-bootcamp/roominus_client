import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.main`
  padding-bottom: 2em;
`;

export const Wrapper = styled.section`
  width: 100%;
  margin-top: 2em;
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
  margin: 0.5em;
`;

export const Step = styled.div`
  width: 25%;
  border: 1px solid white;
  text-align: center;
  color: white;
  font-size: 1.3em;
  padding: 13px;
  background-color: darkGray;

  @media ${breakPoints.tablet} {
    display: none;
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
  font-size: 1.3em;
  padding: 13px;
  background-color: #4a00e0;

  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const SearchBarBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;
  padding: 1em 0em 1em 0em;
`;

export const ImageTimeBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 1em;
`;
export const ImageBox = styled.div``;

export const Image = styled.img`
  width: 80%;
`;

export const TimeWrapper = styled.div`
  text-align: center;
  padding-top: 3em;
`;

export const TwoTimeBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5em;
  margin-bottom: 1.5em;
`;

export const TimeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  background-color: white;
  color: #26282c;
  border: 2px solid #26282c;
  width: 10em;
  height: 3.3em;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    transition: 0.3s;
    border: 2px solid #4a00e0;
    color: #4a00e0;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
`;
