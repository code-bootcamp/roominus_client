import Link from "next/link";
import WebSmallBlackButton from "../../../commons/buttons/buttonDesktop/WebSmallBlackButton";
import WebSmallPurpleButton from "../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import * as S from "./MyPhoneEdit.styles";

export default function MyPhoneEditUI(props) {
  return (
    <S.Container>
      <S.Title>회원정보 수정</S.Title>

      <S.Wrapper>
        <S.UserInfoBox>
          <S.UserDataLabel>이름</S.UserDataLabel>
          <S.UserData>홍길동</S.UserData>
        </S.UserInfoBox>

        <S.UserInfoBox>
          <S.UserDataLabel> 이메일 </S.UserDataLabel>
          <S.UserData> bcd@gamil.com </S.UserData>
        </S.UserInfoBox>

        <S.UserInfoBox>
          <S.UserDataLabel>비밀번호</S.UserDataLabel>
          <Link href={"/mypage/pwedit"}>
            <S.Edit>변경하기 </S.Edit>
          </Link>
        </S.UserInfoBox>

        <S.UserInfoBox>
          <S.UserDataLabel>내 전화번호</S.UserDataLabel>
          <S.UserData> 010-1234-5678 </S.UserData>
          <S.Edit onClick={props.onClickEdit}>변경하기</S.Edit>
        </S.UserInfoBox>

        {props.isEdit && (
          <S.UserInfoBox>
            <S.UserDataLabel>변경할 전화번호</S.UserDataLabel>
            <S.UserCertification>
              <S.UserCertificationBox>
                <input type="tel" />
                <WebSmallBlackButton
                  title="인증번호"
                  type="button"
                  onClick={props.onClickEdit}
                ></WebSmallBlackButton>
              </S.UserCertificationBox>
              <S.UserCertificationBox>
                <S.CertificationInput
                  onKeyDown={(e) =>
                    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
                  }
                  type="number"
                />
                <span>03:00</span>
              </S.UserCertificationBox>
            </S.UserCertification>
          </S.UserInfoBox>
        )}

        <S.ButtonWrapper>
          <WebSmallBlackButton
            title="취소하기"
            type="button"
            onClick={props.onClickMoveToMain}
          ></WebSmallBlackButton>
          <WebSmallPurpleButton title="변경하기"> </WebSmallPurpleButton>
        </S.ButtonWrapper>
      </S.Wrapper>
      {/* <S.DeleteBox>
        <span>탈퇴하기</span>
      </S.DeleteBox> */}
    </S.Container>
  );
}
