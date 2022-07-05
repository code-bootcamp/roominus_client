import styled from "@emotion/styled";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.nav`
  width: 100%;
  height: 10%;
  padding: 0em 5em 0em 5em;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 1em 1em 1em 1em;
  }
`;

export const Wrapper = styled.div`
  display: flex;
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
  cursor: pointer;
  height: 2em;

  @media ${breakPoints.mobile} {
    margin: 1em;
    height: 3em;
  }
`;
export const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
    width: 70%;
    margin-left: 3em;
  }
`;

export const MenuItem = styled.li`
  color: ${(props) => (props.isActive ? "purple" : "black")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};

  font-size: 1.25em;
  padding-left: 1.8em;

  @media ${breakPoints.tablet} {
    font-size: 0.5em;
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
  width: 95%;
  margin-bottom: 0.3em;
`;

export const Contents = styled.span`
  :hover {
    cursor: pointer;
  }

  margin-left: 0.6em;

  @media ${breakPoints.tablet} {
    font-size: 0.5em;
  }

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
    font-size: 4em;
  }
`;

export const Close = styled(CloseOutlined)`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    font-size: 3em;
  }
`;
export const Toggle = styled.div``;
export const ToggleMenuWrapper = styled.ul`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    flex-direction: column;
    text-align: center;
    font-size: 2em;
    width: 100%;
    padding: 15px;
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
