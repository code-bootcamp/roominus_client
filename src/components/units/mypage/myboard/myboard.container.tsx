import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import MyBoardUI from "./myboard.presenter";
import { FETCH_BOARDS_USER } from "./myboard.query";

export default function MyBoard() {
  const { data } = useQuery(FETCH_BOARDS_USER);
  const router = useRouter();

  const onClickBoard = (event: MouseEvent<HTMLSpanElement>) => {
    router.push(`/community/${event.currentTarget.id}`);
  };
  return <MyBoardUI data={data} onClickBoard={onClickBoard} />;
}
