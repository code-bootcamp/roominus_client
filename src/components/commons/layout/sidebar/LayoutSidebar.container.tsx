import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LayoutSideBarUI from "./LayoutSidebar.presenter";

export default function LayoutSidebar() {
  const router = useRouter();
  const [activedMenu, setActivedMenu] = useState("");

  const onClickMenu = (event) => {
    if (event.target instanceof Element) {
      router.push(event.target.id);
      const activedMenu = event.target.id;
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
    <LayoutSideBarUI onClickMenu={onClickMenu} onClickMyPage={onClickMyPage} />
  );
}
