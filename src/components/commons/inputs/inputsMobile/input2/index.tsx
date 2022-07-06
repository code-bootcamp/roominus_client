import styled from "@emotion/styled";

const Input = styled.input`
  width: 18em;
  height: 3em;
  border-radius: 10px;
  border: none;
  background-color: #afafaf;
  color: black;
  outline: none;
  padding: 0em 0.5em 0em 0.5em;
`;

export default function Input02(props) {
  return <Input type="text" placeholder="-를 입력해주세요." />;
}
