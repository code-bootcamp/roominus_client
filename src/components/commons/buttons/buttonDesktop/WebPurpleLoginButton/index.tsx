import styled from "@emotion/styled";
import { MouseEventHandler } from "react";

const Button = styled.button`
  width: 38em;
  height: 3.5em;
  border-radius: 15px;
  border: none;
  background-color: #4a00e0e7;
  color: #ffffff;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(142, 45, 226, 1) 30%,
      rgba(74, 0, 224, 1) 100%
    );
  }
  transition: all 250ms ease-in-out;
  font-weight: 500;
`;

interface IProps {
  onClick?: MouseEventHandler;
  type?: "button" | "submit" | "reset";
  title?: string;
}

export default function WebPurpleLoginButton(props: IProps) {
  return (
    <Button type={props?.type} onClick={props?.onClick}>
      {props.title ? props.title : "버튼에 이름이 없네요^^"}
    </Button>
  );
}
