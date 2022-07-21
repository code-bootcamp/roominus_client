import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import * as S from "./MyPick.styles";
import { IfetchUserLikeThemesProps, IMyPickUIProps } from "./MyPick.types";

export default function MyPickUI(props: IMyPickUIProps) {
  return (
    <S.Container>
      <S.Title>나의 찜 목록</S.Title>

      <S.Wrapper>
        <S.Etc>
          {props.data?.fetchUserLikeThemes?.map(
            (el: IfetchUserLikeThemesProps) => (
              <div
                key={el.theme.id}
                id={el.theme.id}
                onClick={props.onClickMoveToThemeDetail}
              >
                <img
                  alt="myPick"
                  src={el.theme.mainImg}
                  style={{ width: 150, height: 250, cursor: "pointer" }}
                />
              </div>
            )
          )}
        </S.Etc>
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
