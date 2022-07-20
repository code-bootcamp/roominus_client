import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import HistoryUI from "./History.presenter";
import { FETCH_RESERVATIONS_USER } from "./History.queries";

export default function History() {
  const [userInfo] = useRecoilState(userInfoState);

  const { data } = useQuery(FETCH_RESERVATIONS_USER, {
    variables: {
      userId: "9dce6ff0-ac63-419b-a6c8-6293c277a3f2",
    },
  });

  console.log(data);
  console.log(userInfo);

  return <HistoryUI data={data} />;
}
