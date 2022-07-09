import { Modal } from "antd";
import { useState } from "react";
import * as S from "./History.styles";

export default function HistoryUI() {
  const [modal2Visible, setModal2Visible] = useState(false);
  const data = [
    {
      _id: "1234",
      status: "방문 완료",
      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      status: "방문 완료",

      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      status: "방문 완료",

      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      status: "방문 완료",

      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      status: "환불 완료",
      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      status: "환불 완료",
      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      status: "방문대기",

      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      status: "방문대기",

      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      status: "방문대기",

      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
  ];
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 예약내역</S.Title>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>예약 번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>예약 상태</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>테마</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        </S.Row>
        {data.map((el) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>
              {String(el._id).slice(-4).toUpperCase()}
            </S.ColumnBasic>
            <S.ColumnTitle id={el._id} onClick={() => setModal2Visible(true)}>
              {el.title}
            </S.ColumnTitle>
            <S.ColumnBasic>{el.status}</S.ColumnBasic>
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            <S.ColumnBasic>{el.createdAt}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
      </S.Wrapper>

      <Modal
        title="Vertically centered modal dialog"
        centered
        visible={modal2Visible}
        onOk={() => setModal2Visible(false)}
        onCancel={() => setModal2Visible(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </S.Container>
  );
}
