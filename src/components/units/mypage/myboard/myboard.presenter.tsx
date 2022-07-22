import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import { getToday } from "../../../commons/getDate";
// import * as S from "../myboard/myboard.styles";
import { IFetchBoardsUserProps, IMyBoardUIProps } from "./myboard.types";
import * as S from "../My.styles";
import Paginations01 from "../../../commons/pagination/Paginations.container";

export default function MyBoardUI(props: IMyBoardUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 글 목록</S.Title>
        <S.CountBox>
          <span>총 {props.count?.fetchBoardsUserCount}건</span>
        </S.CountBox>
        <S.TableTop />
        <S.TitleRow>
          <S.ColumnHeaderNumber>번호</S.ColumnHeaderNumber>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>좋아요</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>조회수</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>작성일</S.ColumnHeaderBasic>
        </S.TitleRow>
        {props.data?.fetchBoardsUser.map(
          (el: IFetchBoardsUserProps, index: number) => (
            <S.Row key={index}>
              <S.ColumnNumber>{index + 1}</S.ColumnNumber>
              <S.ColumnTitle id={el.id} onClick={props.onClickBoard}>
                {el.title}
              </S.ColumnTitle>
              <S.ColumnBasic>{el.like}</S.ColumnBasic>
              <S.ColumnBasic>{el.view}</S.ColumnBasic>
              <S.ColumnBasic>{getToday(el.createdAt)}</S.ColumnBasic>
            </S.Row>
          )
        )}

        <S.TableBottom />
      </S.Wrapper>
      <S.PaginationsWrapper>
        <Paginations01
          count={props.count?.fetchBoardsUserCount}
          refetch={props.refetch}
        />
      </S.PaginationsWrapper>
      <S.ButtonBox>
        <Link href={"/mypage"}>
          <WebBlackButton type="button" title="돌아가기" />
        </Link>
      </S.ButtonBox>
    </S.Container>
  );
}
