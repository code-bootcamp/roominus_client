import { useRef, useState } from "react";
import HomeUI from "./Home.presenter";

export default function Home() {
  const [value, setValue] = useState(4);
  const [isOpened, setIsOpened] = useState(false);
  const OpenArrowRef = useRef();
  const CloseArrowRef = useRef();
  const onClickOpenQuestion = () => {
    console.log("ddd");
  };
  const onClickCloseQuestion = () => {
    console.log("ddd");
  };
  return (
    <HomeUI
      value={value}
      setValue={setValue}
      onClickOpenQuestion={onClickOpenQuestion}
      onClickCloseQuestion={onClickCloseQuestion}
      isOpened={isOpened}
      OpenArrowRef={OpenArrowRef}
      CloseArrowRef={CloseArrowRef}
    />
  );
}
