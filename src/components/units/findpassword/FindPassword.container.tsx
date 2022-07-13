import FindPasswordUI from "./FindPassword.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 아이디를 @까지 정확하게 입력해주세요."
    )
    .required("이메일 아이디를 @까지 정확하게 입력해주세요."),
  phoneNumber: yup.string().required("필수 입력 사항입니다."),
});

export default function FindPassword(props) {
  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    register("email", { required: true });
    register("phoneNumber", { required: true });
  }, []);

  return (
    <FindPasswordUI
      onClickShowContentsFirst={props.onClickShowContentsFirst}
      onClickShowContentsSecond={props.onClickShowContentsSecond}
      isClickedsecond={props.isClickedsecond}
      isClickedfirst={props.isClickedfirst}
      onSubmitVerificationEmail={props.onSubmitVerificationEmail}
      PasswordFindinputRef={props.PasswordFindinputRef}
      handleSubmit={handleSubmit}
      setValue={setValue}
      formState={formState}
    />
  );
}
