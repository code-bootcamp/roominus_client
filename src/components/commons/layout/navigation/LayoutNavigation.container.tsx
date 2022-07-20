import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import LayoutNavigationUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();
  const [activedMenu, setActivedMenu] = useState("");

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) router.push(event.target.id);
    const activedMenu = (event.target as HTMLDivElement).id;
    setActivedMenu(activedMenu);
  };

  return (
    <LayoutNavigationUI onClickMenu={onClickMenu} activedMenu={activedMenu} />
  );
}
