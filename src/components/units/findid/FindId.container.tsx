/* eslint-disable no-useless-escape */
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import FindIdUI from "./FindId.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FETCH_USER } from "./FindId.query";
import { useApolloClient } from "@apollo/client";
import Swal from "sweetalert2";

const schema = yup.object({
  phoneNumber: yup.string().required("필수 입력 사항입니다."),
});

export default function FindId() {
  const [isClickedfirst, setIsClickedfirst] = useState(true);
  const [isClickedsecond, setIsClickedsecond] = useState(false);

  const IdFindinputRef = useRef<HTMLInputElement>(null);
  const PasswordFindinputRef = useRef<HTMLInputElement>(null);
  const client = useApolloClient();
  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  useEffect(() => {
    register("phoneNumber", { required: true });
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
  const onSubmitFindId = async (data: { phoneNumber: any }) => {
    await client
      .query({
        query: FETCH_USER,
        variables: {
          phone: data.phoneNumber,
        },
      })
      .then((result) => {
        Swal.fire({
          title: `가입하신 아이디는 ${result.data.fetchUser.email}입니다`,
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
          backdrop: false,
        });
      })
      .catch(() => {
        Swal.fire({
          title: "조회하신 번호로 가입된 정보가 없습니다.",
          width: 700,
          icon: "error",
          showConfirmButton: false,
          timer: 1000,
          backdrop: false,
        });
      });
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
