import styled from "@emotion/styled";

const Button = styled.button`
  width: 9.4em;
  height: 3.5em;
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
  transition: all 250ms ease-in-out;
  background-color: #4a00e0;
  color: #ffffff;
`;

export default function WebPurpleButton(props) {
  return (
    <Button type={props.type}>
      {props.name ? props.title : "버튼에 이름이 없네요^^"}
    </Button>
  );
}