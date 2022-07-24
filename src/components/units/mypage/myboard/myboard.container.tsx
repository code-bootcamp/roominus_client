import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import MyBoardUI from "./myboard.presenter";
import { FETCH_BOARDS_USER, FETCH_BOARDS_USER_COUNT } from "./myboard.query";

export default function MyBoard() {
  const { data, refetch } = useQuery(FETCH_BOARDS_USER);
  const { data: count } = useQuery(FETCH_BOARDS_USER_COUNT);
  const router = useRouter();

  const onClickBoard = (event: MouseEvent<HTMLSpanElement>) => {
    router.push(`/community/${event.currentTarget.id}`);
  };

  return (
    <MyBoardUI
      data={data}
      refetch={refetch}
      count={count}
      onClickBoard={onClickBoard}
    />
  );
}
