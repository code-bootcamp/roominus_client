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
        <S.ThemeBoxs>
          <Link href={"/mypage/mypick"}>
            <S.ThemeBox>
              <S.ThemeTitle>테마 찜</S.ThemeTitle>{" "}
              <S.ThemeSubTitle>
                하고 싶은 테마들을 미리 담아두고 싶다면?
              </S.ThemeSubTitle>
              <S.ThemeIcon src="/img/mypage/heart.webp/" />
            </S.ThemeBox>
          </Link>
          <Link href={"/mypage/myreview"}>
            <S.ThemeBox>
              <S.ThemeTitle>내 리뷰</S.ThemeTitle>
              <S.ThemeSubTitle>
                내 테마 리뷰만 모아 추억하고 싶다면?
              </S.ThemeSubTitle>
              <S.ThemeIcon src="/img/mypage/escape.webp/" />
            </S.ThemeBox>
          </Link>
          <Link href={"/mypage/myboard"}>
            <S.ThemeBox>
              <S.ThemeTitle>내 보드</S.ThemeTitle>
              <S.ThemeSubTitle>내 게시물만 모아 보고 싶다면?</S.ThemeSubTitle>
              <S.ThemeIcon src="/img/mypage/board.webp/" />
            </S.ThemeBox>
          </Link>
        </S.ThemeBoxs>

        <S.RowBox>
          <>
            <S.InfoBox>
              <S.InfoTitleBox>
                <S.Label>최근 결제 내역</S.Label>
                <S.addButton>
                  <Link href={"/mypage/history"}>
                    <S.Contents>더보기</S.Contents>
                  </Link>
                </S.addButton>
              </S.InfoTitleBox>

              <S.TableWrapper>
                <S.TableTop />
                <S.TitleRow>
                  <S.ColumnHeaderTitle>번호</S.ColumnHeaderTitle>
                  <S.ColumnHeaderTitle>예약 테마</S.ColumnHeaderTitle>
                  <S.ColumnHeaderTitle>예약 상태</S.ColumnHeaderTitle>
                  <S.ColumnHeaderTitle>결제 금액</S.ColumnHeaderTitle>
                  <S.ColumnHeaderTitle>날짜</S.ColumnHeaderTitle>
                </S.TitleRow>
                {props?.reservation?.fetchReservationsUser.map(
                  (el: IFetchReservationUser, index: number) => (
                    <S.Row key={index}>
                      <S.ColumnBasic>{index + 1}</S.ColumnBasic>

                      <S.ColumnBasic>{el.status}</S.ColumnBasic>
                      <S.ColumnBasic>{el.reservation_date}</S.ColumnBasic>
                    </S.Row>
                  )
                )}
                <S.TableBottom />
              </S.TableWrapper>
            </S.InfoBox>
          </>
          <>
            <S.InfoBox>
              <S.InfoTitleBox>
                <S.Label>최근 적립 내역</S.Label>
                <S.addButton>
                  <Link href={"/mypage/reward"}>
                    <S.Contents>더보기</S.Contents>
                  </Link>
                </S.addButton>
              </S.InfoTitleBox>

              <S.TableTop />
              <S.TitleRow>
                <S.ColumnHeaderTitle>번호</S.ColumnHeaderTitle>
                <S.ColumnHeaderTitle>내용</S.ColumnHeaderTitle>
                <S.ColumnHeaderTitle>금액</S.ColumnHeaderTitle>
                <S.ColumnHeaderTitle>전체</S.ColumnHeaderTitle>
                <S.ColumnHeaderTitle>날짜</S.ColumnHeaderTitle>
              </S.TitleRow>
              {props?.payments?.fetchPayments.map(
                (el: IFetchPayments, index: number) => (
                  <S.Row key={el.id}>
                    <S.ColumnBasic id={el.id}>{el.title}</S.ColumnBasic>
                    <S.ColumnBasic>{el.writer}</S.ColumnBasic>
                    <S.ColumnBasic>{el.createdAt}</S.ColumnBasic>
                  </S.Row>
                )
              )}
              <S.TableBottom />
            </S.InfoBox>
          </>
        </S.RowBox>
      </S.Wrapper>
    </S.Container>
  );
}
