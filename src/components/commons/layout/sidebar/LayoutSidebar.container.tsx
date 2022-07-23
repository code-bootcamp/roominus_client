import { useRouter } from "next/router";
import { useEffect, useState, MouseEvent } from "react";
import LayoutSideBarUI from "./LayoutSidebar.presenter";
import Swal from "sweetalert2";

import {
  LOG_OUT,
  FETCH_SOCIAL_USER_LOGGED_IN,
  FETCH_USER_LOGGEDIN,
} from "./LayoutSidebar.query";
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
  // useEffect(() => {
  //   if (localStorage.getItem("#SL")) {
  //     Auth.toPromise().then(async (newAccessToken) => {
  //       setAccessToken(newAccessToken);
  //       const resultuserInfo = await client.query({
  //         query: FETCH_SOCIAL_USER_LOGGED_IN,
  //         context: {
  //           headers: {
  //             Authorization: `Bearer ${newAccessToken}`,
  //           },
  //         },
  //       });
  //       const user = resultuserInfo.data?.fetchUserLoggedIn;
  //       setUserInfo(user);
  //     });
  //   } else if (localStorage.getItem("#NL")) {
  //     Auth.toPromise().then(async (newAccessToken) => {
  //       setAccessToken(newAccessToken);
  //       const resultuserInfo = await client.query({
  //         query: FETCH_USER_LOGGEDIN,
  //         context: {
  //           headers: {
  //             Authorization: `Bearer ${newAccessToken}`,
  //           },
  //         },
  //       });
  //       const user = resultuserInfo.data?.fetchUserLoggedIn;
  //       setUserInfo(user);
  //     });
  //   }
  // }, []);

  const onClickLogout = async () => {
    try {
      await client.mutate({
        mutation: LOG_OUT,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
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
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
      router.push("/home");
    } catch (error) {
      Swal.fire({
        title: (error as Error).message,
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
      userInfo={userInfo}
    />
  );
}
