import ThemeListUI from "./ThemeList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_THEMES_ALL } from "./ThemeList.query";
export default function ThemeList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_THEMES_ALL);

  const onClickMoveToThemeDetail = (themeId: string) => () => {
    router.push(`/admin/theme/${themeId}`);
  };

  return (
    <ThemeListUI
      data={data}
      onClickMoveToThemeDetail={onClickMoveToThemeDetail}
    />
  );
}
