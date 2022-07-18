import { useRouter } from "next/router";
import { useState } from "react";
import { UrlObject } from "url";
import LayoutSideBarAdminUI from "./LayoutSidebar.presenter";
import { MouseEvent, useState } from "react";

export default function LayoutSidebarAdmin() {
  const router = useRouter();

  const [activedMenu, setActivedMenu] = useState("");

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(event.target.id);

      const activedMenu = event.target.id;
      setActivedMenu(activedMenu);
    }
  };

  return (
    <LayoutSideBarAdminUI onClickMenu={onClickMenu} activedMenu={activedMenu} />
  );
}
