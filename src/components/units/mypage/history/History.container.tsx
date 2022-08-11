import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import HistoryUI from "./History.presenter";
import {
  FETCH_RESERVATIONS_USER,
  FETCH_RESERVATIONS_USER_COUNT,
} from "./History.queries";

export default function History() {
  const router = useRouter();
  const { data: reservation, refetch } = useQuery(FETCH_RESERVATIONS_USER, {
    variables: {
      page: 1,
    },
  });
  const { data: count } = useQuery(FETCH_RESERVATIONS_USER_COUNT);

  const onClickReservationDetail = (event: { currentTarget: { id: any } }) => {
    router.push(`/reservation/${event.currentTarget.id}`);
  };

  return (
    <HistoryUI
      reservation={reservation}
      count={count}
      refetch={refetch}
      onClickReservationDetail={onClickReservationDetail}
    />
  );
}
