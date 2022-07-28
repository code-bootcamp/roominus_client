import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import CommunityListUI from "./CommunityList.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./CommunityList.queries";
import { IFetchBoardsProps } from "./CommunityList.types";

export default function CommunityList() {
  const router = useRouter();

  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: count } = useQuery(FETCH_BOARDS_COUNT);

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
      refetch={refetch}
      count={count}
    />
  );
}
