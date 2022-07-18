import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import LayoutSideBarAdminUI from "./LayoutSidebar.presenter";
import { MouseEvent, useState } from "react";

export default function LayoutSidebarAdmin() {
  const router = useRouter();

  const [activedMenu, setActivedMenu] = useState("");

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push(event.target.id);

      const activedMenu = (event.target as HTMLDivElement).id;
      setActivedMenu(activedMenu);
    }
  };

  return (
    <LayoutSideBarAdminUI onClickMenu={onClickMenu} activedMenu={activedMenu} />
  );
}
