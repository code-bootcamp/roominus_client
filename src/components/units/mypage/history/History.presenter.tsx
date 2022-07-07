import * as S from "./History.styles";

export default function HistoryUI() {
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
        <S.TableTop />
        <S.Row>
          <S.ColumnHeaderBasic>ID</S.ColumnHeaderBasic>
          <S.ColumnHeaderTitle>제목</S.ColumnHeaderTitle>
          <S.ColumnHeaderBasic>작성자</S.ColumnHeaderBasic>
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
