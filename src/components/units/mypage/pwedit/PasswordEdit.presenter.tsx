import * as S from "../pwedit/PasswordEdit.styles";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import Link from "next/link";
import dynamic from "next/dynamic";
import { IPWeditUIProps } from "./PasswordEdit.types";

const PasswordChecklist = dynamic(() => import("react-password-checklist"), {
  ssr: false,
});

export default function PWeditUI(props: IPWeditUIProps) {
  return (
    <S.Container>
      <S.Title>비밀번호 수정</S.Title>
      <S.Form onSubmit={props.handleSubmit(props.onSubmitChangePassword)}>
        <S.PasswordBoxes>
          <S.PasswordBox>
            <S.TitleBox>
              <h2>새 비밀번호</h2>
              <p>*</p>
            </S.TitleBox>
            <S.PasswordInputBox>
              <S.PasswordInput
                onChange={(e) => {
                  props.setValue("password", e.target.value);
                  props.setPassword(e.target.value);
                  props.trigger("password");
                }}
                name="password"
                ref={props.passwordInputRef}
                type="password"
              />
              {props.openEye1 && (
                <FontAwesomeIcon
                  icon={faEye}
                  style={{
                    color: "purple",
                    fontSize: "1.5em",
                    cursor: "pointer",
                    position: "absolute",
                    top: "0em",
                    right: "2em",
                  }}
                />
              )}
              {!props.openEye1 && (
                <FontAwesomeIcon
                  onClick={props.onClickShowPassword1}
                  icon={faEyeSlash}
                  style={{
                    color: "purple",
                    fontSize: "1.5em",
                    cursor: "pointer",
                    position: "absolute",
                    top: "0em",
                    right: "2em",
                  }}
                />
              )}
            </S.PasswordInputBox>
            <S.Error>{props.formState.errors.password?.message}</S.Error>
            <S.CheckBox>
              <PasswordChecklist
                rules={["minLength", "lowercase", "number"]}
                minLength={8}
                maxLength={14}
                value={props.password}
                iconSize={10}
                messages={{
                  minLength: "최소 8자리 이상 입력해야 합니다.",
                  lowercase: "영문(소문자)을 포함해야 합니다.",
                  number: "숫자를 포함해야 합니다.",
                }}
              />
            </S.CheckBox>
          </S.PasswordBox>

          <S.PasswordBox>
            <S.TitleBox>
              <h2>비밀번호 확인</h2>
              <p>*</p>
            </S.TitleBox>
            <S.PasswordInputBox>
              <S.PasswordInput
                onChange={(e) => {
                  props.setValue("password2", e.target.value);
                  props.trigger("password2");
                }}
                name="password2"
                ref={props.password2InputRef}
                type="password"
              />
              {props.openEye2 && (
                <FontAwesomeIcon
                  icon={faEye}
                  style={{
                    color: "purple",
                    fontSize: "1.5em",
                    cursor: "pointer",
                    position: "absolute",
                    top: "0em",
                    right: "2em",
                  }}
                />
              )}
              {!props.openEye2 && (
                <FontAwesomeIcon
                  onClick={props.onClickShowPassword2}
                  icon={faEyeSlash}
                  style={{
                    color: "purple",
                    fontSize: "1.5em",
                    cursor: "pointer",
                    position: "absolute",
                    top: "0em",
                    right: "2em",
                  }}
                />
              )}
            </S.PasswordInputBox>
            <S.Error>{props.formState.errors.password2?.message}</S.Error>
          </S.PasswordBox>
        </S.PasswordBoxes>
        <S.ButtonBox>
          <Link href={"/mypage/phoneedit"}>
            <a>
              <WebBlackButton type="button" title="뒤로가기" />
            </a>
          </Link>
          <WebPurpleButton type="submit" title="수정하기" />
        </S.ButtonBox>
      </S.Form>
    </S.Container>
  );
}
