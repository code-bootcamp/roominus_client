import styled from "@emotion/styled";

const Button = styled.button`
  width: 7.4em;
  height: 3em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #26282c;
  color: #ffffff;
  font-weight: 500;
`;

export default function MobileBlackButton(props) {
  return (
    <Button type={props?.type} onClick={props?.onClick}>
      {props.title ? props.title : "버튼에 이름이 없네요^^"}
    </Button>
  );
}
