import { useMutation, useQuery } from "@apollo/client";
import { SetStateAction, useState } from "react";
import Swal from "sweetalert2";
import { FETCH_CAFES } from "../../cafe/list/AdminCafeList.query";
import {
  DELETE_RESERVATION,
  FETCH_RESERVATIONS,
} from "./AdminReservationListQuery";
import AdminReservationListUI from "./AdminReservationListUi";

export default function AdminReservationList() {
  const [cafeId, setCafeId] = useState("");
  const [reservationDate, setReservationDate] = useState("");
  const [reservationId, setReservationId] = useState("");
  const [merchantUid, setMerchantUid] = useState("");
  const { data } = useQuery(FETCH_RESERVATIONS, {
    variables: {
      cafeId,
      reservationDate,
    },
  });
  const { data: cafeList } = useQuery(FETCH_CAFES);
  const [deleteReservation] = useMutation(DELETE_RESERVATION);

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

  const onClickRefund = async (event: {
    target: { id: SetStateAction<string> };
  }) => {
    setReservationId(event?.target.id);
    // setMerchantUid(event?.target.id.el);

    // console.log(cafeId);
    console.log(event.target.id);

    // try {
    //   await deleteReservation({
    //     variables: {
    //       reservationId,
    //       merchantUid,
    //     },
    //   });
    // } catch (error) {
    //   Swal.fire({
    //     icon: "error",
    //     text: (error as Error).message,
    //   });
    // }
  };

  return (
    <AdminReservationListUI
      data={data}
      cafeList={cafeList}
      onChangeCafeId={onChangeCafeId}
      onChangeDate={onChangeDate}
      onClickRefund={onClickRefund}
    />
  );
}
