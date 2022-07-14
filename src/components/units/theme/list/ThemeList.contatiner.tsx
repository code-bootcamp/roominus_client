import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ThemeUI from "./ThemeList.presenter";
import { FETCH_THEMES } from "./ThemeList.queries";

export default function ThemeList() {
  const { data } = useQuery(FETCH_THEMES);
  const router = useRouter();
  const [isToggled, setIsToggled] = useState(false);
  const onClickToggled = () => {
    setIsToggled(!isToggled);
  };
  const onClickTheme = (el) => () => {
    console.log(el);
    router.push(`/theme/${el.id}`);
  };

  return (
    <ThemeUI
      onClickToggled={onClickToggled}
      onClickTheme={onClickTheme}
      data={data}
    />
  );
}
