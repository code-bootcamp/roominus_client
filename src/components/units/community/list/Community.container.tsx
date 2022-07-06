import { useRouter } from "next/router";
import CommunityListUI from "./Community.presenter";

export default function CommunityList() {
  const router = useRouter();

  const onClickWrite = () => {
    router.push("/community/new");
  };
  return <CommunityListUI onClickWrite={onClickWrite} />;
}
