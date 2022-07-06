import styled from "@emotion/styled";

const Input = styled.input`
  width: 16em;
  height: 3em;
  border: none;
  background-color: #ffffff;
  color: black;
  border: none;
  outline: none;
  padding: 0em 0.5em 0em 0.5em;
  text-decoration-line: underline;
`;

export default function Input05(props) {
  return <Input type="text" placeholder="-를 입력해주세요." />;
}
