import useAuth from "../../src/components/commons/hooks/useAuth";
import MyPageInfo from "../../src/components/units/mypage/info/MyPageInfo.container";

export default function MyPageInfoPage() {
  useAuth();
  return <MyPageInfo />;
}
