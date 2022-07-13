import { useState } from "react";
import FindIdUI from "./FindId.presenter";

export default function FindId() {
  const [isClickedfirst, setIsClickedfirst] = useState(false);
  const [isClickedsecond, setIsClickedsecond] = useState(false);
  const [isOpenedID, setIsOpenedID] = useState(false);
  const [isOpenedPassword, setIsOpenedPassword] = useState(false);
  const onClickShowContentsFirst = () => {
    setIsClickedfirst(true);
    setIsClickedsecond(false);
  };
  const onClickShowContentsSecond = () => {
    setIsClickedsecond(true);
    setIsClickedfirst(false);
  };
  const onSubmitFindId = () => {
    setIsOpenedID(true);
  };
  const onSubmitVerificationEmail = () => {
    setIsOpenedPassword(true);
  };

  return (
    <FindIdUI
      onClickShowContentsFirst={onClickShowContentsFirst}
      isClickedfirst={isClickedfirst}
      onClickShowContentsSecond={onClickShowContentsSecond}
      isClickedsecond={isClickedsecond}
      onSubmitFindId={onSubmitFindId}
      isOpenedID={isOpenedID}
      onSubmitVerificationEmail={onSubmitVerificationEmail}
      isOpenedPassword={isOpenedPassword}
    />
  );
}
