import styled from "@emotion/styled";

const Input = styled.input`
  width: 20em;
  height: 3.5em;
  border: none;
  background-color: #ffffff;
  color: black;
  border: none;
  outline: none;
  padding: 0em 0.5em 0em 0.5em;
  text-decoration-line: underline;
  text-decoration-color: #c2c2c2;
`;

export default function Input11(props) {
  return <Input type="text" placeholder="매장을 입력해 주세요." />;
}
