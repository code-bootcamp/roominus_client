import styled from "@emotion/styled";

const Input = styled.input`
  width: 38em;
  height: 3.5em;
  border: none;
  border-radius: 10px;
  background-color: #ffffff;
  color: black;
  border: none;
  outline: none;
  padding: 0em 0.5em 0em 0.5em;
  text-decoration-line: underline;
  text-decoration-color: #c2c2c2;
`;

export default function Input07(props) {
  return <Input type="text" placeholder="-를 입력해주세요." />;
}
