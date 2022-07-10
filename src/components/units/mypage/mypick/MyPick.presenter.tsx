import { Card } from "antd";
import LayoutNavigation from "../../../commons/layout/navigation/LayoutNavigation.container";
import * as S from "./MyPick.styles";

export default function MyPickUI(props) {
  const { Meta } = Card;

  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>테마 찜목록</S.Title>
        <S.PickedCard
          onClick={props.onClickMoveToDetail}
          hoverable
          style={{ width: "200px" }}
          cover={<img alt="example" src="/img/theme/월야애담.webp" />}
        >
          <Meta title="월야애담" description="찜한 날짜" />
        </S.PickedCard>{" "}
        <S.ButtonBox>
          <button>목록으로</button>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
