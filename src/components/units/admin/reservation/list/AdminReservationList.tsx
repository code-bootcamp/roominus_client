import { useQuery } from "@apollo/client";
import { SetStateAction, useState } from "react";
import { FETCH_CAFES } from "../../cafe/list/AdminCafeList.query";
import { FETCH_RESERVATIONS } from "./AdminReservationListQuery";
import AdminReservationListUI from "./AdminReservationListUi";

export default function AdminReservationList() {
  const [cafeId, setCafeId] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const { data } = useQuery(FETCH_RESERVATIONS, {
    variables: {
      cafeId,
      reservationDate,
    },
  });
  const { data: cafeList } = useQuery(FETCH_CAFES);

  const onChangeCafeId = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCafeId(event.target.value);
  };

  const onChangeDate = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setReservationDate(event.target.value);
  };

  return (
    <AdminReservationListUI
      data={data}
      cafeList={cafeList}
      onChangeCafeId={onChangeCafeId}
      onChangeDate={onChangeDate}
      onClickRefund={undefined}
    />
  );
}
