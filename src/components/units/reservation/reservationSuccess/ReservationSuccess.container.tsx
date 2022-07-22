import { useEffect, useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { PrinterOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import ReservationSuccessUI from "./ReservationSuccess.presenter";
import { useMutation, useQuery } from "@apollo/client";

import Swal from "sweetalert2";
import {
  DELETE_RESERVATION,
  FETCH_RESERVATION,
} from "./ReservationSuccess.query";
import { getToday } from "../../../commons/getDate";

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

const PrintBox = styled.div`
  width: 99%;
  display: flex;
  justify-content: flex-end;
`;

const Printer = styled(PrinterOutlined)`
  font-size: 1.8em;
  padding-top: 0.5em;
  color: #4a00e0e7;

  :hover {
    transform: scale(1.1);
  }
  transition: all 300ms ease-in-out;
`;

export default function ReservationSuccess() {
  const router = useRouter();

  const { data } = useQuery(FETCH_RESERVATION, {
    variables: { reservationId: router.query.id },
  });

  const [deleteReservation] = useMutation(DELETE_RESERVATION);
  const [cancellable, setCancellable] = useState(true);

  const componentRef = useRef(null);
  const link = `localhost:3000${router.asPath}`;

  useEffect(() => {
    const now = getToday(new Date());

    if (data?.fetchReservation.reservation_date === now) {
      setCancellable(false);
    }
  }, []);

  const onClickRefund = async () => {
    try {
      await deleteReservation({
        variables: {
          reservationId: router.query.id,
          merchantUid: data?.fetchReservation.payment.merchant_uid,
        },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: (error as Error).message,
      });
    }
  };

  const onClickOpenRefundModal = () => {
    Swal.fire({
      title: "예약을 취소하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#843dca",
      cancelButtonColor: "#ff6262",
      confirmButtonText: "네",
      cancelButtonText: "아니요",
    }).then((result) => {
      if (result.isConfirmed) {
        onClickRefund();
        Swal.fire("예약 취소", "예약 취소되었습니다.");
      }
    });
  };

  const onClickOpenCancelModal = () => {
    Swal.fire({
      title: "취소 된 예약건입니다.",
      icon: "error",
      confirmButtonColor: "#843dca",
      confirmButtonText: "돌아가기",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/home");
      }
    });
  };

  if (data?.fetchReservation.status === "환불완료") {
    onClickOpenCancelModal();
  }

  return (
    <Container>
      <PrintBox>
        <ReactToPrint
          trigger={() => <Printer />}
          content={() => componentRef.current}
        />
      </PrintBox>
      <ReservationSuccessUI
        data={data}
        link={link}
        printRef={componentRef}
        onClickOpenRefundModal={onClickOpenRefundModal}
        cancellable={cancellable}
      />
      ;
    </Container>
  );
}
