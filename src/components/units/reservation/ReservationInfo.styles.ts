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
`;

export const Step = styled.div`
  width: 25%;
  border: 1px solid white;
  text-align: center;
  color: white;
  font-size: 1.3em;
  padding: 13px;
  background-color: darkgray;
`;

export const StepNow = styled.div`
  width: 25%;
  border: 1px solid white;
  text-align: center;
  color: white;
  font-size: 1.3em;
  padding: 13px;
  background-color: #4a00e0;
`;

export const Row = styled.li`
  display: flex;
  flex-direction: row;
  line-height: 3em;
  width: 70em;
  border-bottom: 1px solid gray;
`;

export const InfoForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const info = styled.label`
  width: 30em;
  padding-left: 10em;
  padding-bottom: 3em;
`;

export const Input = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Data = styled.span``;

export const NotionBox = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 1em;
  padding: 4em;
`;

export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0em 3em 1em 4em;
`;

export const CheckBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const buttonWrapper = styled.div`
  display: flex;
`;
