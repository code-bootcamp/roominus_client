import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import MyPageInfoUI from "./MyPageInfo.presenter";

export default function MyPageInfo() {
  const [userInfo] = useRecoilState(userInfoState);

  return <MyPageInfoUI userInfo={userInfo} />;
}
