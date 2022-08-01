/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { SetStateAction, useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import MyPhoneEditUI from "./MyPhoneEdit.present";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { useApolloClient, useMutation } from "@apollo/client";
import {
  FETCH_USER_LOGGEDIN,
  UPDATE_USER,
  UPDATE_SOCIAL_USER,
  SEND_TOTKEN_TO_PHONE,
  CHECK_INPUT_TOKEN,
} from "./MyPhoneEdit.query";
const schema = yup.object({
  phoneNumber: yup.string().required("필수 입력 사항입니다."),
  phoneToken: yup.string().required("필수 입력 사항입니다."),
});

export default function MyPhoneEdit() {
  const router = useRouter();
  const client = useApolloClient();
  const [updateNormalUsergql] = useMutation(UPDATE_USER);
  const [updateSocialUsergql] = useMutation(UPDATE_SOCIAL_USER);
  const [sendTokengql] = useMutation(SEND_TOTKEN_TO_PHONE);
  const [checkInputTokengql] = useMutation(CHECK_INPUT_TOKEN);
  const [phone, setPhone] = useState("");
  const [tokenInput, setTokenInput] = useState("");
  const [smsToken, setSmsToken] = useState("");
  const [tokenavail, setTokenavail] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [count, setCount] = useState(60);
  const [showCount, setShowCount] = useState("01:00");
  const timeRef = useRef<HTMLInputElement>(null);
  const verificationBtn = useRef();
  const [start, setStart] = useState(1);
  const [accessToken] = useRecoilState(accessTokenState);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [userInfo] = useRecoilState(userInfoState);

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
        backdrop: false,
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

  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };
  const onClickMoveToDelete = () => {
    router.push("/mypage/delete");
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
        title: "인증번호가 올바르지 않습니다.",
        icon: "warning",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      });
    }
  };

  const onClickPhonNumberEdit = async (data: { phoneNumber: any }) => {
    if (tokenavail) {
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
        const password = result.data.fetchUserLoggedIn.password;

        if (sessionStorage.getItem("#NL")) {
          await updateNormalUsergql({
            variables: {
              userId,
              updateUserInput: {
                password,
                phone: data.phoneNumber,
              },
            },
          });
          Swal.fire({
            title: "전화번호가 변경되었습니다.",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
            backdrop: false,
          });
          router.push("/mypage");
        } else if (sessionStorage.getItem("#SL")) {
          await updateSocialUsergql({
            variables: {
              userId,
              updateUserInput: {
                phone: data.phoneNumber,
              },
            },
          });
          Swal.fire({
            title: "전화번호가 변경되었습니다.",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
            backdrop: false,
          });
          router.push("/mypage");
        }
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

  return (
    <MyPhoneEditUI
      onClickEdit={onClickEdit}
      isEdit={isEdit}
      showCount={showCount}
      handleSubmit={handleSubmit}
      formState={formState}
      setValue={setValue}
      trigger={trigger}
      timeRef={timeRef}
      verificationBtn={verificationBtn}
      onClickVerifyMySelfByNo={onClickVerifyMySelfByNo}
      onClickPhonNumberEdit={onClickPhonNumberEdit}
      onClickCheckVerificationNo={onClickCheckVerificationNo}
      onClickMoveToDelete={onClickMoveToDelete}
      userInfo={userInfo}
      setPhone={setPhone}
      setTokenInput={setTokenInput}
    />
  );
}
