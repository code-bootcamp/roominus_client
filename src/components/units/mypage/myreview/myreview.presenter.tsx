import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import { getToday } from "../../../commons/getDate";
import Paginations01 from "../../../commons/pagination/Paginations.container";
// import * as S from "../myreview/myreview.style";
import * as S from "../My.styles";

import { IFetchThemesUser, IMyReviewUIProps } from "./myreview.type";

export default function MyReviewUI(props: IMyReviewUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 후기 목록</S.Title>

        <S.CountBox>
          <span>총 {props.count}건</span>
        </S.CountBox>
        <S.TableTop />
        <S.TitleRow>
          <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
          <S.ColumnHeaderTitle>테마</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>탈출여부</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>별점</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>작성일</S.ColumnHeaderBasic>
        </S.TitleRow>
        {props.data?.fetchThemeReviewsUser.map(
          (el: IFetchThemesUser, index: number) => (
            <S.Row key={index}>
              <S.ColumnNumber>{index + 1}</S.ColumnNumber>
              <S.ColumnTitle id={el.theme.id} onClick={props.onClickReview}>
                {el.theme.title}
              </S.ColumnTitle>
              <S.ColumnBasic>
                {String(el.clear).replace(/(true|false)/g, function (vl) {
                  switch (vl) {
                    case "true":
                      return "탈출";
                    case "false":
                      return "미탈출";
                  }
                })}
              </S.ColumnBasic>
              <S.ColumnBasic>{el.star}</S.ColumnBasic>
              <S.ColumnBasic>{getToday(el.createdAt)}</S.ColumnBasic>
            </S.Row>
          )
        )}
        <S.TableBottom />
      </S.Wrapper>
      <S.PaginationsWrapper>
        <Paginations01 count={props.count} refetch={props.refetch} />
      </S.PaginationsWrapper>
      <S.ButtonBox>
        <Link href={"/mypage"}>
          <WebBlackButton
            type="button"
            title="돌아가기"
            onClick={undefined}
            value={undefined}
          />
        </Link>
      </S.ButtonBox>
    </S.Container>
  );
}
