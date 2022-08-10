/* eslint-disable no-unused-vars */
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { UrlObject } from "url";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { useRecoilState } from "recoil";
import { useApolloClient } from "@apollo/client";
import { LOG_OUT } from "./LayoutHeader.query";
import Swal from "sweetalert2";
import LayoutHeaderNohamUI from "./LayoutHeader.presenter.noham";
export default function LayoutHeader() {
  const router = useRouter();
  const [activedMenu, setActivedMenu] = useState("");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const client = useApolloClient();

  const onClickLogout = async () => {
    try {
      await client.mutate({
        mutation: LOG_OUT,

        context: {
          uri: "https://wawoong.shop/graphql",
          // headers: {
          //   Authorization: `Bearer ${accessToken}`,
          // },
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

  const onClickMenu = (event: { target: { id: string | UrlObject } }) => {
    if (event.target instanceof Element) {
      router.push(event.target.id);

      const activedMenu = event.target.id;
      setActivedMenu(activedMenu);
    }
  };

  useEffect(() => {
    if (!router.asPath.includes(activedMenu) || activedMenu === "") {
      setActivedMenu(router.asPath);
    }
  }, [router.asPath]);

  return (
    <LayoutHeaderNohamUI
      onClickMenu={onClickMenu}
      activedMenu={activedMenu}
      onClickLogout={onClickLogout}
    />
  );
}
