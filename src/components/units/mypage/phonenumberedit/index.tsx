import styled from "@emotion/styled";
import WebHighlightUndelineInput from "../../../commons/inputs/inputDesktop/WebHighlightUndelineInput";

export default function PhoneNumberEdit() {
  const Label = styled.label``;

  const NumberBox = styled.div``;

  return (
    <>
      <form>
        <Label>휴대폰 번호 변경</Label>
        <NumberBox>
          <WebHighlightUndelineInput
            type="tel"
            name="userPhoneNumber"
            placeholder="변경할 번호를 입력해주세요"
          />
          <button>인증번호 보내기</button>

          <WebHighlightUndelineInput
            type="tel"
            name="userPhoneNumber"
            placeholder="인증 번호를 입력해주세요"
          />
          <span>3:00</span>
          <button>인증하기</button>
        </NumberBox>
      </form>
    </>
  );
}
