import * as S from "./History.styles";

export default function HistoryUI() {
  const data = [
    {
      _id: "1234",
      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
    {
      _id: "1234",
      title: "dfdfa234sadfadsf",
      writer: "34134",
      createdAt: "234324",
    },
  ];
  return (
    <S.Container>
      <S.Wrapper>
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderBasic>번호</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>예약 번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>테마</S.ColumnHeaderBasic>
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
