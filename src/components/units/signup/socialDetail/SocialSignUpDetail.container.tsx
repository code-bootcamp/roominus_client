/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  SEND_TOTKEN_TO_PHONE,
  CHECK_INPUT_TOKEN,
  CREATE_SOCIAL_USER,
} from "./SocialSignUpDetail.query";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import SocialSignUpDetailUI from "./SocialSignUpDetail.presenter";
import { GoogleInfoState, KakaoInfoState } from "../../../../commons/store";
import { useRecoilState } from "recoil";

const schema = yup.object({
  phoneNumber: yup.string().required("필수 입력 사항입니다."),
});

export default function SocialSignUpDetail() {
  const router = useRouter();

  const [googleInfo, setGoogleInfo] = useRecoilState(GoogleInfoState);
  const [kakaoInfo, setKakaoInfo] = useRecoilState(KakaoInfoState);

  const verificationBtn = useRef<HTMLButtonElement>(null);
  const timeRef = useRef<HTMLSpanElement>(null);

  const { register, handleSubmit, setValue, formState, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [count, setCount] = useState(60);
  const [showCount, setShowCount] = useState("03:00");
  const [start, setStart] = useState(1);

  const [sendTokengql] = useMutation(SEND_TOTKEN_TO_PHONE);
  const [checkInputTokengql] = useMutation(CHECK_INPUT_TOKEN);
  const [phone, setPhone] = useState("");
  const [tokenInput, setTokenInput] = useState("");

  const [createSocialgql] = useMutation(CREATE_SOCIAL_USER);

  useEffect(() => {
    register("phoneNumber", { required: true });
  }, []);
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (start === 2) {
      let counts = count;
      timeRef.current.style.visibility = "visible";
      timer = setInterval(() => {
        counts = counts - 1;
        setCount(counts);
        console.log(counts);
        if (counts <= 0) {
          clearInterval(timer);
          setCount(60);
          setStart(1);
          verificationBtn.current.disabled = true;
          Swal.fire({
            title: "시간 초과",
            icon: "warning",
            confirmButtonText: "확인",
            confirmButtonColor: "#4a00e0e7",
          });
        }
        ShowCounts(counts);
      }, 1000);
    } else if (start === 3) {
      clearInterval(timer);
      Swal.fire({
        title: "인증 완료",
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
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

  const onClickVerifyMySelfByNo = async () => {
    setStart(2);
    try {
      await sendTokengql({
        variables: {
          phone,
        },
      });
      Swal.fire({
        title: "인증번호 전송 완료",
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    } catch (error) {
      Swal.fire({
        title: (error as Error).message,
        icon: "warning",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
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
    setStart(3);
    try {
      await checkInputTokengql({
        variables: {
          phone,
          tokenInput,
        },
      });
      Swal.fire({
        title: "인증완료",
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    } catch (error) {
      Swal.fire({
        title: (error as Error).message,
        icon: "warning",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    }
  };
  const onChangeTokenValue = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTokenInput(event.target.value);
  };
  const onSubmitSignup = async (data: { phoneNumber: any }) => {
    console.log(data);
    try {
      const result = await createSocialgql({
        variables: {
          email: kakaoInfo.email || googleInfo.email,
          phone: data.phoneNumber,
        },
      });
      Swal.fire({
        title: `${result.data.createSocialUser.id}
        ${result.data.createSocialUser.email}
        ${result.data.createSocialUser.phone}`,
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });

      router.push("/login");
    } catch (error) {
      alert((error as Error).message);
    }
  };
  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  return (
    <>
      <SocialSignUpDetailUI
        googleInfo={googleInfo}
        kakaoInfo={kakaoInfo}
        handleSubmit={handleSubmit}
        setValue={setValue}
        formState={formState}
        trigger={trigger}
        onSubmitSignup={onSubmitSignup}
        onClickVerifyMySelfByNo={onClickVerifyMySelfByNo}
        showCount={showCount}
        verificationBtn={verificationBtn}
        onClickCheckVerificationNo={onClickCheckVerificationNo}
        timeRef={timeRef}
        setPhone={setPhone}
        onChangeTokenValue={onChangeTokenValue}
        onClickMoveToLogin={onClickMoveToLogin}
      />
    </>
  );
}
