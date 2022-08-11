import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import RewardUI from "./Reward.presenter";
import { FETCH_PAYMENTS, FETCH_PAYMENTS_COUNT } from "./Reward.query";

export default function Reward() {
  const router = useRouter();
  const { data: payments, refetch } = useQuery(FETCH_PAYMENTS, {
    variables: {
      page: 1,
    },
  });
  const { data: count } = useQuery(FETCH_PAYMENTS_COUNT);

  const onClickReservationDetail = (event: { currentTarget: { id: any } }) => {
    router.push(`/reservation/${event.currentTarget.id}`);
  };

  return (
    <RewardUI
      payments={payments}
      count={count}
      refetch={refetch}
      onClickReservationDetail={onClickReservationDetail}
    />
  );
}
