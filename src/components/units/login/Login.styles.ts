import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.section`
  margin-top: 3em;
  margin-bottom: 4em;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 55em;
  gap: 1em;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  margin-bottom: 1.5em;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ba9fe6;
`;
export const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4em;
  gap: 1em;
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 2em;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 2em;
  border: none;
  border-bottom: 1px solid #a3a8b7;
  outline: none;
  font-size: 1.3em;
`;
export const IDBoxes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const IDdBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Error = styled.div`
  font-size: 1.2em;
  color: red;
  margin-bottom: 2em;
`;
export const PasswordBoxes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const PasswordBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const EyeBox = styled.div`
  position: absolute;
  top: 0;
  right: 1em;
`;
export const LoginBtn = styled.button`
  width: 100%;
  height: 3.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  border: none;
  background-color: #4a00e0e7;
  color: #ffffff;
  font-size: 1.2em;
  margin-top: 1em;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(142, 45, 226, 1) 30%,
      rgba(74, 0, 224, 1) 100%
    );
  }
`;

export const SignUpBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2em;
  gap: 1em;
  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 2em;
  }
`;
export const SignUpdetailBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.4em;
`;

export const SignupLabel = styled.span`
  font-size: 1.2em;
  margin-right: 1em;
  cursor: default;
`;
export const SignUpbtn = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 1.4em;
  font-weight: 600;
  cursor: pointer;
`;
export const FindIdPasswordBtn = styled.button`
  border: none;
  background-color: transparent;
  color: black;
  font-size: 1.2em;
  cursor: pointer;
`;
export const Divider = styled.div`
  width: 40%;
  height: 1px;
  background-color: #a3a8b7;
  margin-bottom: 2em;
`;

export const SocialLoginBtns = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2em;

  @media ${breakPoints.mobile} {
    width: 100%;
    font-size: 2em;
  }
`;

export const KakaoBtn = styled.div`
  width: 100%;
  height: 3.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  border: none;
  background-color: #fee500;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  color: #000000 85%;
  font-size: 1.2em;
  cursor: pointer;
  margin-bottom: 1em;
`;
export const KakaoSymbol = styled.img`
  margin-left: 10%;
  margin-right: 28%;
  width: 1.2em;
  height: 1.2em;
`;
export const KakaoLabel = styled.span``;
export const GoogleBtn = styled.div`
  width: 100%;
  height: 3.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  border: none;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  color: #000000 85%;
  font-size: 1.2em;
  cursor: pointer;
`;
export const GoogleSymbol = styled.img`
  margin-left: 10%;
  margin-right: 28%;
  width: 1.2em;
  height: 1.2em;
`;
export const GoogleLabel = styled.span``;
