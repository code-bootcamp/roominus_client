import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

export default function useAuth() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  useEffect(() => {
    if (!accessToken) {
      Modal.warning({ content: "로그인 먼저 해주세요." });
      setTimeout(() => {
        router.push("/login");
      }, 500);
    }
  }, []);
}
