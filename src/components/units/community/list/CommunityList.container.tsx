import { useRouter } from "next/router";
import CommunityListUI from "./CommunityList.presenter";

export default function CommunityList() {
  const router = useRouter();

  const onClickCard = () => {
    router.push("/community/_id");
  };

  const onClickWrite = () => {
    router.push("/community/new");
  };
  return (
    <CommunityListUI onClickCard={onClickCard} onClickWrite={onClickWrite} />
  );
}
