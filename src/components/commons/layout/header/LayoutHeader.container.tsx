import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useState } from "react";
import LayoutTopHeader from "../topheader/LayoutTopHeader.container";

export default function LayoutHeader() {
  const router = useRouter();
  const [activedMenu, setActivedMenu] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const onClickMenu = (event: any) => {
    if (event.target instanceof Element) {
      router.push(event.target.id);

      const activedMenu = event.target.id;
      setActivedMenu(activedMenu);
    }
  };

  const onClickToggled = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <LayoutTopHeader />
      <LayoutHeaderUI
        onClickMenu={onClickMenu}
        activedMenu={activedMenu}
        isToggled={isToggled}
        onClickToggled={onClickToggled}
      />
    </>
  );
}
