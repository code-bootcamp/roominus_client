/* eslint-disable no-unused-vars */
import { useApolloClient } from "@apollo/client";
import LayoutTopHeaderUI from "./LayoutTopHeader.presenter";
import { LOG_OUT } from "./LayoutTopHeader.query";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { useRecoilState } from "recoil";

export default function LayoutTopHeader() {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const client = useApolloClient();
  const onClickLogout = async () => {
    try {
      await client.mutate({
        mutation: LOG_OUT,

        context: {
          uri: process.env.NEXT_PUBLIC_BACKEND_URL,
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
      Swal.fire({
        title: "로그아웃 되었습니다",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
      });
      router.push("/home");
    } catch (error) {
      Swal.fire({
        title: (error as Error).message,
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return <LayoutTopHeaderUI onClickLogout={onClickLogout} />;
}
