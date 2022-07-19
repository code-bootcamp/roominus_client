import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./DeleteMember.styles";
import { IDeleteMemberUIProps } from "./DeleteMember.types";

export default function DeleteMemberUI(props: IDeleteMemberUIProps) {
  return (
    <S.Container>
      <S.Title style={{ padding: "1em" }}> 회원 탈퇴</S.Title>
      <S.Form onSubmit={props.handleSubmit(props.onSubmitDeleteMember)}>
        <S.EmailInputBox>
          <S.EmailInput
            type="text"
            name="email"
            placeholder="이메일 아이디를 입력해 주세요 "
            onChange={(e) => {
              props.setValue("email", e.target.value);
              props.trigger("email");
            }}
          />
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <WebPurpleButton type="submit" title="탈퇴" />
        </S.EmailInputBox>
      </S.Form>
    </S.Container>
  );
}
