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
  font-size: 2.8em;
`;
export const FormFirst = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media ${breakPoints.mobile} {
    width: 80%;
    font-size: 1em;
  }
`;

export const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6em;
`;
export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1em;
`;
export const ImportantInfos = styled.span`
  margin-left: 0.3em;
  font-size: 1.4em;
  color: red;
`;
export const EmailTitle = styled.span`
  font-size: 1.3em;
  margin-bottom: 1em;
`;

export const EmailInputBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const EmailInput = styled.input`
  width: 100%;
  height: 2.5em;
  border-radius: 10px;
  border: 1px solid #c9c9c9;
  margin-right: 1em;
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
`;
export const Error = styled.div`
  color: red;
  font-size: 1em;
`;

export const PasswordBoxes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6em;
`;
export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PasswordTitle = styled.span`
  font-size: 1.3em;
  margin-bottom: 1em;
`;
export const PasswordInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

export const WarningBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #a3a8b71f;
  padding: 0.5em 0.5em 0.5em 0.5em;
`;
export const WarningMessage = styled.div`
  font-size: 0.8em;
`;

export const PasswordVerificationBoxes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6em;
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

export const NameBoxes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6em;
`;
export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NameTitle = styled.span`
  font-size: 1.3em;
  margin-bottom: 1em;
`;
export const NameInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const NameInput = styled.input`
  width: 100%;
  height: 2em;
  border: none;
  border-bottom: 1px solid #c9c9c9;
  margin-right: 1em;
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
`;
export const PhoneNoBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6em;
  @media ${breakPoints.mobile} {
    width: 80%;
    font-size: 1em;
  }
`;
export const PhoneNoTitle = styled.span`
  font-size: 1.3em;
  margin-bottom: 1em;
`;

export const PhoneNoInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1em;
`;
export const PhoneNoInput = styled.input`
  width: 80%;
  height: 2.5em;
  border-radius: 10px;
  border: 1px solid #c9c9c9;
  margin-right: 1em;
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
`;

export const VerificationInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const VerificationNoBox = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${breakPoints.mobile} {
    margin-right: 1em;
  }
`;
export const VerificationNoInput = styled.input`
  width: 90%;
  height: 2.5em;
  border-radius: 10px;
  border: 1px solid #c9c9c9;
  margin-right: 1em;
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
`;
export const TimeOut = styled.span`
  width: 10%;
`;

export const FormSecond = styled.form`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
  margin-bottom: 1.4em;
`;
