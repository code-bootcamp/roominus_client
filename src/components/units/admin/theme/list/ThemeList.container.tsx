import ThemeListUI from "./ThemeList.presenter";
import { FETCH_THEMES } from "./ThemeList.query";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
export default function ThemeList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_THEMES);
  const onClickMoveToThemeDetail = (themeTitle) => () => {
    router.push(`/admin/theme/detail/${themeTitle}`);
  };

  return (
    <ThemeListUI
      data={data}
      onClickMoveToThemeDetail={onClickMoveToThemeDetail}
    />
  );
}
