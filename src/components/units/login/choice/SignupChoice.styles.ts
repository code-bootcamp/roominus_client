import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const PersonalSignupBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 5em 5em 5em 5em;
  margin: auto;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.8em;
  }
`;

export const PersonalSignupBtn = styled.button`
  width: 100%;
  height: 2.5em;
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
  margin-bottom: 2em;
`;
export const SocialSignupBtnsBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
`;
export const SocialSignupBtns = styled.img`
  width: 19%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
`;

export const StoreOwnerSignupBox = styled.div`
  width: 40%;
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
  height: 2.5em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #26282c;
  color: #ffffff;
`;
