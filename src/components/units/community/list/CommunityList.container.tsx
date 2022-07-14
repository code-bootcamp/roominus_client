import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommunityListUI from "./CommunityList.presenter";
import { FETCH_CAFES } from "./CommunityList.queries";

export default function CommunityList() {
  const router = useRouter();

  // const { data } = useQuery(FETCH_CAFES);
  // console.log(data);

  const onClickCard = () => {
    router.push("/community/_id");
  };

  const onClickWrite = () => {
    router.push("/community/new");
  };
  return (
    <CommunityListUI
      onClickCard={onClickCard}
      onClickWrite={onClickWrite}
      // data={data}
    />
  );
}
