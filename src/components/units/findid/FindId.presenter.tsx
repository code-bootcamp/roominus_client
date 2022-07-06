import FindPassword from "../findpassword/FindPassword.container";
import * as S from "./FindId.styles";

export default function FindIdUI(props) {
  return (
    <>
      {!props.isClickedsecond && (
        <S.Wrapper>
          <S.Title>아이디 찾기 및 비밀번호 재설정</S.Title>
          <S.TabBtns>
            <S.TabFirst
              onClick={props.onClickShowContentsFirst}
              isClickedfirst={props.isClickedfirst}
            >
              아이디 찾기
            </S.TabFirst>
            <S.TabSecond
              onClick={props.onClickShowContentsSecond}
              isClickedsecond={props.isClickedsecond}
            >
              비밀번호 재설정
            </S.TabSecond>
          </S.TabBtns>
          {!props.isOpenedID && (
            <S.Form onSubmit={props.onSubmitFindId}>
              <S.NameBox>
                <S.Name>이름💥</S.Name>
                <S.NameInput type="text" placeholder="홍길동" />
              </S.NameBox>
              <S.EmailBox>
                <S.Email>이메일💥</S.Email>
                <S.EmailInput type="text" placeholder="bubu123@gmail.com" />
              </S.EmailBox>
              <S.ConfirmBtn>확인</S.ConfirmBtn>
            </S.Form>
          )}
          {props.isClickedfirst && props.isOpenedID && (
            <S.IDinfoBox>
              <S.IDTitle>조회하신 아이디는</S.IDTitle>
              <S.SearchingID>BUBUBU123 입니다.</S.SearchingID>
              <S.IDdetailInfo>가입되지 않은 정보입니다.</S.IDdetailInfo>
              <S.LoginBox>
                <S.Retrybtn>다시찾기</S.Retrybtn>
                <S.LoginBtn>로그인</S.LoginBtn>
              </S.LoginBox>
            </S.IDinfoBox>
          )}
        </S.Wrapper>
      )}

      {props.isClickedsecond && (
        <FindPassword
          onClickShowContentsFirst={props.onClickShowContentsFirst}
          onClickShowContentsSecond={props.onClickShowContentsSecond}
          isClickedsecond={props.isClickedsecond}
          isClickedfirst={props.isClickedfirst}
          onSubmitVerificationEmail={props.onSubmitVerificationEmail}
          isOpenedPassword={props.isOpenedPassword}
        />
      )}
    </>
  );
}
