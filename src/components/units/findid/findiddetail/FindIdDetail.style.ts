import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.8em;
  }
`;
export const IDinfoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  margin-top: 2em;
`;

export const IDTitle = styled.h2``;
export const SearchingID = styled.h2``;
export const IDdetailInfo = styled.h2`
  margin-bottom: 2em;
`;
export const LoginBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.8em;
  }
`;
