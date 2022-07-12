import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";
import MyPhoneEditUI from "./MyPhoneEdit.present";

export default function MyPhoneEdit() {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);

  const onClickMoveToMain = () => {
    router.push("/home");
  };

  const onClickEdit = () => {
    setIsEdit(true);
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
    />
  );
}
