import Link from "next/link";
import * as S from "./MyPageInfo.styles";

export default function MyPageInfoUI(props) {
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
  ];
  return (
    <S.Container>
      <S.Wrapper>
        <S.RightBox>
          <S.ThemeBoxs>
            <Link href={"/mypage/mypick"}>
              <S.ThemeBox>
                <S.ThemeTitle>테마 찜</S.ThemeTitle>{" "}
                <S.ThemeSubTitle>
                  하고 싶은 테마들을 미리 담아두고 싶다면?
                </S.ThemeSubTitle>
                <S.ThemeIcon src="/img/mypage/heart.png/" />
              </S.ThemeBox>
            </Link>
            <Link href={"/mypage/history"}>
              <S.ThemeBox>
                <S.ThemeTitle>내 탈출</S.ThemeTitle>
                <S.ThemeSubTitle>
                  탈출한 테마 내역을 확인하고 싶다면?
                </S.ThemeSubTitle>
                <S.ThemeIcon src="/img/mypage/escape.png/" />
              </S.ThemeBox>
            </Link>
            <Link href={"/mypage"}>
              <S.ThemeBox>
                <S.ThemeTitle>내 후기</S.ThemeTitle>
                <S.ThemeSubTitle>
                  탈출 후 내 후기를 적어 추억하고 싶다면?
                </S.ThemeSubTitle>
                <S.ThemeIcon src="/img/mypage/board.png/" />
              </S.ThemeBox>
            </Link>
          </S.ThemeBoxs>
          <S.InfoBox>
            <S.InfoTitleBox>
              <S.Label>최근 결제 내역</S.Label>
              <S.addButton>
                <Link href={"/mypage/history"}>
                  <S.Contents>더보기</S.Contents>
                </Link>
              </S.addButton>
            </S.InfoTitleBox>

            <S.TableWrapper>
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
            </S.TableWrapper>
          </S.InfoBox>
          <S.InfoBox>
            <S.InfoTitleBox>
              <S.Label>최근 적립 내역</S.Label>
              <S.addButton>
                <Link href={"/mypage/reward"}>
                  <S.Contents>더보기</S.Contents>
                </Link>
              </S.addButton>
            </S.InfoTitleBox>

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
          </S.InfoBox>
        </S.RightBox>
      </S.Wrapper>
    </S.Container>
  );
}
