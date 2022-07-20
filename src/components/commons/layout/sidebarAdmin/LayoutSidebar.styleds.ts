import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { IIsActiveProps } from "../Layout.types";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 10%;
  border-right: 1px solid darkgray;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Wrapper = styled.section``;

export const MenuBox = styled.div`
  padding-top: 10em;
`;

export const MenuItem = styled.li`
  font-weight: ${(props: IIsActiveProps) => (props.isActive ? "700" : "400")};
  cursor: ${(props: IIsActiveProps) => (props.isActive ? "none" : "pointer")};

  font-size: 1.3em;
  padding-bottom: 0.5em;
`;
