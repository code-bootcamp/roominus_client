import { useRouter } from "next/router";
import { useState } from "react";
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

  return (
    <MyPhoneEditUI
      onClickMoveToMain={onClickMoveToMain}
      onClickEdit={onClickEdit}
      isEdit={isEdit}
    />
  );
}
