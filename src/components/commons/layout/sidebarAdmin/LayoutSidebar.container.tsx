import { useRouter } from "next/router";
import { useState } from "react";
import LayoutSideBarAdminUI from "./LayoutSidebar.presenter";

export default function LayoutSidebarAdmin() {
  const router = useRouter();

  const [activedMenu, setActivedMenu] = useState("");

  const onClickMenu = (event) => {
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
