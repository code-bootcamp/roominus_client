import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";
import MyPhoneEditUI from "./MyPhoneEdit.present";

export default function MyPhoneEdit() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const [count, setCount] = useState(10);
  const [showCount, setShowCount] = useState("03:00");

  const onClickVerifyMySelfByNo = () => {
    let counts = count;

    const timer = setInterval(() => {
      counts = counts - 1;
      setCount(counts);
      console.log(counts);
      if (counts <= 0) {
        clearInterval(timer);
        setCount(10);
        Swal.fire({
          title: "시간 초과",
          icon: "warning",
          confirmButtonText: "확인",
          confirmButtonColor: "#2c1952e7",
          focusCancel: true,
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

  const onClickMoveToMain = () => {
    router.push("/home");
  };

  const onClickEdit = () => {
    setIsEdit(true);
    onClickVerifyMySelfByNo();
  };

  const onClickResign = () => {
    Swal.fire({
      title: "정말 탈퇴하시겠습니까?",
      text: "탈퇴한 회원정보는 복구할 수 없습니다.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "네",
      cancelButtonText: "아니요",
      confirmButtonColor: "#26282C",
      cancelButtonColor: "#4a00e0e7",
      focusCancel: true,
    });
  };

  return (
    <MyPhoneEditUI
      onClickMoveToMain={onClickMoveToMain}
      onClickEdit={onClickEdit}
      isEdit={isEdit}
      onClickResign={onClickResign}
      showCount={showCount}
    />
  );
}
