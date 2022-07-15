import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommunityListUI from "./CommunityList.presenter";
import { FETCH_BOARDS } from "./CommunityList.queries";

export default function CommunityList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickCard = (el) => (event) => {
    router.push(`/community/${event?.currentTarget.id}`);
  };

  const onClickWrite = () => {
    router.push("/community/new");
  };
  return (
    <CommunityListUI
      onClickCard={onClickCard}
      onClickWrite={onClickWrite}
      data={data}
    />
  );
}
