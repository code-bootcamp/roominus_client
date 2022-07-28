/* eslint-disable no-unused-vars */
import { useRouter } from "next/router";
import { useEffect, useState, MouseEvent } from "react";
import LayoutSideBarUI from "./LayoutSidebar.presenter";
import Swal from "sweetalert2";

import { LOG_OUT, FETCH_USER_LOGGEDIN } from "./LayoutSidebar.query";
import { useApolloClient } from "@apollo/client";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
  userInfoState,
} from "../../../../commons/store";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

export default function LayoutSidebar() {
  const router = useRouter();
  const [activedMenu, setActivedMenu] = useState<string>("");
  const client = useApolloClient();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const Auth = useRecoilValueLoadable(restoreAccessTokenLoadable);

  const onClickLogout = async () => {
    try {
      await client.mutate({
        mutation: LOG_OUT,

        context: {
          uri: "https://wawoong.shop/graphql",
          credentials: "include",
        },
      });

      localStorage.clear();
      sessionStorage.clear();
      setAccessToken("");
      setUserInfo({
        id: "",
        name: "",
        email: "",
        phone: "",
        point: 0,
      });
      Swal.fire({
        title: "로그아웃 되었습니다",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      });
      router.push("/home");
    } catch (error) {
      Swal.fire({
        title: (error as Error).message,
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
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
      userInfo={userInfo}
    />
  );
}
