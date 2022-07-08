import { Card } from "antd";
import * as S from "./MyPick.styles";

export default function MyPickUI(props) {
  const { Meta } = Card;

  return (
    <S.Container>
      <S.PickedCard
        onClick={props.onClickMoveToDetail}
        hoverable
        style={{ width: "400px" }}
        cover={<img alt="example" src="/img/theme/월야애담.webp" />}
      >
        <Meta title="월야애담" description="찜한 날짜" />
      </S.PickedCard>{" "}
      <S.PickedCard
        hoverable
        style={{ width: "400px" }}
        cover={<img alt="example" src="/img/theme/월야애담.webp" />}
      >
        <Meta title="월야애담" description="찜한 날짜" />
      </S.PickedCard>{" "}
      <S.PickedCard
        hoverable
        style={{ width: "400px" }}
        cover={<img alt="example" src="/img/theme/월야애담.webp" />}
      >
        <Meta title="월야애담" description="찜한 날짜" />
      </S.PickedCard>{" "}
      <S.PickedCard
        hoverable
        style={{ width: "400px" }}
        cover={<img alt="example" src="/img/theme/월야애담.webp" />}
      >
        <Meta title="월야애담" description="찜한 날짜" />
      </S.PickedCard>{" "}
      <S.PickedCard
        hoverable
        style={{ width: "400px" }}
        cover={<img alt="example" src="/img/theme/월야애담.webp" />}
      >
        <Meta title="월야애담" description="찜한 날짜" />
      </S.PickedCard>{" "}
    </S.Container>
  );
}
