import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MyPickUI from "./MyPick.presenter";
import { FETCH_USER_LIKE_THEMES } from "./MyPick.query";

export default function MyPick() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LIKE_THEMES);

  const onClickMoveToDetail = () => {
    router.push("/theme/_id");
  };

  return <MyPickUI onClickMoveToDetail={onClickMoveToDetail} data={data} />;
}
