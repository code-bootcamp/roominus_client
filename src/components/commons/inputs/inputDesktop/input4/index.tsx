import styled from "@emotion/styled";

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

export default function Input10(props) {
  return <Input type="text" placeholder="홍길동" />;
}
