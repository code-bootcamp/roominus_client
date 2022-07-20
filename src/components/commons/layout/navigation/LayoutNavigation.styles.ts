import styled from "@emotion/styled";
import { IIsActiveProps } from "../Layout.types";

export const Wrapper = styled.div`
  height: 3em;
  background: linear-gradient(90deg, #8e2de2 3.31%, #4a00e0 100%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.3em;
  color: white;
`;

export const MenuItem = styled.div`
  margin: 0px 60px;
  cursor: pointer;
  font-size: 0.8em;

  color: ${(props: IIsActiveProps) => (props.isActive ? "yellow" : "white")};
  font-weight: ${(props: IIsActiveProps) =>
    props.isActive ? "bold" : "normal"};
  cursor: ${(props: IIsActiveProps) => (props.isActive ? "none" : "pointer")};
`;
