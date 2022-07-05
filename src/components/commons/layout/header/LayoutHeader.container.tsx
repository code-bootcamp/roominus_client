import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { MouseEvent, useState } from "react";

export default function LayoutHeader() {
  const router = useRouter();
  const [activedMenu, setActivedMenu] = useState("");
  const [isToggled, setIsToggled] = useState(false);

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  const onClickMoveToJoin = () => {
    router.push("/join");
  };

  const onClickMoveToMyPages = () => {
    router.push("/myPages");
  };

  const onClickMenu = (event: MouseEvent<HTMLUListElement>) => {
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
    <LayoutHeaderUI
      onClickMenu={onClickMenu}
      activedMenu={activedMenu}
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToJoin={onClickMoveToJoin}
      onClickMoveToMyPages={onClickMoveToMyPages}
      onClickToggled={onClickToggled}
      isToggled={isToggled}
    />
  );
}
