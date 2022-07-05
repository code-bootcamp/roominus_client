import { Modal } from "antd";
import * as S from "./MyPageInfo.styles";

export default function MyPageInfoUI(props: any) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>개인정보 </S.Title>
        <S.Label>이름 : 홍길동</S.Label>
        <S.Label>이메일 : abcd1234@gmail.com</S.Label>
        <S.Label>휴대폰 번호 : 010 - 1234 - 5678</S.Label>
        <button>인증</button>
        <input type="text" placeholder="번호를 입력하세요"></input>
        <span>03:00</span>
        <S.Button onClick={props.showModal}>변경하기</S.Button>
      </S.Wrapper>

      <Modal
        visible={props.isModalVisible}
        onOk={props.onClickPasswordReset}
        onCancel={props.handleCancel}
      >
        <S.ModalWrapper>
          <S.ModalTitle>비밀번호 변경</S.ModalTitle>
          <form>
            <S.InputWrapper>
              <S.InputLabel>현재비밀번호</S.InputLabel>
              <input type="password" placeholder={"비밀번호를 입력해주세요"} />
              <S.Error> </S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputLabel>새 비밀번호</S.InputLabel>
              <input type="password" placeholder={"비밀번호를 입력해주세요"} />
              <S.Error></S.Error>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.InputLabel>새 비밀번호 확인</S.InputLabel>
              <input type="password" placeholder={"비밀번호를 입력해주세요"} />
              <S.Error></S.Error>
            </S.InputWrapper>
            <S.ButtonWrapper>
              <button></button>
            </S.ButtonWrapper>
          </form>
        </S.ModalWrapper>
      </Modal>
    </S.Container>
  );
}
