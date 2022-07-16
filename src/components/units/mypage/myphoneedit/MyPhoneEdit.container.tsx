import { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import MyPhoneEditUI from "./MyPhoneEdit.present";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schema = yup.object({
  phoneNumber: yup.string().required("필수 입력 사항입니다."),
});

export default function MyPhoneEdit() {
  const [isEdit, setIsEdit] = useState(false);

  const [count, setCount] = useState(10);
  const [showCount, setShowCount] = useState("03:00");
  const timeRef = useRef();
  const verificationBtn = useRef();

  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    register("phoneNumber", { required: true });
  }, []);

  const onClickVerifyMySelfByNo = () => {
    let counts = count;

    const timer = setInterval(() => {
      counts = counts - 1;
      setCount(counts);
      if (counts <= 0) {
        clearInterval(timer);
        setCount(10);
        // verificationBtn.current.disabled = true;
        Swal.fire({
          title: "시간 초과",
          icon: "warning",
          confirmButtonText: "확인",
          confirmButtonColor: "#4a00e0e7",
        });
      }
      ShowCounts(counts);
    }, 1000);
  };

  const ShowCounts = (data) => {
    let min = Math.floor(data / 60);
    let sec = data % 60;
    let Showcount = `${String(min).padStart(2, "0")}:${String(sec).padStart(
      2,
      "0"
    )}`;
    setShowCount(Showcount);
  };

  const onClickEdit = () => {
    // setIsEdit((prev) => !prev);
    setIsEdit(true);
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
    />
  );
}
