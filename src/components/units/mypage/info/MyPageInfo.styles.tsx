import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6.25em 15em;
  background-color: beige;
  @media ${breakPoints.mobile} {
    font-size: 0.4em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 90%;

  border: 1px solid gray;
`;

export const Title = styled.span`
  font-size: 1.5em;
  font-weight: 600;
`;

export const Label = styled.label`
  font-size: 1.25em;
  font-weight: 600;
  width: 50%;
  color: #464646;
  background-color: aliceblue;
`;

export const Button = styled.button`
  width: 90%;
  height: 3.875em;
  font-weight: 700;
  font-size: 1em;
  margin-bottom: 0.5em;

  color: white;
  background-color: #9691ed;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
`;

export const ModalTitle = styled.span`
  font-size: 2.8em;
  text-align: center;
  padding: 0.9em;
`;

export const InputLabel = styled.span`
  display: flex;
  justify-items: left;
  font-size: 1.5em;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export const Error = styled.div`
  padding-top: 0.6em;
  font-size: 0.9em;
  color: red;
`;

export const ButtonWrapper = styled.div`
  padding: 0.6em;
  margin: 0.6em;
`;
