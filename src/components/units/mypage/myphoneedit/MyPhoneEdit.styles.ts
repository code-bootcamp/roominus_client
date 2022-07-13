import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 100%;
  padding: 2em 0em 2em 0em;
`;

export const Title = styled.h1``;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const UserInfoBox = styled.div`
  border-bottom: 1px solid gray;
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

export const UserCertificationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
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

export const CertificationInput = styled.input`
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const UserCertification = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding-top: 2em;
`;

export const DeleteBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
