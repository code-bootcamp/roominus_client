import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import ListPickCards from "./ListPickCard";
import * as S from "./MyPick.styles";
import { IfetchUserLikeThemesProps, IMyPickUIProps } from "./MyPick.types";

export default function MyPickUI(props: IMyPickUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 찜 목록</S.Title>
        {props.data?.fetchUserLikeThemes.theme.map(
          (el: IfetchUserLikeThemesProps) => (
            <span
              key={el.id}
              id={el.id}
              onClick={props.onClickMoveToThemeDetail}
            >
              <ListPickCards el={el} />
            </span>
          )
        )}

        <S.ButtonBox>
          <Link href={"/mypage"}>
            <WebBlackButton type="button" title="목록으로" />
          </Link>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
