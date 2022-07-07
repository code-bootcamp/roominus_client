import styled from "@emotion/styled";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.nav`
  width: 100%;
  height: 10%;
  padding: 0.5em;

  border-bottom: 1px solid #b2b2b2;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 1em 1em 1em 1em;
  }

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

  @media ${breakPoints.tablet} {
    font-size: 0.5em;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.5em;
  }
`;

export const LogoWrapper = styled.div`
  text-align: center;
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 2em;

  @media ${breakPoints.tablet} {
    height: 2em;
  }

  @media ${breakPoints.mobile} {
    height: 2em;
  }
`;
export const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MenuItem = styled.li`
  color: ${(props) => (props.isActive ? "purple" : "black")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};

  font-size: 1.5em;
  padding-left: 1.8em;
`;

export const Contents = styled.span`
  :hover {
    cursor: pointer;
  }

  margin-left: 0.6em;
`;

export const Menu = styled(MenuOutlined)`
  display: none;

  @media ${breakPoints.tablet} {
    display: block;
    font-size: 3em;
  }

  @media ${breakPoints.mobile} {
    display: block;
    font-size: 3em;
  }
`;

export const Close = styled(CloseOutlined)`
  display: none;

  @media ${breakPoints.tablet} {
    display: block;
    font-size: 3em;
  }

  @media ${breakPoints.mobile} {
    display: block;
    font-size: 3em;
  }
`;
export const Toggle = styled.div``;
export const ToggleMenuWrapper = styled.ul`
  display: none;

  @media ${breakPoints.tablet} {
    display: block;
    flex-direction: column;
    text-align: center;
    font-size: 2em;
    width: 100%;
    padding: 15px;
  }

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

  @media ${breakPoints.tablet} {
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
  }

  @media ${breakPoints.mobile} {
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
