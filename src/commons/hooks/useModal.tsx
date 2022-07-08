import Swal from "sweetalert2";

export function useModal() {
  const Success = (title: string, text: string) => {
    Swal.fire({
      title,
      text,
      icon: "success",
      confirmButtonColor: "#4a00e0e7",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const Warning = (title: string, text: string) => {
    Swal.fire({
      title,
      text,
      icon: "warning",
      confirmButtonColor: "#4a00e0e7",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const Error = (title: string, text: string) => {
    Swal.fire({
      title,
      text,
      icon: "error",
      confirmButtonColor: "#4a00e0e7",
      showConfirmButton: false,
      timer: 1700,
    });
  };

  const Info = (title: string, text: string) => {
    Swal.fire({
      title,
      text,
      icon: "info",
      confirmButtonColor: "#4a00e0e7",
      showConfirmButton: true,
    });
  };

  return {
    Success,
    Warning,
    Error,
    Info,
  };
}
