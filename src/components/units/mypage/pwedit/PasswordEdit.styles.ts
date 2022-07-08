import styled from "@emotion/styled";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 5em;
`;

export const Wrapper = styled.form`
  width: 50%;
`;
export const Title = styled.h1`
  font-size: 2.8em;
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

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;
  gap: 1em;
`;
