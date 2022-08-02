import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    text-align: center;
  }
`;

export const Title = styled.h1`
  margin-top: 1em;
  font-size: 3em;
`;

export const WarningBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 1em;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 1.6em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: auto;
    text-align: center;
  }
`;
export const Warning = styled.pre`
  text-align: center;
  margin: auto;
  font-size: 1em;
  margin-bottom: 1.4em;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: auto;
    text-align: center;
    margin-bottom: 1.4em;
  }
`;
export const CheckBox = styled.div`
  margin-bottom: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 9.25em;
  height: 3em;
  color: white;
  font-size: 1em;
  background-color: #4a00e0e7;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(142, 45, 226, 1) 30%,
      rgba(74, 0, 224, 1) 100%
    );
  }
  @media ${breakPoints.mobile} {
    font-size: 1.4em;
  }
`;
export const Check = styled.input`
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
  zoom: 1.3;
  accent-color: #4a00e0e7;
  @media ${breakPoints.mobile} {
    font-size: 1.2em;
  }
`;
export const CheckLabel = styled.span`
  font-size: 1em;
  cursor: pointer;
`;
export const NecessityInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding: 1em 1em 1em 1em;
  border: 1px dotted #a3a8b7;
  border-radius: 10px;
  margin-bottom: 1em;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 1.4em;
    padding: 1em 1em 1em 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    margin-bottom: 1.4em;
  }
`;
export const NecessityTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NecessityTitles = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NecessityTitle = styled.span`
  color: red;
  margin-right: 0.5em;
  font-size: 1em;
`;

export const NecessitySubTitle = styled.span`
  font-size: 1em;
`;
export const NecessityCheckBoxes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const NecessityCheckBox = styled.input`
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
  zoom: 1.3;
  accent-color: #4a00e0e7;
  @media ${breakPoints.mobile} {
    width: 1em;
    height: 1em;
  }
`;
export const NecessityCheckBoxTitle = styled.span`
  font-size: 1em;
`;

export const NecessityInfo = styled.pre`
  white-space: pre-wrap;
`;
export const OptionalInfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  padding: 1em 1em 1em 1em;
  border: 1px dotted #a3a8b7;
  border-radius: 10px;
  margin-bottom: 1em;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 1.4em;
    padding: 1em 1em 1em 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    margin-bottom: 1.4em;
  }
`;
export const OptionalTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const OptionalTitles = styled.div`
  display: flex;
  flex-direction: row;
`;

export const OptionalTitle = styled.span`
  color: black;
  margin-right: 0.5em;
  font-size: 1em;
`;

export const OptionalSubTitle = styled.span`
  font-size: 1em;
`;
export const OptionalCheckBoxes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const OptionalCheckBox = styled.input`
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
  zoom: 1.3;
  accent-color: #4a00e0e7;
  @media ${breakPoints.mobile} {
    width: 1em;
    height: 1em;
  }
`;
export const OptionalCheckBoxTitle = styled.span`
  font-size: 1em;
`;

export const OptionalInfo = styled.pre`
  white-space: pre-wrap;
`;
export const ButtonBox = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2em;
  @media ${breakPoints.mobile} {
    width: 90%;
    font-size: 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 2em;
  }
`;
