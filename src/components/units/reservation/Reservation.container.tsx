import { useState } from "react";
import Reservation01UI from "./Reservation01.presenter";
import Reservation02UI from "./Reservation02.presenter";

export default function Reservation() {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClickTime = (event) => {
    setIsOpen(true);
  };

  return (
    <>
      {!isOpen && (
        <>
          {" "}
          <Reservation01UI isActive={true} onClickTime={onClickTime} />
        </>
      )}

      {isOpen && (
        <>
          <Reservation02UI isActive={true} />
        </>
      )}
    </>
  );
}
