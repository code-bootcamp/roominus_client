import styled from "@emotion/styled";
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 2em 0em 2em 0em;
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

export const EmailInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const EmailInput = styled.input`
  width: 100%;
  height: 2em;
  border: none;
  border-bottom: 1px solid #c9c9c9;
  margin-right: 1em;
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
  margin-bottom: 10em;
`;
