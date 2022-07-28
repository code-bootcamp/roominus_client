import PWeditUI from "./PasswordEdit.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { FETCH_USER_LOGGEDIN, UPDATE_USER } from "./PasswordEdit.query";
import { useApolloClient, useMutation } from "@apollo/client";
import { accessTokenState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
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

export default function PWedit() {
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const password2InputRef = useRef<HTMLInputElement>(null);
  const client = useApolloClient();
  const router = useRouter();
  const [updateusergql] = useMutation(UPDATE_USER);
  const [openEye1, setOpenEye1] = useState(false);
  const [openEye2, setOpenEye2] = useState(false);
  const [password, setPassword] = useState("");
  const { register, handleSubmit, setValue, formState, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [accessToken] = useRecoilState(accessTokenState);
  useEffect(() => {
    if (sessionStorage.getItem("#SL")) {
      Swal.fire({
        title: "소셜로그인 유저는 비밀번호가 없습니다.",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      });
      router.push("/mypage/phoneedit");
    }

    register("password", { required: true });
    register("password2", { required: true });
  }, []);

  const onClickShowPassword1 = () => {
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

  const onSubmitChangePassword = async (data: { password: any }) => {
    if (sessionStorage.getItem("#NL")) {
      try {
        const result = await client.query({
          query: FETCH_USER_LOGGEDIN,
          context: {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            credentials: "include",
          },
        });
        const userId = result.data.fetchUserLoggedIn.id;
        await updateusergql({
          variables: {
            userId,
            updateUserInput: {
              password: data.password,
            },
          },
        });
        Swal.fire({
          title: "비밀번호가 변경되었습니다.",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
          backdrop: false,
        });
        router.push("/mypage");
      } catch (error) {}
    } else if (sessionStorage.getItem("#SL")) {
      Swal.fire({
        title: "소셜로그인 유저는 비밀번호가 없습니다.",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      });
      router.push("/mypage/phoneedit");
    }
  };

  return (
    <PWeditUI
      handleSubmit={handleSubmit}
      setValue={setValue}
      formState={formState}
      openEye1={openEye1}
      openEye2={openEye2}
      passwordInputRef={passwordInputRef}
      password2InputRef={password2InputRef}
      onClickShowPassword1={onClickShowPassword1}
      onClickShowPassword2={onClickShowPassword2}
      onSubmitChangePassword={onSubmitChangePassword}
      password={password}
      setPassword={setPassword}
      trigger={trigger}
    />
  );
}
