import Link from "next/link";
import WebBlackButton from "../../../../commons/buttons/buttonDesktop/WebBlackButton";
import { v4 as uuidv4 } from "uuid";
import * as S from "../list/AdminReservationListStyle";

export default function AdminReservationListUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>예약내역</S.Title>
        <select onChange={props.onChangeCafeId}>
          <option disabled selected>
            매장을 선택해주세요
          </option>
          {props?.cafeList?.fetchCafes?.map((el: any) => (
            <option key={el.id} value={el.id}>
              {el.name}
            </option>
          ))}
        </select>

        <input type="date" onChange={props.onChangeDate} />

        <button onClick={props.onClickSearch}>조회하기</button>

        <S.TableTop />
        <S.TitleRow>
          <S.ColumnHeaderTitle>예약 번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>예약일</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>예약상태</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>날짜</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>예약자</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>예약폰번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>테마 예약ID</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>예약 시간</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>예약 인원</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>테마 가격</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>환불</S.ColumnHeaderTitle>
        </S.TitleRow>
        {props.data?.fetchReservatoins?.map((el) => (
          <S.Row key={el.id}>
            <S.ColumnBasic>
              {" "}
              {el.id}
              {/* {String(el._id).slice(-4).toUpperCase()} */}
            </S.ColumnBasic>
            <S.ColumnBasic>{el.reservation_date}</S.ColumnBasic>
            <S.ColumnBasic>{el.status}</S.ColumnBasic>
            <S.ColumnBasic>{el.memo}</S.ColumnBasic>
            <S.ColumnBasic>{el.user.name}</S.ColumnBasic>
            <S.ColumnBasic>{el.user.phone}</S.ColumnBasic>
            <S.ColumnBasic>{el.theme_menu.id}</S.ColumnBasic>
            <S.ColumnBasic>{el.theme_menu.reservation_time}</S.ColumnBasic>
            <S.ColumnBasic>{el.theme_menu.people_number}</S.ColumnBasic>
            <S.ColumnBasic>{el.theme_menu.price}</S.ColumnBasic>
            <S.ColumnBasic onClick={props.onClickRefund}>
              환불하기
            </S.ColumnBasic>
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
