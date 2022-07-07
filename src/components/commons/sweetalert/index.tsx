import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const success = (ItemTitle, text) => {
  const MySwal = withReactContent(Swal);
  Swal.fire({
    title: ItemTitle,
    text,
  });
  return MySwal;
};

export const error = (text) => {
  const MySwal = withReactContent(Swal);

  Swal.fire({
    icon: "error",
    title: text,
  });

  return MySwal;
};
