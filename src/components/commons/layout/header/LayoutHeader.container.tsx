import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";
import { useState } from "react";

export default function LayoutHeader() {
  const router = useRouter();
  const [activedMenu, setActivedMenu] = useState("");

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

  const onClickMenu = (event: any) => {
    if (event.target instanceof Element) {
      router.push(event.target.id);

      const activedMenu = event.target.id;
      setActivedMenu(activedMenu);
    }
  };

  return (
    <LayoutHeaderUI
      onClickMenu={onClickMenu}
      activedMenu={activedMenu}
      onClickLogo={onClickLogo}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToJoin={onClickMoveToJoin}
      onClickMoveToMyPages={onClickMoveToMyPages}
    />
  );
}
