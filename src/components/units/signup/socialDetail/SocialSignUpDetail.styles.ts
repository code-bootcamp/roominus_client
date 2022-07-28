import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  min-height: 50em;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
  gap: 2em;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.7em;
  }
`;

export const Title = styled.h1`
  font-size: 2.8em;

  @media ${breakPoints.mobile} {
    font-size: 2em;
  }
`;
export const FormFirst = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;

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
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
`;
export const Error = styled.div`
  color: red;
  font-size: 1em;
`;

export const PhoneNoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.6em;
  @media ${breakPoints.mobile} {
    width: 100%;
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
  margin-top: 1em;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const VerificationNoBox = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
  position: relative;
`;
export const VerificationNoInput = styled.input`
  width: 96%;
  height: 2.5em;
  border-radius: 10px;
  border: 1px solid #c9c9c9;
  margin-right: 1em;
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
`;

export const ConfirmBtn = styled.button`
  width: 9.4em;
  height: 3.5em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(142, 45, 226, 1) 30%,
      rgba(74, 0, 224, 1) 100%
    );
  }

  background-color: #4a00e0e7;
  color: #ffffff;
`;
export const TimeOut = styled.span`
  margin: auto;
  position: absolute;
  top: 1em;
  right: 3em;
  visibility: hidden;
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
  height: 2.5em;
  border-radius: 10px;
  border: 1px solid #c9c9c9;
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
`;

export const SignUpBtns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2em;
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 1.2em;
  }
`;

export const WebPurpleSignUpButton = styled.button`
  width: 100%;
  height: 3.5em;
  border-radius: 15px;
  border: none;
  background-color: #4a00e0e7;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(142, 45, 226, 1) 30%,
      rgba(74, 0, 224, 1) 100%
    );
  }
  transition: all 250ms ease-in-out;
  font-weight: 500;
`;
