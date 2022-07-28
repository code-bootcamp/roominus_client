import Link from "next/link";
import { useEffect, useState } from "react";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import Paginations02 from "../../../commons/pagination02/Paginations.container";
import GradientCover from "./card";
import * as S from "./MyPick.styles";
import { IfetchUserLikeThemesProps, IMyPickUIProps } from "./MyPick.types";

export default function MyPickUI(props: IMyPickUIProps) {
  const [windowSize, setWindowSize] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <S.Container>
      <S.Title>나의 찜 목록</S.Title>
      <S.CountBox>
        <span>총 {props.count?.fetchUserLikeThemesCount}건</span>
      </S.CountBox>
      <S.Wrapper>
        {windowSize && (
          <S.Etc>
            {props.data?.fetchUserLikeThemes?.map(
              (el: IfetchUserLikeThemesProps) => (
                <div
                  style={{ cursor: "pointer" }}
                  key={el.theme.id}
                  id={el.theme.id}
                  onClick={props.onClickMoveToThemeDetail}
                >
                  <GradientCover el={el} />
                </div>
              )
            )}
          </S.Etc>
        )}

        {!windowSize && (
          <>
            <S.Etc>
              {props.data?.fetchUserLikeThemes?.map(
                (el: IfetchUserLikeThemesProps) => (
                  <div
                    style={{ cursor: "pointer" }}
                    key={el.theme.id}
                    id={el.theme.id}
                    onClick={props.onClickMoveToThemeDetail}
                  >
                    <GradientCover el={el} />
                  </div>
                )
              )}
            </S.Etc>
          </>
        )}
      </S.Wrapper>
      <S.PaginationsWrapper>
        <Paginations02
          count={props.count?.fetchUserLikeThemesCount}
          refetch={props.refetch}
        />
      </S.PaginationsWrapper>
      <S.ButtonBox>
        <Link href={"/mypage"}>
          <a>
            <WebBlackButton type="button" title="목록으로" />
          </a>
        </Link>
      </S.ButtonBox>
    </S.Container>
  );
}
