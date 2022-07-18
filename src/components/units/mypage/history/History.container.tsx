import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import HistoryUI from "./History.presenter";
import { FETCH_RESERVATIONS_USER } from "./History.queries";

export default function History() {
  const [userInfo] = useRecoilState(userInfoState);

  const { data } = useQuery(FETCH_RESERVATIONS_USER, {
    variables: {
      userId: userInfo.id,
    },
  });

  console.log(data);

  return <HistoryUI data={data} />;
}
