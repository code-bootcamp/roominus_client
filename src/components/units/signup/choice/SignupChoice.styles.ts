import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  height: 40em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
  margin-top: 4em;
  margin-bottom: 4em;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
`;

export const SignUpTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ba9fe6;
  font-size: 1.5em;
`;

export const SignupChoiceBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1.5em;
  @media ${breakPoints.mobile} {
    flex-direction: column;
  }
`;
export const PersonalSignupBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 5em 5em 5em;
  border: 1px solid #d9d6e0;
  border-radius: 15px;
  gap: 20px;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.8em;
  }
`;

export const PersonalSignupBtn = styled.button`
  width: 80%;
  height: 50px;
  font-size: 1.2em;
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
  transition: all 250ms ease-in-out;
  background-color: #4a00e0;
  color: #ffffff;
`;
export const SocialSignupBtnsBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
`;

export const StoreOwnerSignupBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5em 5em 5em 5em;
  border: 1px solid #d9d6e0;
  border-radius: 15px;
  gap: 20px;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.8em;
  }
`;

export const StoreOwnerSignupBtn = styled.button`
  width: 80%;
  height: 50px;
  font-size: 1.2em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #26282c;
  color: #ffffff;
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

  margin-bottom: 1em;
`;
export const KakaoSymbol = styled.img`
  width: 45px;
  height: 45px;
  background-color: #fee500;
  border-radius: 100%;
  padding: 10px;
  cursor: pointer;
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
`;
export const GoogleSymbol = styled.img`
  width: 45px;
  height: 45px;
  background-color: white;
  border: 1px solid #e5e8eb;
  border-radius: 100%;
  padding: 7px;
  cursor: pointer;
`;
export const GoogleLabel = styled.span``;
