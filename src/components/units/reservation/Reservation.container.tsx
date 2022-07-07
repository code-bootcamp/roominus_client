import { useRouter } from "next/router";
import ReservationUI from "./Reservation.presenter";

export default function Reservation() {
  const router = useRouter();
  const onClickMoveToInfo = (event) => {
    router.push("/reservation/info");
  };

  return <ReservationUI onClickMoveToInfo={onClickMoveToInfo} />;
}
