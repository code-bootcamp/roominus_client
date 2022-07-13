import { useRouter } from "next/router";
import FindIdDetailUI from "./FindIdDetail.presenter";

export default function FindIdDetail() {
  const router = useRouter();

  const onClickMoveToFind = () => {
    router.push("/findidpassword");
  };
  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  return (
    <FindIdDetailUI
      onClickMoveToFind={onClickMoveToFind}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
