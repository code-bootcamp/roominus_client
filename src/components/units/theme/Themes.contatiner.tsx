import { useState } from "react";
import ThemeUI from "./Themes.presenter";

export default function Theme() {
  const [isToggled, setIsToggled] = useState(false);
  const onClickToggled = () => {
    setIsToggled(!isToggled);
  };

  return <ThemeUI onClickToggled={onClickToggled} />;
}
