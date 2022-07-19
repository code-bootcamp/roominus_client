import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FindIdUI from "./FindId.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FETCH_USER } from "./FindId.query";
import { useApolloClient } from "@apollo/client";
import { Modal } from "antd";

const schema = yup.object({
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

  const IdFindinputRef = useRef<HTMLInputElement>(null);
  const PasswordFindinputRef = useRef<HTMLInputElement>(null);
  const client = useApolloClient();
  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
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
  const onSubmitFindId = async (data) => {
    try {
      const result = await client.query({
        query: FETCH_USER,
        variables: {
          email: data.email,
        },
      });
      Modal.success({
        content: `사용하시는 아이디: ${result.data?.fetchUser.email}`,
      });
    } catch (error) {
      Modal.error({ content: "가입하지 않은 회원입니다." });
      router.push(`/findidpassword/findid/${data.email}`);
    }
  };

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
      IdFindinputRef={IdFindinputRef}
      PasswordFindinputRef={PasswordFindinputRef}
      handleSubmit={handleSubmit}
      setValue={setValue}
      formState={formState}
    />
  );
}
