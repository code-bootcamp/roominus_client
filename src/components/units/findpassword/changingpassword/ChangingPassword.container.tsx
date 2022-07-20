import ChangingPasswordUI from "./ChangingPassword.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
const schema = yup.object({
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,14}$/,
      "영문+숫자 조합 8~14자리의 비밀번호를 입력해주세요."
    )
    .required("영문+숫자 조합 8~14자리의 비밀번호를 입력해주세요."),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."),
});

export default function ChangingPassword() {
  const router = useRouter();
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const password2InputRef = useRef<HTMLInputElement>(null);
  const [openEye1, setOpenEye1] = useState(false);
  const [openEye2, setOpenEye2] = useState(false);
  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmitChangingPassword = (data: any) => {
    console.log(data);
    router.push("/login");
  };

  const onClickShowPassword = () => {
    passwordInputRef.current.type = "text";
    setOpenEye1(true);
    setTimeout(() => {
      passwordInputRef.current.type = "password";
      setOpenEye1(false);
    }, 1000);
  };
  const onClickShowPassword2 = () => {
    password2InputRef.current.type = "text";
    setOpenEye2(true);
    setTimeout(() => {
      password2InputRef.current.type = "password";
      setOpenEye2(false);
    }, 1000);
  };

  useEffect(() => {
    register("password", { required: true });
    register("password2", { required: true });
  }, []);
  useEffect(() => {
    passwordInputRef.current.focus();
  }, []);

  return (
    <ChangingPasswordUI
      passwordInputRef={passwordInputRef}
      password2InputRef={password2InputRef}
      handleSubmit={handleSubmit}
      setValue={setValue}
      formState={formState}
      openEye1={openEye1}
      openEye2={openEye2}
      onClickShowPassword={onClickShowPassword}
      onClickShowPassword2={onClickShowPassword2}
      onSubmitChangingPassword={onSubmitChangingPassword}
    />
  );
}
