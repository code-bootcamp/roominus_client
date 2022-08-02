import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 50em;
  padding: 2em 2em 2em 2em;
`;

export const Title = styled.h1``;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 3em;
`;

export const PasswordBoxes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5em;
`;

export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const Error = styled.div`
  color: red;
  width: 40%;
  font-size: 1em;
  text-align: start;
`;
export const TitleBox = styled.div`
  width: 40%;

  display: flex;
  flex-direction: row;
  align-items: center;

  & p {
    color: red;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const PasswordInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  width: 40%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const PasswordInput = styled.input`
  width: 100%;
  height: 2em;
  border: none;
  border-bottom: 1px solid #c9c9c9;
  margin-right: 1em;
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
`;

export const CheckBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const WarningMessage = styled.div`
  font-size: 0.8em;
`;

export const PasswordVerificationBoxes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5em;
`;
export const PasswordVerificationBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PasswordVerificationTitle = styled.span`
  font-size: 1.3em;
  margin-bottom: 1em;
`;
export const PasswordVerificationInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;
export const PasswordVerificationInput = styled.input`
  width: 100%;
  height: 2em;
  border: none;
  border-bottom: 1px solid #c9c9c9;
  margin-right: 1em;
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
  padding-top: 10em;
  width: 100%;
`;
