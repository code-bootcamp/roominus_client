/* eslint-disable no-unused-vars */
import { useApolloClient } from "@apollo/client";
import LayoutTopHeaderUI from "./LayoutTopHeader.presenter";
import { LOG_OUT } from "./LayoutTopHeader.query";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { accessTokenState } from "../../../../commons/store";
import { useRecoilState } from "recoil";

export default function LayoutTopHeader() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const client = useApolloClient();
  const onClickLogout = async () => {
    try {
      const result = await client.mutate({
        mutation: LOG_OUT,

        context: {
          uri: "https://wawoong.shop/graphql",
          // headers: {
          //   Authorization: `Bearer ${accessToken}`,
          // },
          credentials: "include",
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
        title: (error as Error).message,
        icon: "error",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    }
  };

  return <LayoutTopHeaderUI onClickLogout={onClickLogout} />;
}
