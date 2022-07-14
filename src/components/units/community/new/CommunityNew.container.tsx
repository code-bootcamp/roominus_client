import { useRouter } from "next/router";
import CommunityNewUI from "./CommunityNew.presenter";

export default function CommunityNew() {
  const router = useRouter();

  const onClickList = () => {
    router.push("/community");
  };

  const onClickSubmit = () => {
    router.push("/community/_id");
  };

  return (
    <CommunityNewUI onClickList={onClickList} onClickSubmit={onClickSubmit} />
  );
}
