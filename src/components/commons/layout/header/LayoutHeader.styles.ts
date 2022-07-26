import styled from "@emotion/styled";

import { breakPoints } from "../../../../commons/styles/media";
import { IIsActiveProps } from "../Layout.types";

export const Container = styled.nav`
  width: 100%;
  padding: 0.3em;

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
  width: 13em;
  /* height: 2.5em; */
  @media ${breakPoints.tablet} {
    height: 3em;
    position: relative;
    top: 0.8em;
    left: 0em;
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

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const MenuItem = styled.li`
  font-size: 1.5em;
  font-weight: ${(props: IIsActiveProps) => (props.isActive ? "600" : "500")};
  cursor: ${(props: IIsActiveProps) => (props.isActive ? "none" : "pointer")};
  color: ${(props: IIsActiveProps) => (props.isActive ? "#BF9EEB" : "#26282c")};

  /* color: ${(props: IIsActiveProps) =>
    props.isActive ? "#BF9EEB" : "#0000"};

  --b: 0.1em;
  --c: #dab3f8;

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
  } */
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
  font-size: 2em;
`;
export const MyMenubox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const MyMenues = styled.a`
  color: #d1d1d1;
  margin-bottom: 0.8em;
  margin-left: 1.5em;
  :hover {
    color: #d1d1d1;
  }
`;
export const LogInandOutBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
