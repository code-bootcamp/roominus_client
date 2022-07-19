import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import { FETCH_RESERVATIONS_USER } from "../history/History.queries";
import { FETCH_PAYMENTS } from "../reward/Reward.query";
import MyPageInfoUI from "./MyPageInfo.presenter";

export default function MyPageInfo() {
  const [userInfo] = useRecoilState(userInfoState);

  const { data: reservations } = useQuery(FETCH_RESERVATIONS_USER, {
    variables: {
      userId: userInfo.id,
    },
  });
  const { data: payments } = useQuery(FETCH_PAYMENTS);

  console.log(userInfo);

  return <MyPageInfoUI reservations={reservations} payments={payments} />;
}
