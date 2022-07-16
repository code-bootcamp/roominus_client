import { Modal } from "antd";
import Link from "next/link";
import { useState } from "react";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import LayoutNavigation from "../../../commons/layout/navigation/LayoutNavigation.container";
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
        <S.TitleRow>
          <S.ColumnHeaderTitle>번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>예약 번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>예약 상태</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>테마</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>날짜</S.ColumnHeaderTitle>
        </S.TitleRow>
        {data.map((el) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>
              {String(el._id).slice(-4).toUpperCase()}
            </S.ColumnBasic>
            <S.ColumnBasic id={el._id} onClick={() => setModal2Visible(true)}>
              {el.title}
            </S.ColumnBasic>
            <S.ColumnBasic>{el.status}</S.ColumnBasic>
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            <S.ColumnBasic>{el.createdAt}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
        <S.ButtonBox>
          <Link href={"/mypage"}>
            <WebBlackButton type="button" title="목록으로" />
          </Link>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
