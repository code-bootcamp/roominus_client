import styled from "@emotion/styled";

const Button = styled.button`
  width: 38em;
  height: 3.5em;
  border-radius: 10px;
  border: none;
  background-color: #4a00e0;
  color: #ffffff;
  cursor: pointer;
`;

export default function Button06(props) {
  return <Button>{props.name ? props.name : "Button"}</Button>;
}
