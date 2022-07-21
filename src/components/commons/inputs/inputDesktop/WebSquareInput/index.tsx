import styled from "@emotion/styled";
import { ChangeEventHandler } from "react";

const Input = styled.input`
  width: 38em;
  height: 3.5em;
  border: none;
  background-color: #ffffff;
  color: black;
  border: none;
  outline: none;
  padding: 0em 0.5em 0em 0.5em;
`;

interface IProps {
  register: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string | number | readonly string[];
  defaultValue: string | number | readonly string[];
  placeholder: any;
  type: string;
}

export default function WebSquareInput(props: IProps) {
  return (
    <Input
      type={props?.type}
      {...props?.register}
      onChange={props?.onChange}
      value={props?.value}
      defaultValue={props?.defaultValue}
      placeholder={
        props.placeholder ? props.placeholder : "인풋플레이스홀더 부탁해요~"
      }
    />
  );
}
