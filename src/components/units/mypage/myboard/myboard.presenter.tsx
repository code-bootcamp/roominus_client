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
        <S.CountBox>
          <span>총 {props.count?.fetchBoardsUserCount} 건</span>
        </S.CountBox>
        <S.TableTop />
        <S.TitleRow>
          <S.ColumnHeaderTitle>번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>좋아요</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>날짜</S.ColumnHeaderTitle>
        </S.TitleRow>
        {props.data?.fetchBoardsUser.map(
          (el: IFetchBoardsUserProps, index: number) => (
            <S.Row key={index}>
              <S.ColumnBasic>{index + 1}</S.ColumnBasic>
              <S.ColumnTitle id={el.id} onClick={props.onClickBoard}>
                {el.title}
              </S.ColumnTitle>
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
