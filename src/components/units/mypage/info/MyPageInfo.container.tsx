import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import { FETCH_PAYMENTS, FETCH_RESERVATIONS_USER } from "./MyPage.query";

import MyPageInfoUI from "./MyPageInfo.presenter";

export default function MyPageInfo() {
  const [userInfo] = useRecoilState(userInfoState);

  const { data: reservations } = useQuery(FETCH_RESERVATIONS_USER, {
    variables: {
      userId: userInfo.id,
    },
  });
  const { data: payments } = useQuery(FETCH_PAYMENTS);

  return <MyPageInfoUI reservation={reservations} payments={payments} />;
}
