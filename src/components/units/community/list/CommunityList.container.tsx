import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import CommunityListUI from "./CommunityList.presenter";
import { FETCH_BOARDS } from "./CommunityList.queries";
import { IFetchBoardsProps } from "./CommunityList.types";

export default function CommunityList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS);
  console.log(data);

  const onClickCard =
    (el: IFetchBoardsProps) => (event: MouseEvent<HTMLDivElement>) => {
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
