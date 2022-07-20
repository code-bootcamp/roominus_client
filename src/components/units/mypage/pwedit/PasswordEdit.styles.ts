import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 2em 2em 2em 2em;
`;
export const Title = styled.h1`
  margin-bottom: 2em;
`;

export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
export const Error = styled.div`
  color: red;
  font-size: 1em;
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
export const PasswordBoxes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6em;
`;
export const PasswordBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5em;
`;

export const PasswordTitle = styled.span`
  font-size: 1.3em;
  margin-bottom: 1em;
`;
export const PasswordInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
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
  gap: 1.5em;
`;
