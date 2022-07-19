import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import MyPhoneEditUI from "./MyPhoneEdit.present";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";

const schema = yup.object({
  phoneNumber: yup.string().required("필수 입력 사항입니다."),
});

export default function MyPhoneEdit() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [count, setCount] = useState(10);
  const [showCount, setShowCount] = useState("03:00");
  const timeRef = useRef();
  const verificationBtn = useRef();
  const [start, setStart] = useState(1);
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [userInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    register("phoneNumber", { required: true });
  }, []);
  useEffect(() => {
    // eslint-disable-next-line no-undef
    let timer: string | number | NodeJS.Timer | undefined;
    if (start === 2) {
      let counts = count;
      timeRef.current.style.visibility = "visible";
      timer = setInterval(() => {
        counts = counts - 1;
        setCount(counts);
        console.log(counts);
        if (counts <= 0) {
          clearInterval(timer);
          setCount(10);
          setStart(1);

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
      setStart(1);
      Swal.fire({
        title: "인증 완료",
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
      setCount(10);
      timeRef.current.style.visibility = "hidden";
    }
    return () => {
      clearInterval(timer);
      setCount(10);
    };
  }, [start]);

  const onClickVerifyMySelfByNo = () => {
    setStart(2);
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
  const onClickCheckVerificationNo = () => {
    setStart(3);
  };
  const onClickPhonNumberEdit = () => {
    // 변경쿼리
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
    />
  );
}
