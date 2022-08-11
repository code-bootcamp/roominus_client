import useAuth from "../../../src/components/commons/hooks/useAuth";
import MyBoard from "../../../src/components/units/mypage/myboard/myboard.container";

export default function Myboard() {
  useAuth();

  return <MyBoard />;
}
