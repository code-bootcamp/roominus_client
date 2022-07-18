import { useRouter } from "next/router";
import { useEffect, useState, MouseEvent } from "react";
import LayoutSideBarUI from "./LayoutSidebar.presenter";

export default function LayoutSidebar() {
  const router = useRouter();
  const [activedMenu, setActivedMenu] = useState<string>("");

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof Element) {
      router.push((event.target as HTMLDivElement).id);
      const activedMenu = (event.target as HTMLDivElement).id;
      setActivedMenu(activedMenu);
    }
  };

  const onClickMyPage = () => {
    router.push("/mypage");
  };

  useEffect(() => {
    if (!router.asPath.includes(activedMenu) || activedMenu === "") {
      setActivedMenu(router.asPath);
    }
  }, [router.asPath]);

  return (
    <LayoutSideBarUI
      activedMenu={activedMenu}
      onClickMenu={onClickMenu}
      onClickMyPage={onClickMyPage}
    />
  );
}
