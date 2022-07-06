import { useState } from "react";
import ThemeUI from "./ThemeList.presenter";

export default function ThemeList() {
  const [isToggled, setIsToggled] = useState(false);
  const onClickToggled = () => {
    setIsToggled(!isToggled);
  };

  return <ThemeUI onClickToggled={onClickToggled} />;
}
