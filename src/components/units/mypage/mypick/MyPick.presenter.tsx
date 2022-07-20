import { Card } from "antd";
import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import * as S from "./MyPick.styles";
import { IMyPickProps } from "./MyPick.types";

export default function MyPickUI(props: IMyPickProps) {
  const { Meta } = Card;

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 찜 목록</S.Title>
        <S.PickedCard
          onClick={props.onClickMoveToDetail}
          hoverable
          style={{ width: "200px" }}
          cover={<img alt="example" src="/img/theme/월야애담.webp" />}
        >
          <Meta title="월야애담" description="찜한 날짜" />
        </S.PickedCard>{" "}
        <S.ButtonBox>
          <Link href={"/mypage"}>
            <WebBlackButton type="button" title="목록으로" />
          </Link>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
