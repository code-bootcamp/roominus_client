import styled from "@emotion/styled";
import { ChangeEventHandler } from "react";

const Input = styled.input`
  width: 13em;
  height: 3em;
  border: none;
  background-color: #ffffff;
  color: black;
  border: none;
  outline: none;
  padding: 0em 0.5em 0em 0.5em;
`;
interface Iprops {
  value: string | number | readonly string[];
  defaultValue: string | number | readonly string[];
  placeholder: any;
  onChange: ChangeEventHandler<HTMLInputElement>;
  // eslint-disable-next-line no-undef
  register: any;
  type: string;
}

export default function MobileSmallSquareInput(props: Iprops) {
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
