import styled from "@emotion/styled";

const Button = styled.button`
  width: 4.7em;
  height: 2.5em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #26282c;
  color: #ffffff;
  font-weight: 500;
`;

interface IProps {
  onClick?: any;
  type?: "button" | "submit" | "reset";
  title?: string;
  value?: any;
}

export default function WebSmallBlackButton(props: IProps) {
  return (
    <Button type={props?.type} onClick={props?.onClick}>
      {props.title ? props.title : "버튼에 이름이 없네요^^"}
    </Button>
  );
}
