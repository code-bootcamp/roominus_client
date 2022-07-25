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
  name: yup.string().required("필수 입력 사항입니다."),
  phoneNumber: yup.string().required("필수 입력 사항입니다."),
  phoneToken: yup.string().required("필수 입력 사항입니다."),
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
  const [showCount, setShowCount] = useState("01:00");
  const [start, setStart] = useState(1);

  const [sendTokengql] = useMutation(SEND_TOTKEN_TO_PHONE);
  const [checkInputTokengql] = useMutation(CHECK_INPUT_TOKEN);
  const [phone, setPhone] = useState("");
  const [tokenInput, setTokenInput] = useState("");

  const [createSocialgql] = useMutation(CREATE_SOCIAL_USER);
  const [smsToken, setSmsToken] = useState("");

  const [tokenavail, setTokenavail] = useState(false);

  useEffect(() => {
    register("phoneNumber", { required: true });
    register("name", { required: true });
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
        console.log(counts);
        if (counts <= 0) {
          clearInterval(timer);
          setCount(60);
          setStart(1);

          Swal.fire({
            title: "시간 초과",
            icon: "warning",
            showConfirmButton: false,
            timer: 1000,
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
      });
      setStart(2);
    } catch (error) {
      Swal.fire({
        title: (error as Error).message,
        icon: "warning",
        showConfirmButton: false,
        timer: 1000,
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
        console.log(result.data.checkinputToken);
        Swal.fire({
          title: "인증완료",
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        setStart(3);
        setTokenavail(true);
      } catch (error) {
        console.log(error);
      }
    } else if (smsToken !== tokenInput) {
      Swal.fire({
        title: "토큰이 올바르지 않습니다.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
  const onChangeTokenValue = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setTokenInput(event.target.value);
  };
  const onSubmitSignup = async (data: any) => {
    if (tokenavail) {
      try {
        const result = await createSocialgql({
          variables: {
            email: kakaoInfo.email || googleInfo.email,
            phone: data.phoneNumber,
            name: data.name,
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
    } else if (!tokenavail) {
      Swal.fire({
        title: "모바일 인증은 필수입니다.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1000,
      });
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
        setTokenInput={setTokenInput}
      />
    </>
  );
}
