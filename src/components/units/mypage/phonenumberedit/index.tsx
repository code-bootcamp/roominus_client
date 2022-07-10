import styled from "@emotion/styled";

const Container = styled.main`
  width: 100%;
  padding: 2em 0em 2em 0em;
`;

const Title = styled.h1``;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
`;

export default function PhoneNuberEdit() {
  return (
    <Container>
      <Wrapper>
        <Title>회원정보 수정</Title>
        <span>홍길동님</span>
        <span>아이디</span>
        <span>abcd@gamil.com</span>
        <span>연락처</span>

        <input type="tel" defaultValue={"010-1234-5678"} />
        <button> 인증번호</button>

        <input type="tel" />
        <span>03:00</span>
        <button> 인증</button>

        <button> 변경하기</button>
      </Wrapper>
    </Container>
  );
}
