import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
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
          Modal.warning({ content: "로그인 먼저 해주세요." });
          setTimeout(() => {
            router.push("/login");
          }, 500);
        }
      });
    }
  }, []);
}
