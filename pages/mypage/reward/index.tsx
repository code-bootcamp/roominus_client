import useAuth from "../../../src/components/commons/hooks/useAuth";
import Reward from "../../../src/components/units/mypage/reward/Reward.container";

export default function rewardPage() {
  useAuth();

  return <Reward />;
}
