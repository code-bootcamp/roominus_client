import WebPurpleLoginButton from "../../../../commons/buttons/buttonDesktop/WebPurpleLoginButton";
import WebLongestHighlightUnderlineInput from "../../../../commons/inputs/inputDesktop/WebLongestHighlightUnderlineInput";
import * as S from "./AdminReservationNewStyle";

export default function AdminReservationNewUI(props) {
  return (
    <S.Wrapper>
      <S.Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.Title>예약 리스트 등록페이지</S.Title>
        <S.InputsTitle>테마 아이디</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          register={props.register("id")}
          placeholder="테마 id를 입력하세요"
        />
        <S.InputsTitle>운영 매장</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          register={props.register("cafeName")}
        />
        <S.InputsTitle>운영 날짜</S.InputsTitle>

        <select register={props.register("people")}>
          <option value="" disabled selected>
            인원을 선택해주세요
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <WebLongestHighlightUnderlineInput
          type="date"
          register={props.register("date")}
        />

        <S.InputsTitle>운영 타임</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          register={props.register("time")}
        />

        <S.InputsTitle>인원</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="number"
          register={props.register("people")}
        />

        <S.InputsTitle>금액</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="number"
          register={props.register("price")}
        />

        <WebPurpleLoginButton type="submit" title="등록하기" />
      </S.Form>
    </S.Wrapper>
  );
}
