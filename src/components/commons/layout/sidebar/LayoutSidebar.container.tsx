import { useRouter } from "next/router";
import { useEffect, useState, MouseEvent } from "react";
import LayoutSideBarUI from "./LayoutSidebar.presenter";
import Swal from "sweetalert2";

import { LOG_OUT } from "./LayoutSidebar.query";
import { useMutation, useApolloClient } from "@apollo/client";
import { accessTokenState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
export default function LayoutSidebar() {
  const router = useRouter();
  const [activedMenu, setActivedMenu] = useState<string>("");
  const client = useApolloClient();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [logoutgql] = useMutation(LOG_OUT);
  console.log(accessToken);
  const onClickLogout = async () => {
    try {
      const result = await client.mutate({
        mutation: LOG_OUT,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      console.log(result);
      Swal.fire({
        title: "로그아웃 되었습니다",
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
      router.push("/home");
    } catch (error) {
      Swal.fire({
        title: error.message,
        icon: "error",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    }
  };

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
      onClickLogout={onClickLogout}
    />
  );
}
