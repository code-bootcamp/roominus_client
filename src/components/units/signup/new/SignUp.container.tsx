import { useRouter } from "next/router";
import { useRef, useState } from "react";
import SignUpUI from "./SignUp.presenter";
import Swal from "sweetalert2";

export default function SignUp() {
  const router = useRouter();
  const totalCheckRef = useRef<HTMLInputElement>(null);
  const necessityCheckRef = useRef<HTMLInputElement>(null);
  const optionalCheckRef = useRef<HTMLInputElement>(null);
  const [necessity, setNecessity] = useState(false);
  const [optional, setOptional] = useState(false);

  const onClickMoveToLogin = () => {
    router.push("/login");
  };
  const onClickMoveToSignupDetail = () => {
    router.push("/signup/detail");
  };
  const onOpenErrorModal = () => {
    Swal.fire({
      title: "필수 이용약관은 필수!",
      icon: "warning",
      confirmButtonText: "확인",
      confirmButtonColor: "#4a00e0e7",
    });
  };
  const onClickTotalCheck = () => {
    console.log("clicked");
    totalCheckRef.current.click();
  };
  const onChangeBothCheckbox = () => {
    totalCheckRef.current.click();
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
      onClickTotalCheck={onClickTotalCheck}
    />
  );
}
