import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2em 0em 2em 0em;

  & p {
    font-size: 1.1em;
    margin: 0;

    @media ${breakPoints.mobile} {
      font-size: 1em;
    }
  }
`;
export const Title = styled.h1`
  font-size: 3em;
`;

export const HighLighting = styled.div`
  opacity: 0.35;
  width: 16em;
  height: 1em;
  margin-top: -4em;
  margin-bottom: 1em;
  background-color: purple;
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 1em;
  border: 1px solid purple;
  border-radius: 8px;
  margin-top: 2em;
  padding: 1.5em;
  box-shadow: 10px 10px 39px rgba(183, 96, 202, 0.25);

  @media ${breakPoints.mobile} {
    width: 100%;
  }

  & label {
    font-size: 1.5em;
  }
  & span {
    color: red;
    font-size: 1em;
  }
  & input {
    border-radius: 8px;
    padding: 0.8em;
    font-size: 1.2em;

    :invalid {
      border: 1px solid red;
    }
  }

  & textarea {
    border-radius: 8px;
    padding: 0.8em;
    font-size: 1.2em;
    height: 8em;

    :invalid {
      border: 1px solid red;
    }
  }
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

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2em;
`;
