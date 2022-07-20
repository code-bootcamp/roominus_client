import { useQuery } from "@apollo/client";
import MyBoardUI from "./myboard.presenter";
import { FETCH_BOARDS_USER } from "./myboard.query";

export default function MyBoard() {
  const { data } = useQuery(FETCH_BOARDS_USER);

  return <MyBoardUI data={data} />;
}
