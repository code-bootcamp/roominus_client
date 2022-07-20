import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 100%;
  padding: 2em 2em 2em 2em;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  width: 100%;
`;

export const DeleteBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  color: gainsboro;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2em;
`;

export const UserInfoBox = styled.div`
  border-bottom: 1px solid darkgray;
  line-height: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;

  @media ${breakPoints.mobile} {
  }
`;

export const UserDataLabel = styled.h5`
  font-size: 1.2em;
  width: 130px;
  margin: 0px;

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

export const UserData = styled.p`
  margin-bottom: 0px;
  margin-right: 10px;
`;

export const Edit = styled.span`
  color: #4a00e0;
  font-weight: 600;

  :hover {
    color: red;
    cursor: pointer;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: auto;
  padding-bottom: 2em;
  gap: 1em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const PhoneNewInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const PhoneBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;
export const PhoneNewInput = styled.input`
  width: 100%;
  height: 3em;
  border-radius: 10px;
  border: 1px solid #c9c9c9;
  margin-right: 1em;
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
  font-size: 1em;
`;

export const VerificationInputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const VerificationNoBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;
export const VerificationNoInput = styled.input`
  width: 100%;
  height: 3em;
  border-radius: 10px;
  border: 1px solid #c9c9c9;
  margin-right: 1em;
  outline: none;
  font-size: 1.3em;
  padding: 0em 0.8em 0em 0.8em;
  font-size: 1em;
`;

export const ConfirmBtn = styled.button`
  width: 5em;
  height: 3em;
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
  top: 0.7em;
  right: 2em;
  visibility: hidden;
`;

export const Error = styled.span`
  color: red;
  font-size: 1em;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding-top: 15em;
`;
export const DeleteForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-bottom: 2em;
  gap: 1em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
