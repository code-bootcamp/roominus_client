import { useRouter } from "next/router";
import CommunityDetailUI from "./CommunityDetail.presenter";

export default function CommunityDetail() {
  const router = useRouter();

  const onClickList = () => {
    router.push("/community");
  };

  return <CommunityDetailUI onClickList={onClickList} />;
}
