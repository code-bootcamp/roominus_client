import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
export const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  border-bottom: 1px solid #e5e5e5;
  /* position: fixed; */
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
  cursor: pointer;
  height: 2rem;

  @media ${breakPoints.mobile} {
    margin: 1rem;
    height: 2rem;
  }
`;
export const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    width: 70%;
    margin-left: 3rem;
  }
`;

export const MenuItem = styled.li`
  color: ${(props) => (props.isActive ? "purple" : "black")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};

  font-size: 1.2rem;
  padding-right: 15px;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const LoginJoinMenuWrapper = styled.div``;
export const LoginJoinWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  margin-bottom: 7px;
`;

export const Contents = styled.span`
  :hover {
    cursor: pointer;
  }

  margin-right: 5px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    text-align: center;
    width: 100%;
    display: none;
  }
`;

export const Menu = styled(MenuOutlined)`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    font-size: 2rem;
  }
`;

export const Close = styled(CloseOutlined)`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    font-size: 2rem;
  }
`;
export const Toggle = styled.div``;
export const ToggleMenuWrapper = styled.ul`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    flex-direction: column;
    text-align: center;
    font-size: 1.5rem;

    width: 100%;
    background-color: beige;
    padding: 20px;
  }
`;

export const ToggleMenu = styled.li`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
