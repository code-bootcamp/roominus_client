import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import Swal from "sweetalert2";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

export default function useAuth() {
  const Auth = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    if (!accessToken) {
      Auth.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          Swal.fire({
            title: "로그인을 먼저 해주세요.",
            icon: "warning",
            confirmButtonText: "확인",
            confirmButtonColor: "#4a00e0e7",
          });
          setTimeout(() => {
            router.push("/login");
          }, 500);
        }
      });
    }
  }, []);
}
