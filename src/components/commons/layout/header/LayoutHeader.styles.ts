import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.nav`
  width: 100%;
  height: 10%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${breakPoints.mobile} {
    font-size: 0.3em;
  }
`;

export const LogoWrapper = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  :hover {
    cursor: pointer;
  }
  height: 2rem;
  @media ${breakPoints.mobile} {
    height: 4em;
  }
`;
export const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuItem = styled.li`
  color: ${(props) => (props.isActive ? "purple" : "black")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};

  font-size: 1.25em;
  padding-left: 1.8em;
`;

export const LoginJoinMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
export const LoginJoinWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.3em;
`;

export const Contents = styled.span`
  :hover {
    cursor: pointer;
  }

  margin-left: 0.6em;
`;
