import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PAYMENTS, FETCH_RESERVATIONS_USER } from "./MyPage.query";

import MyPageInfoUI from "./MyPageInfo.presenter";

export default function MyPageInfo() {
  const router = useRouter();
  const { data: reservations } = useQuery(FETCH_RESERVATIONS_USER);
  const { data: payments } = useQuery(FETCH_PAYMENTS);

  const onClickReservationDetail = (event: { currentTarget: { id: any } }) => {
    router.push(`/reservation/${event.currentTarget.id}`);
  };

  return (
    <MyPageInfoUI
      reservation={reservations}
      payments={payments}
      onClickReservationDetail={onClickReservationDetail}
    />
  );
}
