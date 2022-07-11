import styled from "@emotion/styled";

import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.nav`
  width: 100%;
  height: 8%;
  padding: 0.5em;

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
  padding-bottom: 1em;
`;

export const Logo = styled.img`
  cursor: pointer;
  height: 1.8em;

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
  gap: 2em;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MenuItem = styled.li`
  font-weight: ${(props) => (props.isActive ? "700" : "400")};
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};

  font-size: 1.5em;
`;

export const Contents = styled.span`
  :hover {
    cursor: pointer;
  }

  margin-left: 0.6em;
`;

export const Toggle = styled.div``;
export const Hamburger = styled.div`
  display: none;

  @media ${breakPoints.tablet} {
    display: block;
    position: absolute;
    top: -0.5em;
    right: 1em;
    font-size: 1em;
    width: 100px;
    height: 100px;
  }

  @media ${breakPoints.mobile} {
    display: block;
    font-size: 0.8em;
  }
`;
