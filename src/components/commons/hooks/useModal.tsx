import Swal from "sweetalert2";

export function useModal() {
  const SuccessModal = (title: string, text: string) => {
    Swal.fire({
      title,
      text,
      icon: "success",
      confirmButtonColor: "#BF9EEB",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const WarningModal = (title: string, text: string) => {
    Swal.fire({
      title,
      text,
      icon: "warning",
      confirmButtonColor: "#BF9EEB",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const ErrorModal = (title: string, text: string) => {
    Swal.fire({
      title,
      text,
      icon: "error",
      confirmButtonColor: "#BF9EEB",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const InfoModal = (title: string, text: string) => {
    Swal.fire({
      title,
      text,
      icon: "info",
      confirmButtonColor: "#BF9EEB",
      showConfirmButton: true,
    });
  };

  return {
    SuccessModal,
    WarningModal,
    ErrorModal,
    InfoModal,
  };
}
