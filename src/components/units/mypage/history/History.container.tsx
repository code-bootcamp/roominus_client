import { useQuery } from "@apollo/client";
import HistoryUI from "./History.presenter";
import { FETCH_RESERVATIONS_USER } from "./History.queries";

export default function History() {
  const { data } = useQuery(FETCH_RESERVATIONS_USER);

  return <HistoryUI data={data} />;
}
