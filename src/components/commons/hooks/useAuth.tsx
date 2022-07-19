import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { restoreAccessTokenLoadable } from "../../../commons/store";

export default function useAuth() {
  const Auth = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const router = useRouter();

  useEffect(() => {
    Auth.toPromise().then((newAccessToken) => {
      if (!newAccessToken) {
        Modal.warning({ content: "로그인 먼저 해주세요." });
        setTimeout(() => {
          router.push("/login");
        }, 500);
      }
    });
  }, []);
}
