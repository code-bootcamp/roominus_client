/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */
import { useRouter } from "next/router";
import SignUpDetailUI from "./SignUpDetail.presenter";

import { SetStateAction, useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CREATE_USER,
  SEND_TOTKEN_TO_PHONE,
  CHECK_INPUT_TOKEN,
} from "./SignUpDetail.query";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";

const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 아이디를 @까지 정확하게 입력해주세요."
    )
    .required("이메일 아이디를 @까지 정확하게 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])[0-9a-z]{8,14}$/,
      "영문+숫자 조합 8~14자리의 비밀번호를 입력해주세요."
    )
    .required("영문+숫자 조합 8~14자리의 비밀번호를 입력해주세요."),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."),
  name: yup.string().required("필수 입력 사항입니다."),
  phoneNumber: yup.string().required("필수 입력 사항입니다."),
  phoneToken: yup.string().required("필수 입력 사항입니다."),
});

export default function SignUpDetail() {
  const router = useRouter();

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const password2InputRef = useRef<HTMLInputElement>(null);
  const verificationBtn = useRef<HTMLButtonElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);
  const [openEye1, setOpenEye1] = useState(false);
  const [openEye2, setOpenEye2] = useState(false);

  const { register, handleSubmit, setValue, formState, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [password, setPassword] = useState("");
  const [createUsergql] = useMutation(CREATE_USER);
  const [count, setCount] = useState(60);
  const [showCount, setShowCount] = useState("01:00");
  const [start, setStart] = useState(1);

  const [sendTokengql] = useMutation(SEND_TOTKEN_TO_PHONE);
  const [checkInputTokengql] = useMutation(CHECK_INPUT_TOKEN);
  const [phone, setPhone] = useState("");
  const [smsToken, setSmsToken] = useState("");
  const [tokenInput, setTokenInput] = useState("");

  const [tokenavail, setTokenavail] = useState(false);

  useEffect(() => {
    register("email", { required: true });
    register("password", { required: true });
    register("password2", { required: true });
    register("name", { required: true });
    register("phoneNumber", { required: true });
    register("phoneToken", { required: true });
  }, []);
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (start === 2) {
      let counts = count;
      timeRef.current.style.visibility = "visible";
      timer = setInterval(() => {
        counts = counts - 1;
        setCount(counts);

        if (counts <= 0) {
          clearInterval(timer);
          setCount(60);
          setStart(1);

          Swal.fire({
            title: "시간 초과",
            icon: "warning",
            showConfirmButton: false,
            timer: 1000,
            backdrop: false,
          });
        }
        ShowCounts(counts);
      }, 1000);
    } else if (start === 3) {
      clearInterval(timer);
      Swal.fire({
        title: "인증 완료",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      });
      setCount(60);
      setStart(1);
      timeRef.current.style.visibility = "hidden";
    }
    return () => {
      clearInterval(timer);
      setCount(60);
    };
  }, [start]);
  const onClickMoveToPasswordRef = () => {
    passwordInputRef.current.focus();
  };

  const onClickVerifyMySelfByNo = async () => {
    try {
      const result = await sendTokengql({
        variables: {
          phone,
        },
      });

      setSmsToken(result.data.sendTotkentoPhone.split(" ")[2].split("를")[0]);
      Swal.fire({
        title: "인증번호 전송 완료",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      });
      setStart(2);
    } catch (error) {
      Swal.fire({
        title: (error as Error).message,
        icon: "warning",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      });
    }
  };
  const ShowCounts = (data: number) => {
    const min = Math.floor(data / 60);
    const sec = data % 60;
    const Showcount = `${String(min).padStart(2, "0")}:${String(sec).padStart(
      2,
      "0"
    )}`;
    setShowCount(Showcount);
  };
  const onClickCheckVerificationNo = async () => {
    if (smsToken === tokenInput) {
      try {
        const result = await checkInputTokengql({
          variables: {
            phone,
            tokenInput,
          },
        });
        Swal.fire({
          title: "인증완료",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
          backdrop: false,
        });
        setStart(3);
        setTokenavail(true);
      } catch (error) {}
    } else if (smsToken !== tokenInput) {
      Swal.fire({
        title: "토큰이 올바르지 않습니다.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      });
    }
  };

  const onChangeTokenValue = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTokenInput(event.target.value);
  };
  const onSubmitSignup = async (data: {
    email: any;
    password: any;
    name: any;
    phoneNumber: any;
  }) => {
    if (tokenavail) {
      try {
        const result = await createUsergql({
          variables: {
            createUserInput: {
              email: data.email,
              password: data.password,
              name: data.name,
              phone: data.phoneNumber,
            },
          },
        });
        Swal.fire({
          title: `${result.data.createUser.name}`,
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
          backdrop: false,
        });

        router.push("/login");
      } catch (error) {
        alert((error as Error).message);
      }
    } else if (!tokenavail) {
      Swal.fire({
        title: "모바일 인증은 필수입니다.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      });
    }
  };

  const onClickMoveToLogin = () => {
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

  return (
    <>
      <SignUpDetailUI
        handleSubmit={handleSubmit}
        setValue={setValue}
        formState={formState}
        trigger={trigger}
        onClickShowPassword={onClickShowPassword}
        onClickShowPassword2={onClickShowPassword2}
        passwordInputRef={passwordInputRef}
        password2InputRef={password2InputRef}
        openEye1={openEye1}
        openEye2={openEye2}
        onClickMoveToLogin={onClickMoveToLogin}
        onSubmitSignup={onSubmitSignup}
        onClickVerifyMySelfByNo={onClickVerifyMySelfByNo}
        onClickMoveToPasswordRef={onClickMoveToPasswordRef}
        showCount={showCount}
        verificationBtn={verificationBtn}
        onClickCheckVerificationNo={onClickCheckVerificationNo}
        password={password}
        setPassword={setPassword}
        timeRef={timeRef}
        setPhone={setPhone}
        onChangeTokenValue={onChangeTokenValue}
        setTokenInput={setTokenInput}
      />
    </>
  );
}
