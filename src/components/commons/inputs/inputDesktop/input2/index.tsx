import styled from "@emotion/styled";

const Input = styled.input`
  width: 38em;
  height: 3.5em;
  border: none;
  border-radius: 10px;
  background-color: #afafaf;
  color: black;
  border: none;
  outline: none;
  padding: 0em 0.5em 0em 0.5em;
`;

export default function Input08(props) {
  return <Input type="text" placeholder="-를 입력해주세요." />;
}
