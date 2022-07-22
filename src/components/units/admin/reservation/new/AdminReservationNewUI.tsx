import { ChangeEvent } from "react";
import WebPurpleLoginButton from "../../../../commons/buttons/buttonDesktop/WebPurpleLoginButton";
import WebLongestHighlightUnderlineInput from "../../../../commons/inputs/inputDesktop/WebLongestHighlightUnderlineInput";
import { IAdminReservationNewUIProps } from "./AdminReservation.types";
import * as S from "./AdminReservationNewStyle";

export default function AdminReservationNewUI(
  props: IAdminReservationNewUIProps
) {
  return (
    <S.Wrapper>
      <S.Form onSubmit={props.handleSubmit(props.onClickSubmit)}>
        <S.Title>예약 리스트 등록페이지</S.Title>
        <S.InputsTitle>테마 아이디</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          register={props.register("id")}
          placeholder="테마 id를 입력하세요"
          onChange={function (event: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          value={""}
          defaultValue={""}
        />
        <S.InputsTitle>운영 매장</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          register={props.register("cafeName")}
          onChange={function (event: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          value={""}
          defaultValue={""}
        />
        <S.InputsTitle>운영 날짜</S.InputsTitle>

        <WebLongestHighlightUnderlineInput
          type="date"
          register={props.register("date")}
          onChange={function (event: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />

        <S.InputsTitle>운영 타임</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          register={props.register("time")}
          onChange={function (event: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />

        <S.InputsTitle>인원</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="number"
          register={props.register("people")}
          onChange={function (event: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />

        <S.InputsTitle>금액</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="number"
          register={props.register("price")}
          onChange={function (event: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />

        <WebPurpleLoginButton type="submit" title="등록하기" />
      </S.Form>
    </S.Wrapper>
  );
}
