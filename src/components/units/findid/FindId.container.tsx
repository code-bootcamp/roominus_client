import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FindIdUI from "./FindId.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup.string().required("필수 입력 사항입니다."),
  email: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 아이디를 @까지 정확하게 입력해주세요."
    )
    .required("이메일 아이디를 @까지 정확하게 입력해주세요."),
});

export default function FindId() {
  const [isClickedfirst, setIsClickedfirst] = useState(true);
  const [isClickedsecond, setIsClickedsecond] = useState(false);

  const router = useRouter();

  const IdFindinputRef = useRef();
  const PasswordFindinputRef = useRef();

  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    register("name", { required: true });
    register("email", { required: true });
  }, []);

  const onClickShowContentsFirst = () => {
    setIsClickedfirst(true);
    setIsClickedsecond(false);
    setTimeout(() => {
      IdFindinputRef.current?.focus();
    }, 100);
  };

  const onClickShowContentsSecond = () => {
    setIsClickedsecond(true);
    setIsClickedfirst(false);
    setTimeout(() => {
      PasswordFindinputRef.current?.focus();
    }, 100);
  };
  const onSubmitFindId = () => {};
  const onSubmitVerificationEmail = () => {};
  useEffect(() => {
    IdFindinputRef.current?.focus();
  }, []);
  return (
    <FindIdUI
      onClickShowContentsFirst={onClickShowContentsFirst}
      isClickedfirst={isClickedfirst}
      onClickShowContentsSecond={onClickShowContentsSecond}
      isClickedsecond={isClickedsecond}
      onSubmitFindId={onSubmitFindId}
      onSubmitVerificationEmail={onSubmitVerificationEmail}
      IdFindinputRef={IdFindinputRef}
      PasswordFindinputRef={PasswordFindinputRef}
      handleSubmit={handleSubmit}
      setValue={setValue}
      formState={formState}
    />
  );
}
