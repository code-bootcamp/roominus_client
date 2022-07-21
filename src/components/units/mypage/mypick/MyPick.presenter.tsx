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

        <S.Etc>
          {props.data?.fetchUserLikeThemes?.map(
            (el: IfetchUserLikeThemesProps) => (
              <span
                key={el.theme.id}
                id={el.theme.id}
                onClick={props.onClickMoveToThemeDetail}
              >
                <ListPickCards el={el} />
              </span>
            )
          )}
        </S.Etc>
        <S.ButtonBox>
          <Link href={"/mypage"}>
            <WebBlackButton type="button" title="목록으로" />
          </Link>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
