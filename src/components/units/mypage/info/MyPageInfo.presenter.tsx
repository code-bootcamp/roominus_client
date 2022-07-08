import Link from "next/link";
import * as S from "./MyPageInfo.styles";
import { Modal } from "antd";
import WebHighlightUndelineInput from "../../../commons/inputs/inputDesktop/WebHighlightUndelineInput";
import { Card } from "antd";

export default function MyPageInfoUI(props) {
  const { Meta } = Card;

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
        <S.UserInfoBox>
          <S.Label> 홍길동님 안녕하세요!</S.Label>
          <S.Label>
            오늘까지 탈출 시도
            <S.Contents>3건</S.Contents>
          </S.Label>
          <S.Label>
            오늘까지 모은 적립금 <S.Contents>5000원</S.Contents>
          </S.Label>
          <S.Label>내 이메일 : abcd1234@gmail.com</S.Label>

          <S.PhoneBox>
            <S.Label>내 휴대폰 번호 : 010 - 1234 - 5678</S.Label>
            <S.resetButton onClick={props.onClickReset}>변경하기</S.resetButton>
          </S.PhoneBox>
          <Modal
            visible={props.isModalVisible}
            onOk={props.handleOk}
            onCancel={props.handleCancel}
            width={800}
          >
            <form>
              <S.Label>휴대폰 번호 변경</S.Label>
              <S.NumberBox>
                <WebHighlightUndelineInput
                  type="tel"
                  name="userPhoneNumber"
                  placeholder="변경할 번호를 입력해주세요"
                />
              </S.NumberBox>
            </form>
          </Modal>
        </S.UserInfoBox>
        <S.InfoBox>
          <S.InfoTitleBox>
            <S.Label>결제 내역</S.Label>
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
            <S.Label>적립 내역</S.Label>
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
        <S.InfoBox>
          <S.InfoTitleBox>
            <S.Label>찜 내역</S.Label>
            <S.addButton>
              <Link href={"/mypage/mypick"}>
                <S.Contents>더보기</S.Contents>
              </Link>
            </S.addButton>
          </S.InfoTitleBox>
          <S.CardBox>
            <Card
              onClick={props.onClickMoveToDetail}
              hoverable
              style={{ width: "150px" }}
              cover={<img alt="example" src="/img/theme/월야애담.webp" />}
            >
              <Meta title="월야애담" />
            </Card>
            <Card
              onClick={props.onClickMoveToDetail}
              hoverable
              style={{ width: "150px" }}
              cover={<img alt="example" src="/img/theme/월야애담.webp" />}
            >
              <Meta title="월야애담" />
            </Card>{" "}
            <Card
              onClick={props.onClickMoveToDetail}
              hoverable
              style={{ width: "150px" }}
              cover={<img alt="example" src="/img/theme/월야애담.webp" />}
            >
              <Meta title="월야애담" />
            </Card>
          </S.CardBox>
        </S.InfoBox>
      </S.Wrapper>
    </S.Container>
  );
}
