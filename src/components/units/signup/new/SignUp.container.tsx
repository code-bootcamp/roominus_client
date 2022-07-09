import { Modal } from "antd";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import SignUpUI from "./SignUp.presenter";

export default function SignUp() {
  const router = useRouter();
  const totalCheckRef = useRef();
  const necessityCheckRef = useRef();
  const optionalCheckRef = useRef();
  const [necessity, setNecessity] = useState(false);
  const [optional, setOptional] = useState(false);

  const onClickMoveToLogin = () => {
    router.push("/login");
  };
  const onClickMoveToSignupDetail = () => {
    router.push("/signup/detail");
  };
  const onOpenErrorModal = () => {
    Modal.warning({ content: "필수 이용약관은 필수!" });
  };
  const onChangeBothCheckbox = () => {
    if (totalCheckRef.current.checked === true) {
      necessityCheckRef.current.checked = true;
      optionalCheckRef.current.checked = true;
      setNecessity(true);
      setOptional(true);
    }
    if (totalCheckRef.current.checked === false) {
      necessityCheckRef.current.checked = false;
      optionalCheckRef.current.checked = false;
      setNecessity(false);
      setOptional(false);
    }
  };
  const onChangeNecessityCheck = () => {
    setNecessity((prev) => !prev);
  };
  const onChangeOptionalCheck = () => {
    setOptional((prev) => !prev);
  };
  return (
    <SignUpUI
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToSignupDetail={onClickMoveToSignupDetail}
      onOpenErrorModal={onOpenErrorModal}
      totalCheckRef={totalCheckRef}
      necessityCheckRef={necessityCheckRef}
      optionalCheckRef={optionalCheckRef}
      onChangeBothCheckbox={onChangeBothCheckbox}
      onChangeNecessityCheck={onChangeNecessityCheck}
      onChangeOptionalCheck={onChangeOptionalCheck}
      necessity={necessity}
      optional={optional}
    />
  );
}
