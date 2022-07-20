import styled from "@emotion/styled";
export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 2em 2em 2em 2em;
`;
export const Title = styled.h1`
  padding-bottom: 2em;
  font-size: 1.8em;
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;
export const Error = styled.div`
  color: red;
  font-size: 1em;
`;

export const InputBox = styled.div`
  display: flex;
  gap: 10em;
  padding-bottom: 1em;
  & span {
    width: 100%;
    font-size: 1.1em;
  }
`;

export const EmailInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5em;
`;

export const EmailInput = styled.input`
  width: 90%;
  height: 2em;
  border: none;
  border-bottom: 1px solid #c9c9c9;
  margin-right: 1em;
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
  margin-bottom: 10em;
`;

export const ReasonBox = styled.div`
  display: flex;
  flex-direction: column;

  border-radius: 1em;
  border: 1px solid darkgray;
  box-shadow: 10px 10px 39px rgba(183, 96, 202, 0.25);

  padding: 2em;
  margin: 1em;
`;
