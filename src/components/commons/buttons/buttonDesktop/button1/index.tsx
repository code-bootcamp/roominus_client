import styled from "@emotion/styled";
import { useState } from "react";

const Button = styled.button`
  width: 9.4em;
  height: 3.5em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#26282C" : "#A3A8B7")};
  color: ${(props) => (props.isActive ? "#FFFFFF" : "#FFFFFF96")};
`;

export default function Button03(props) {
  const [isClicked, setIsClicked] = useState(false);
  const onClick = () => {
    setIsClicked((prev) => !prev);
  };
  return (
    <Button onClick={onClick} isActive={isClicked}>
      {props.name ? props.name : "Button"}
    </Button>
  );
}
