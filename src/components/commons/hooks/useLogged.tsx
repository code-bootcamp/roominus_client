import { useRouter } from "next/router";
import { useEffect } from "react";

import Swal from "sweetalert2";

export default function useLogged() {
  const router = useRouter();
  useEffect(() => {
    if (sessionStorage.getItem("#NL") || sessionStorage.getItem("#SL")) {
      Swal.fire({
        title: "로그인 하셨네요!",
        icon: "warning",
        showConfirmButton: false,
        timer: 1000,
      });
      router.push("/home");
    }
  }, []);
}
