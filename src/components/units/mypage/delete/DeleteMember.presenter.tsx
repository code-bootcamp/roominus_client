import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./DeleteMember.styles";
import { IDeleteMemberUIProps } from "./DeleteMember.types";

export default function DeleteMemberUI(props: IDeleteMemberUIProps) {
  return (
    <S.Container>
      <S.Title> 회원 탈퇴</S.Title>
      <S.Form onSubmit={props.handleSubmit(props.onSubmitDeleteMember)}>
        <S.ReasonBox>
          <div>
            <h2>탈퇴 사유를 체크해주세요 (선택)</h2>
          </div>
          <S.InputBox>
            <span>서비스 탈퇴 후 재가입을 위해서</span>
            <input type="radio" name="reasons" value="1" />
          </S.InputBox>
          <S.InputBox>
            <span>서비스 및 고객지원이 만족스럽지 못해서</span>
            <input type="radio" name="reasons" value="2" />
          </S.InputBox>
          <S.InputBox>
            <span>예약 빈도가 낮아 더이상 이용할 필요가 없어서</span>
            <input type="radio" name="reasons" value="3" />
          </S.InputBox>

          <S.InputBox>
            <span>원하는 테마, 매장이 없어서 </span>
            <input type="radio" name="reasons" value="4" />
          </S.InputBox>
        </S.ReasonBox>

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
        </S.EmailInputBox>
        <S.ButtonBox>
          <WebPurpleButton type="submit" title="탈퇴" />
        </S.ButtonBox>
      </S.Form>
    </S.Container>
  );
}
