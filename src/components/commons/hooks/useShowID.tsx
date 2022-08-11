import { useEffect } from "react";

import Swal from "sweetalert2";

export default function useShowID() {
  useEffect(() => {
    Swal.fire({
      title: "아이디 : dev.eunchae@gmail.com 비밀번호 : asdf1234",
      text: "시연용 아이디입니다.",

      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  }, []);
}
