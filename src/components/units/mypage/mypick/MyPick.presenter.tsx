import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import Paginations01 from "../../../commons/pagination/Paginations.container";
import GradientCover from "./card";
import * as S from "./MyPick.styles";
import { IfetchUserLikeThemesProps, IMyPickUIProps } from "./MyPick.types";

export default function MyPickUI(props: IMyPickUIProps) {
  return (
    <S.Container>
      <S.Title>나의 찜 목록</S.Title>
      <S.CountBox>
        <span>총 {props.count?.fetchUserLikeThemesCount}건</span>
      </S.CountBox>
      <S.Wrapper>
        <S.Etc>
          {props.data?.fetchUserLikeThemes?.map(
            (el: IfetchUserLikeThemesProps) => (
              <div
                key={el.theme.id}
                id={el.theme.id}
                onClick={props.onClickMoveToThemeDetail}
              >
                <GradientCover el={el} />
              </div>
            )
          )}
        </S.Etc>
      </S.Wrapper>
      <S.PaginationsWrapper>
        <Paginations01
          count={props.count?.fetchUserLikeThemesCount}
          refetch={props.refetch}
        />
      </S.PaginationsWrapper>
      <S.ButtonBox>
        <Link href={"/mypage"}>
          <WebBlackButton type="button" title="목록으로" />
        </Link>
      </S.ButtonBox>
    </S.Container>
  );
}
