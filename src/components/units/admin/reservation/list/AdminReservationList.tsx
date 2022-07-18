import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
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

  const { data } = useQuery(FETCH_RESERVATIONS, {
    variables: {
      cafeId,
      reservationDate,
    },
  });
  const { data: cafeList } = useQuery(FETCH_CAFES);
  const [deleteReservation] = useMutation(DELETE_RESERVATION);

  console.log(cafeList);

  const reservationId = data?.fetchReservatoins[0].id;
  const merchantUid = data?.fetchReservatoins[0].payment.merchant_uid;
  console.log(reservationId);
  console.log(merchantUid);

  const onChangeCafeId = (event) => {
    setCafeId(event.target.value);
    console.log(cafeId);
  };

  const onChangeDate = (event) => {
    setReservationDate(event.target.value);
    console.log(reservationDate);
  };

  const onClickRefund = async () => {
    console.log("ㅎㅇ");

    try {
      await deleteReservation({
        variables: {
          reservationId,
          merchantUid,
        },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.message,
      });
    }
  };

  // console.log("data.fetchReservatoins.id", data?.fetchReservatoins.id);

  // console.log(
  //   "data.fetchReservatoins.payment.merchant_uid",
  //   data?.fetchReservatoins.payment?.merchant_uid
  // );
  // console.log(
  //   "data.fetchReservatoins.payment",
  //   data?.fetchReservatoins.payment
  // );

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
