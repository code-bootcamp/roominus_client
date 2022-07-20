import { useQuery } from "@apollo/client";
import RewardUI from "./Reward.presenter";
import { FETCH_PAYMENTS } from "./Reward.query";

export default function Reward() {
  const { data } = useQuery(FETCH_PAYMENTS);

  return <RewardUI data={data} />;
}
