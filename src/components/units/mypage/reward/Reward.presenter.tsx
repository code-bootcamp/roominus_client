import * as S from "./Reward.styles";

export default function RewardUI() {
  const data = [
    {
      _id: "1234",
      title: "dfdfa",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa",
      writer: "34134",
      createdAt: "234324",
    },
  ];
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 적립내역</S.Title>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>적립 내역</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>전체 적립금</S.ColumnHeaderBasic>
          <S.ColumnHeaderBasic>날짜</S.ColumnHeaderBasic>
        </S.Row>
        {data.map((el) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>
              {String(el._id).slice(-4).toUpperCase()}
            </S.ColumnBasic>
            <S.ColumnTitle id={el._id}>{el.title}</S.ColumnTitle>
            <S.ColumnBasic>{el.writer}</S.ColumnBasic>
            <S.ColumnBasic>{el.createdAt}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
      </S.Wrapper>
    </S.Container>
  );
}
