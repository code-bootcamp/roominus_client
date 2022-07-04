import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.75rem;
  border-bottom: 1px solid #e5e5e5;
  position: fixed;
  z-index: 1;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  max-width: 1440px;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.img`
  :hover {
    cursor: pointer;
  }
  height: 2rem;
`;
export const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-left: 5rem;
  @media ${breakPoints.mobile} {
    padding-left: calc(5%);
    width: 70%;
    margin-left: 3rem;
  }
`;

export const MenuItem = styled.li`
  color: ${(props) => (props.isActive ? "purple" : "black")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};

  font-size: 20px;
  padding-right: 30px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    text-align: center;
    width: 100%;
    display: none;
  }
`;

export const LoginJoinMenuWrapper = styled.div``;
export const LoginJoinWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  margin-bottom: 5px;
`;

export const Contents = styled.span`
  :hover {
    cursor: pointer;
  }

  margin-right: 10px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    text-align: center;
    width: 100%;
    display: none;
  }
`;
