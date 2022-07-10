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
  }
`;

export const Title = styled.h1`
  margin-top: 1em;
  font-size: 3em;
`;

export const WarningBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
`;
export const Warning = styled.pre`
  font-size: 1em;
`;
export const CheckBox = styled.div`
  margin-left: 50%;
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
  :hover {
    background: linear-gradient(
      90deg,
      rgba(142, 45, 226, 1) 30%,
      rgba(74, 0, 224, 1) 100%
    );
  }
  transition: all 250ms ease-in-out;
`;
export const Check = styled.input`
  margin-right: 0.5em;
  width: 1em;
  height: 1em;
  @media ${breakPoints.mobile} {
    width: 1.4em;
    height: 1.4em;
  }
`;
export const CheckLabel = styled.span`
  font-size: 1em;
`;
export const NecessityInfoBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  background-color: #d9d9d998;
  padding: 1em 1em 1em 1em;
  border-radius: 10px;
  margin-bottom: 1em;
  @media ${breakPoints.mobile} {
    width: 90%;
    font-size: 0.5em;
    padding: 4em 4em 4em 4em;
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
  @media ${breakPoints.mobile} {
    width: 2em;
    height: 2em;
  }
`;
export const NecessityCheckBoxTitle = styled.span`
  font-size: 1em;
`;

export const NecessityInfo = styled.pre`
  white-space: pre-wrap;
`;
export const OptionalInfoBox = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  background-color: #d9d9d998;
  padding: 1em 1em 1em 1em;
  border-radius: 10px;
  margin-bottom: 1em;
  @media ${breakPoints.mobile} {
    width: 90%;
    font-size: 0.5em;
    padding: 4em 4em 4em 4em;
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
  @media ${breakPoints.mobile} {
    width: 2em;
    height: 2em;
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
  margin-bottom: 1em;
`;
