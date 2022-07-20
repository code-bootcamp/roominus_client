import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import { getToday } from "../../../commons/getDate";
import * as S from "../myboard/myboard.styles";
import { IFetchBoardsUserProps, IMyBoardUIProps } from "./myboard.types";

export default function MyBoardUI(props: IMyBoardUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 글 목록</S.Title>
        <S.TableTop />
        <S.TitleRow>
          <S.ColumnHeaderTitle>번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>좋아요</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>날짜</S.ColumnHeaderTitle>
        </S.TitleRow>
        {props.data?.fetchBoardsUser.map(
          (el: IFetchBoardsUserProps, index: number) => (
            <S.Row key={index} id={el.id} onClick={props.onClickBoard}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnBasic>{el.title}</S.ColumnBasic>
              <S.ColumnBasic>{el.like}</S.ColumnBasic>
              <S.ColumnBasic>{getToday(el.createdAt)}</S.ColumnBasic>
            </S.Row>
          )
        )}

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
