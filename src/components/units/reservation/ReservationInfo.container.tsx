import { useRouter } from "next/router";
import ReservationInfoUI from "./ReservationInfo.presenter";

export default function ReservationInfo() {
  const router = useRouter();
  const onClickMoveToSuccess = (event) => {
    router.push("/reservation/_id");
  };

  return <ReservationInfoUI onClickMoveToInfo={onClickMoveToSuccess} />;
}
