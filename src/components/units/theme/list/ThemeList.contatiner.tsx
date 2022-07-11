import { useQuery } from "@apollo/client";
import { useState } from "react";
import ThemeUI from "./ThemeList.presenter";
import { FETCH_THEMES } from "./ThemeList.queries";

export default function ThemeList() {
  const { data } = useQuery(FETCH_THEMES);

  const [isToggled, setIsToggled] = useState(false);
  const onClickToggled = () => {
    setIsToggled(!isToggled);
  };

  return <ThemeUI onClickToggled={onClickToggled} data={data} />;
}
