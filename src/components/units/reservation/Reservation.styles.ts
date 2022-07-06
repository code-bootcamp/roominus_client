import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.main``;

export const Wrapper = styled.section`
  width: 100%;
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
  }
`;

export const ImageBox = styled.div``;

export const Image = styled.img`
  width: 80%;
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

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const InputLabel = styled.label`
  padding-right: 10px;
`;

export const Input = styled.input`
  width: 40%;
  height: 3em;
  border: none;
  border-radius: 15px;
  outline: none;
  font-size: 1.3em;
  padding: 10px;
  margin-bottom: 0.5em;
`;

export const TimeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const RadioBox = styled.div`
  border: 1px solid gray;
  width: 100px;
  margin-right: 10px;
  background-color: aliceblue;
`;

export const RadioInput = styled.input`
  color: white;

  text-align: center;

  background: linear-gradient(90deg, #8e2de2 3.31%, #4a00e0 100%);

  visibility: hidden;
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
