import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  height: 80em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 4em;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const PersonalSignupBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5em 5em 5em 5em;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.8em;
  }
`;

export const PersonalSignupBtn = styled.button`
  width: 100%;
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
  transition: all 250ms ease-in-out;
  background-color: #4a00e0;
  color: #ffffff;
  margin-bottom: 1em;
`;
export const SocialSignupBtnsBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StoreOwnerSignupBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5em 5em 5em 5em;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.8em;
  }
`;

export const StoreOwnerSignupBtn = styled.button`
  width: 100%;
  height: 3.5em;
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
