import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MyPickUI from "./MyPick.presenter";
import {
  FETCH_USER_LIKE_THEMES,
  FETCH_USER_LIKE_THEMES_COUNT,
} from "./MyPick.query";

export default function MyPick() {
  const router = useRouter();
  const { data: pickTheme, refetch } = useQuery(FETCH_USER_LIKE_THEMES);
  const { data: count } = useQuery(FETCH_USER_LIKE_THEMES_COUNT);

  const onClickMoveToThemeDetail = (event: { currentTarget: { id: any } }) => {
    router.push(`/theme/${event?.currentTarget.id}`);
  };

  return (
    <MyPickUI
      pickTheme={pickTheme}
      onClickMoveToThemeDetail={onClickMoveToThemeDetail}
      id={""}
      refetch={refetch}
      count={count}
    />
  );
}
