import { useApolloClient, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import Swal from "sweetalert2";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { LOG_OUT } from "../../../commons/layout/sidebar/LayoutSidebar.query";
import { FETCH_PAYMENTS, FETCH_RESERVATIONS_USER } from "./MyPage.query";

import MyPageInfoUI from "./MyPageInfo.presenter";

export default function MyPageInfo() {
  const router = useRouter();
  const { data: reservations } = useQuery(FETCH_RESERVATIONS_USER);
  const { data: payments } = useQuery(FETCH_PAYMENTS);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const client = useApolloClient();

  const onClickReservationDetail = (event: { currentTarget: { id: any } }) => {
    router.push(`/reservation/${event.currentTarget.id}`);
  };

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

  return (
    <MyPageInfoUI
      reservation={reservations}
      payments={payments}
      onClickReservationDetail={onClickReservationDetail}
      onClickLogout={onClickLogout}
    />
  );
}
