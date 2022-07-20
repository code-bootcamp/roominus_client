import { useQuery } from "@apollo/client";
import { FETCH_PAYMENTS, FETCH_RESERVATIONS_USER } from "./MyPage.query";

import MyPageInfoUI from "./MyPageInfo.presenter";

export default function MyPageInfo() {
  const { data: reservations } = useQuery(FETCH_RESERVATIONS_USER);
  const { data: payments } = useQuery(FETCH_PAYMENTS);

  return <MyPageInfoUI reservation={reservations} payments={payments} />;
}
