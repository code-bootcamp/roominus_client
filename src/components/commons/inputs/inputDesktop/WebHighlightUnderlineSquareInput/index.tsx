import styled from "@emotion/styled";

const Input = styled.input`
  width: 20em;
  height: 3.5em;
  border: none;
  background-color: #ffffff;
  color: black;
  border: none;
  border-bottom: 2px solid lightgray;
  :focus {
    border-bottom: 2px solid black;
  }
  transition: all 250ms ease-in-out;
  outline: none;
  padding: 0em 0.5em 0em 0.5em;
`;

export default function WebHighlightUnderlineSquareInput(props) {
  return (
    <Input
      type={props.type}
      placeholder={
        props.placeholder ? props.placeholder : "인풋플레이스홀더 부탁해요~"
      }
    />
  );
}
