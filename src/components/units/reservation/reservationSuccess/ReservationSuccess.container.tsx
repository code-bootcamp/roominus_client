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
import ShareButton from "../../../commons/buttons/sharebutton";
import { getToday } from "../../../commons/getDate";

const PrintBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Printer = styled(PrinterOutlined)`
  margin-top: 0.5em;
  padding-top: 0.4em;
  margin-right: 0.2em;
  background-color: pink;
  color: white;
  border: 1px solid pink;
  border-radius: 50%;
  width: 1.8em;
  height: 1.8em;
  font-size: 1.3em;

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

  const componentRef = useRef(null);
  const link = `roominus.site${router.asPath}`;

  // 방문일 (당일)부터 취소하기 버튼이 안보이게
  const [cancellable, setCancellable] = useState(true);

  const today = String(new Date());
  const timeValue = data?.fetchReservation?.reservation_date;
  const now = getToday(new Date());
  const betweenTime = Math.floor(
    (Date.parse(today) - Date.parse(timeValue)) / 1000 / 60
  );

  useEffect(() => {
    if (data?.fetchReservation.reservation_date === now || betweenTime > 0) {
      setCancellable(false);
    }
  });

  // 취소하기
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
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "네",
      cancelButtonText: "아니요",
      reverseButtons: true,
      // backdrop: false,
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

  // 환불 완료일 경우 페이지 접속 불가
  if (data?.fetchReservation.status === "환불완료") {
    onClickOpenCancelModal();
  }

  return (
    <>
      <PrintBox>
        <ReactToPrint
          trigger={() => <Printer />}
          content={() => componentRef.current}
        />
        <ShareButton />
      </PrintBox>
      <ReservationSuccessUI
        data={data}
        link={link}
        printRef={componentRef}
        onClickOpenRefundModal={onClickOpenRefundModal}
        cancellable={cancellable}
      />
    </>
  );
}
