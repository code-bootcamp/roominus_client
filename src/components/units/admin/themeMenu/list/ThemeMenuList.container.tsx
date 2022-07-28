import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ThemeMenuListUI from "./ThemeMenuList.presenter";
import { FETCH_THEME_MENUS } from "./ThemeMenuList.query";
export default function ThemeMenuList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_THEME_MENUS, {
    variables: {
      themeId: router.query.id,
    },
  });
  return (
    <>
      {data?.fetchThemeMenus.map((el: { id: any }) => (
        <ThemeMenuListUI key={el.id} el={el} />
      ))}
    </>
  );
}
