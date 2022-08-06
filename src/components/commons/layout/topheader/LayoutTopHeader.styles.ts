import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.nav`
  width: 100%;
  height: 2%;
  padding: 0.3em 0.5em 0em 0em;

  @media ${breakPoints.tablet} {
    padding: 0;
    height: 1.5%;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const LoginJoinMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
export const LoginJoinWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.5em;
  margin-bottom: 0.3em;
`;

export const Contents = styled.span`
  font-weight: 500;
  cursor: pointer;
  color: "#5F6269";
`;
