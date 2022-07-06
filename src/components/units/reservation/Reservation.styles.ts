import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.main``;
export const Wrapper = styled.section`
  width: 100%;
  margin-top: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
  }
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;

export const SelectBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
`;

export const InputBox = styled.div``;
export const InputLabel = styled.label``;
export const Input = styled.input`
  width: 100%;
  height: 2em;
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
  font-size: 1.3em;
`;

export const Error = styled.div`
  font-size: 1.2em;
  color: red;
  margin-bottom: 2em;
`;
export const PasswordBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const CancelBtn = styled.button`
  width: 50%;
  height: 4em;
  border-radius: 10px;
  font-size: 1em;
  border: none;
  color: white;
  background-color: #b2b2b2;
  cursor: pointer;
`;
export const SubmitBtn = styled.button`
  width: 50%;
  height: 4em;
  border-radius: 10px;
  font-size: 1em;
  border: none;
  color: white;
  background-color: #4a00e0;
  cursor: pointer;
`;
