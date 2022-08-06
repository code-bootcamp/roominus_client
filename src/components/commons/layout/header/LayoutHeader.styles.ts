import styled from "@emotion/styled";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import { breakPoints } from "../../../../commons/styles/media";
import { IIsActiveProps } from "../Layout.types";

export const Container = styled.nav`
  width: 100%;
  padding: 0.3em;

  @media ${breakPoints.tablet} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 1em;
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
  width: 13em;
  @media ${breakPoints.tablet} {
    width: 20em;
    height: 3em;
    position: relative;
    top: 0.8em;
    left: 0em;
  }

  @media ${breakPoints.mobile} {
    width: 20em;
  }

  @media ${breakPoints.mobile} {
    height: 3em;
    position: relative;
    top: 0.8em;
    left: 0em;
  }
`;
export const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2em;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MenuItem = styled.li`
  font-size: 1.5em;
  font-weight: 500;
  cursor: pointer;
  color: ${(props: IIsActiveProps) => (props.isActive ? "#BF9EEB" : "#0000")};

  --b: 0.1em;
  --c: #bf9eeb;

  padding-block: var(--b);
  background: linear-gradient(var(--c) 50%, #26282c 0) 0%
      calc(100% - var(--_p, 0%)) / 100% 200%,
    linear-gradient(var(--c) 0 0) 0% var(--_p, 0%) / var(--_p, 0%) var(--b)
      no-repeat;
  -webkit-background-clip: text, padding-box;
  background-clip: text, padding-box;
  transition: 0.3s var(--_s, 0s) linear,
    background-size 0.3s calc(0.3s - var(--_s, 0s));

  :hover {
    ${(props: IIsActiveProps) => (props.isActive ? "none" : "--_p: 100%;")};
    ${(props: IIsActiveProps) => (props.isActive ? "none" : "--_s: 0.3s;")};
  }

  @media ${breakPoints.tablet} {
    font-size: 2em;
  }
`;

export const Hamburger = styled.div`
  display: none;

  @media ${breakPoints.tablet} {
    display: block;
    position: absolute;
    top: -0.5em;
    right: 0em;
    font-size: 1em;
    width: 100px;
    height: 100px;
  }

  @media ${breakPoints.mobile} {
    display: block;
    font-size: 1em;
  }
`;

export const MenuMainItem = styled.a`
  font-size: 1.8em;

  color: white;

  :hover {
    color: white;
  }
`;
export const MyMenubox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1em;
`;

export const MenuBox = styled.div`
  display: flex;
  padding-top: 2em;
  min-height: 40em;
`;
export const MyMenues = styled.a`
  color: #d1d1d1;
  margin-bottom: 0.8em;
  margin-left: 1em;
  font-size: 1.3em;

  :hover {
    color: #d1d1d1;
  }

  color: white;
`;

export const LoginBox = styled.div`
  margin-top: 1em;
`;

export const LandSBox = styled.div`
  display: flex;
  gap: 1.5em;
  width: 100%;
`;

export const LogInandSignBtn = styled.button`
  background-color: transparent;

  border: 1px solid white;

  width: 50%;
  height: 3em;
  cursor: pointer;

  a {
    :hover {
      color: white;
    }
    color: white;
  }
`;

export const LogOutBtn = styled.button`
  background-color: transparent;
  border: 1px solid white;
  width: 100%;
  height: 3em;
  color: white;

  cursor: pointer;
`;
