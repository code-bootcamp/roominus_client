import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import * as S from "./Reward.styles";

export default function RewardUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>나의 적립내역</S.Title>
        <S.TableTop />
        <S.TitleRow>
          <S.ColumnHeaderTitle>번호</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>적립 내역</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>전체 적립금</S.ColumnHeaderTitle>
          <S.ColumnHeaderTitle>날짜</S.ColumnHeaderTitle>
        </S.TitleRow>
        {props.data?.map((el) => (
          <S.Row key={el._id}>
            <S.ColumnBasic>{el.price}</S.ColumnBasic>
            <S.ColumnBasic>{el.usepoint}</S.ColumnBasic>
          </S.Row>
        ))}
        <S.TableBottom />
        <S.ButtonBox>
          <Link href={"/mypage"}>
            <WebBlackButton type="button" title="목록으로" />
          </Link>
        </S.ButtonBox>
      </S.Wrapper>
    </S.Container>
  );
}
