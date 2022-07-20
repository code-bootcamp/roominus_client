import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import * as S from "../myreview/myreview.style";
import { IMyReviewUIProps } from "./myreview.type";

export default function MyReviewUI(props: IMyReviewUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 후기 목록</S.Title>
        <S.TableTop />
        <S.TitleRow>
          <S.ColumnHeaderTitle>번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>테마</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>탈출여부</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>별점</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>내용</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>작성일</S.ColumnHeaderTitle>
        </S.TitleRow>
        {props.data?.fetchThemesUser.map((el, index) => (
          <S.Row key={index}>
            <S.ColumnBasic>{index + 1}</S.ColumnBasic>
            <S.ColumnBasic>{el.theme.title}</S.ColumnBasic>
            <S.ColumnBasic>{el.clear}</S.ColumnBasic>
            <S.ColumnBasic>{el.star}</S.ColumnBasic>
            <S.ColumnBasic>{el.content}</S.ColumnBasic>
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
