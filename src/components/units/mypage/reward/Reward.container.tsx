import { useQuery } from "@apollo/client";
import RewardUI from "./Reward.presenter";
import { FETCH_PAYMENTS, FETCH_PAYMENTS_COUNT } from "./Reward.query";

export default function Reward() {
  const { data } = useQuery(FETCH_PAYMENTS);
  const { data: count } = useQuery(FETCH_PAYMENTS_COUNT);
  console.log(data);

  return <RewardUI data={data} count={count} />;
}
