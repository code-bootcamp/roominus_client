/* eslint-disable no-useless-escape */
import FindPasswordUI from "./FindPassword.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { IFindPasswordProps } from "./FindPassword.types";
import { FETCH_FIND_PASSWORD } from "./FindPassword.query";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

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

export default function FindPassword(props: IFindPasswordProps) {
  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const client = useApolloClient();
  const router = useRouter();
  useEffect(() => {
    register("email", { required: true });
    register("phoneNumber", { required: true });
  }, []);
  const onSubmitVerificationEmail = async (data: {
    email: any;
    phoneNumber: any;
  }) => {
    try {
      const result = await client.query({
        query: FETCH_FIND_PASSWORD,
        variables: {
          email: data.email,
          phone: data.phoneNumber,
        },
      });
      router.push(
        `/findidpassword/findpassword/${result.data.fetchFindPassword.id}`
      );
    } catch (error) {
      Swal.fire({
        title: "이메일 또는 핸드폰 번호가 올바르지 않습니다.",
        width: 700,
        icon: "error",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    }
  };
  return (
    <FindPasswordUI
      onClickShowContentsFirst={props.onClickShowContentsFirst}
      onClickShowContentsSecond={props.onClickShowContentsSecond}
      isClickedsecond={props.isClickedsecond}
      isClickedfirst={props.isClickedfirst}
      onSubmitVerificationEmail={onSubmitVerificationEmail}
      PasswordFindinputRef={props.PasswordFindinputRef}
      handleSubmit={handleSubmit}
      setValue={setValue}
      formState={formState}
    />
  );
}
