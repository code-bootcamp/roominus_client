import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import * as S from "../myreview/myreview.style";
import { IFetchThemesUser, IMyReviewUIProps } from "./myreview.type";

export default function MyReviewUI(props: IMyReviewUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 후기 목록</S.Title>

        <S.CountBox>
          <span>총 {props.count?.fetchThemeReviewsUserCount}건</span>
        </S.CountBox>
        <S.TableTop />
        <S.TitleRow>
          <S.ColumnHeaderTitle>번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>테마</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>탈출여부</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>별점</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>작성일</S.ColumnHeaderTitle>
        </S.TitleRow>
        {props.data?.fetchThemesUser.map(
          (el: IFetchThemesUser, index: number) => (
            <S.Row key={index}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnTitle id={el.theme.id} onClick={props.onClickReview}>
                {el.theme.title}
              </S.ColumnTitle>
              <S.ColumnBasic>{el.clear}</S.ColumnBasic>
              <S.ColumnBasic>{el.star}</S.ColumnBasic>
              <S.ColumnBasic>{el.createdAt}</S.ColumnBasic>
            </S.Row>
          )
        )}
        <S.TableBottom />
        <S.ButtonBox>
          <Link href={"/mypage"}>
            <WebBlackButton
              type="button"
              title="목록으로"
              onClick={undefined}
              value={undefined}
            />
          </Link>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
