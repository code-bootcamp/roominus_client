import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

const Button = styled.button`
  width: 4.7em;
  height: 2.5em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(142, 45, 226, 1) 30%,
      rgba(74, 0, 224, 1) 100%
    );
  }
  /* transition: all 250ms ease-in-out; */
  background-color: #4a00e0e7;
  color: #ffffff;
  font-weight: 500;
`;

interface IProps {
  onClick?: MouseEventHandler;
  type?: "button" | "submit" | "reset";
  title?: string;
}

export default function WebSmallPurpleButton(props: IProps) {
  return (
    <Button type={props?.type} onClick={props?.onClick}>
      {props.title ? props.title : "버튼에 이름이 없네요^^"}
    </Button>
  );
}
