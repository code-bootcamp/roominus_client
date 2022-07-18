import useAuth from "../../../src/components/commons/hooks/useAuth";
import History from "../../../src/components/units/mypage/history/History.container";

export default function historyPage() {
  useAuth();

  return <History />;
}
