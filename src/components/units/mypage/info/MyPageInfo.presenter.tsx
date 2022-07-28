import Link from "next/link";
import * as S from "./MyPageInfo.styles";
import {
  IFetchPayments,
  IFetchReservationUser,
  IMyPageInfoUIProps,
} from "./MyPageInfo.types";

export default function MyPageInfoUI(props: IMyPageInfoUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ThemeBoxes>
          <Link href={"/mypage/mypick"}>
            <S.ThemeBox>
              <S.ThemeTitle>테마 찜</S.ThemeTitle>{" "}
              <S.ThemeSubTitle>
                하고 싶은 테마들을 미리 담아두고 싶다면?
              </S.ThemeSubTitle>
              <S.ThemeIcon src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990937/public/mypage/heart_emzc4g.webp" />
            </S.ThemeBox>
          </Link>
          <Link href={"/mypage/myreview"}>
            <S.ThemeBox>
              <S.ThemeTitle>내 리뷰</S.ThemeTitle>
              <S.ThemeSubTitle>
                내 테마 리뷰만 모아 보고 싶다면?
              </S.ThemeSubTitle>
              <S.ThemeIcon src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990937/public/mypage/escape_tc5iid.webp" />
            </S.ThemeBox>
          </Link>
          <Link href={"/mypage/myboard"}>
            <S.ThemeBox>
              <S.ThemeTitle>내 보드</S.ThemeTitle>
              <S.ThemeSubTitle>내 보드만 모아 추억하고 싶다면?</S.ThemeSubTitle>
              <S.ThemeIcon src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990937/public/mypage/board_akmskg.webp" />
            </S.ThemeBox>
          </Link>
        </S.ThemeBoxes>

        <S.RowBox>
          <S.InfoBox>
            <S.InfoTitleBox>
              <S.Label>최근 예약 내역</S.Label>
              <S.addButton>
                <Link href={"/mypage/history"}>
                  <S.Contents>더보기{" >"}</S.Contents>
                </Link>
              </S.addButton>
            </S.InfoTitleBox>

            <S.TableWrapper>
              <S.TableTop />
              <S.TitleRow>
                <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
                <S.ColumnHeaderTitle>예약 테마</S.ColumnHeaderTitle>
                <S.ColumnHeaderBasic>매장</S.ColumnHeaderBasic>
                <S.ColumnHeaderBasic>방문일</S.ColumnHeaderBasic>
                <S.ColumnHeaderBasic>예약 상태</S.ColumnHeaderBasic>
              </S.TitleRow>
              {props?.reservation?.fetchReservationsUser
                .slice(0, 3)
                .map((el: IFetchReservationUser, index: number) => (
                  <S.Row key={index}>
                    <S.ColumnNumber>{index + 1}</S.ColumnNumber>
                    <S.ColumnTitle
                      id={el.id}
                      onClick={props.onClickReservationDetail}
                    >
                      {el.theme_menu.theme.title}
                    </S.ColumnTitle>
                    <S.ColumnBasic>{el.cafe.name}</S.ColumnBasic>
                    <S.ColumnBasic>{el.reservation_date}</S.ColumnBasic>
                    <S.ColumnBasic>{el.status}</S.ColumnBasic>
                  </S.Row>
                ))}
              <S.TableBottom />
            </S.TableWrapper>
          </S.InfoBox>

          <S.InfoBox>
            <S.InfoTitleBox>
              <S.Label>최근 적립 내역</S.Label>
              <S.addButton>
                <Link href={"/mypage/reward"}>
                  <S.Contents>더보기{" >"}</S.Contents>
                </Link>
              </S.addButton>
            </S.InfoTitleBox>
            <S.TableWrapper>
              <S.TableTop />
              <S.TitleRow>
                <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
                <S.ColumnHeaderBasic>결제번호</S.ColumnHeaderBasic>
                <S.ColumnHeaderBasic>결제 가격</S.ColumnHeaderBasic>
                <S.ColumnHeaderBasic>사용</S.ColumnHeaderBasic>
                <S.ColumnHeaderBasic>적립예정</S.ColumnHeaderBasic>
              </S.TitleRow>
              {props?.payments?.fetchPayments
                .slice(0, 3)
                .map((el: IFetchPayments, index: number) => (
                  <S.Row key={el.id}>
                    <S.ColumnNumber>{index + 1}</S.ColumnNumber>
                    <S.ColumnBasic>
                      {el.imp_uid.split("_")[1].slice(0, 5)}
                    </S.ColumnBasic>
                    <S.ColumnBasic>{el.price}</S.ColumnBasic>
                    <S.ColumnBasic>{el.usepoint}원</S.ColumnBasic>
                    <S.ColumnBasic>
                      {Math.ceil(el.price * 0.03)}원
                    </S.ColumnBasic>
                  </S.Row>
                ))}
              <S.TableBottom />
            </S.TableWrapper>
          </S.InfoBox>
        </S.RowBox>
      </S.Wrapper>
    </S.Container>
  );
}
