import WebSmallBlackButton from "../../../../commons/buttons/buttonDesktop/WebSmallBlackButton";
import WebSmallPurpleButton from "../../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import ListCards from "../../../cafe/list/card/ListCards";
import * as S from "./AdminCafeDetail.styles";

export default function AdminCafeListUI(props) {
  return (
    <S.Wrapper>
      <S.Title>매장 상세페이지(관리자)</S.Title>
      <S.InfoBox>
        <S.Img src={props.data?.fetchCafe.mainImg} />
        <S.Info>
          <div>이름: {props.data?.fetchCafe.name}</div>
          <div>지역: {props.data?.fetchCafe.address}</div>
          <div>전화번호: {props.data?.fetchCafe.phone}</div>
          <div>소개: {props.data?.fetchCafe.intro_content}</div>
          <div>주소: {props.data?.fetchCafe.address_detail}</div>
        </S.Info>
      </S.InfoBox>
      <S.ButtonBox>
        <WebSmallBlackButton onClick={props.onClickList} title="목록으로" />
        <WebSmallPurpleButton onClick={props.onClickEdit} title="수정하기" />
        <WebSmallPurpleButton onClick={props.onClickDelete} title="삭제하기" />
      </S.ButtonBox>
    </S.Wrapper>
  );
}
