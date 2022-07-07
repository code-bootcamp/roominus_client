import styled from "@emotion/styled";

const Input = styled.input`
  width: 13em;
  height: 3em;
  border: none;
  background-color: #ffffff;
  color: black;
  border: none;
  outline: none;
  padding: 0em 0.5em 0em 0.5em;
`;

export default function MobileSmallSquareInput(props) {
  return (
    <Input
      type={props.type}
      placeholder={
        props.placeholder ? props.placeholder : "인풋플레이스홀더 부탁해요~"
      }
    />
  );
}