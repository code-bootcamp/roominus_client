import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function useAuth() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      Modal.warning({ content: "로그인 먼저 해주세요." });
      setTimeout(() => {
        router.push("/login");
      }, 500);
    }
  }, []);
}
