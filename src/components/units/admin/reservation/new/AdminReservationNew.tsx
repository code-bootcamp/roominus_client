import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { IData } from "./AdminReservation.types";
import { CREATE_RESERVATION_THEME_MENU } from "./AdminReservationNewQuery";
import AdminReservationNewUI from "./AdminReservationNewUI";
export default function AdminReservationNew() {
  const [createThemeMenu] = useMutation(CREATE_RESERVATION_THEME_MENU);

  const { register, handleSubmit } = useForm();

  const onClickSubmit = async (data: IData) => {
    try {
      const result = await createThemeMenu({
        variables: {
          createThemeMenuInput: {
            reservation_time: data.time,
            people_number: data.people,
            price: data.price,
            cafeName: data.cafeName,
            themeTitle: data.id,
          },
        },
      });
      console.log(result.data?.createThemeMenu);
    } catch (error) {
      alert((error as Error).message);
    }
  };

  return (
    <AdminReservationNewUI
      onClickSubmit={onClickSubmit}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
}
