import { useQuery } from "@apollo/client";
import HistoryUI from "./History.presenter";
import {
  FETCH_RESERVATIONS_USER,
  FETCH_RESERVATIONS_USER_COUNT,
} from "./History.queries";

export default function History() {
  const { data } = useQuery(FETCH_RESERVATIONS_USER);
  const { data: count } = useQuery(FETCH_RESERVATIONS_USER_COUNT);

  console.log("data", data);

  return <HistoryUI data={data} count={count} />;
}
