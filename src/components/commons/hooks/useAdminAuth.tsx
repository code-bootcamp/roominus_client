import { useApolloClient, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import Swal from "sweetalert2";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      isserviceprovider
    }
  }
`;

export default function useAdminAuth() {
  const client = useApolloClient();
  const Auth = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (!accessToken) {
      Auth.toPromise().then(async (newAccessToken) => {
        if (!newAccessToken) {
          Swal.fire({
            title: "로그인을 먼저 해주세요.",
            icon: "warning",
            showConfirmButton: false,
            timer: 1000,
          });
          setTimeout(() => {
            router.push("/login");
          }, 500);
        } else if (newAccessToken) {
          if (sessionStorage.getItem("#LL")) {
            await client
              .query({
                query: FETCH_USER_LOGGEDIN,
                context: {
                  headers: {
                    Authorization: `Bearer ${newAccessToken}`,
                  },
                },
              })
              .then((result) => {
                if (result.data.fetchUserLoggedIn.isserviceprovider === false) {
                  Swal.fire({
                    title: "관리자 페이지 입니다.",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1000,
                  });
                  router.push("/");
                }
              });
          }
        }
      });
    }
  }, []);
}
