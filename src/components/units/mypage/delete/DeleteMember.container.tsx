/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import DeleteMemberUI from "./DeleteMember.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DELETE_USER, LOG_OUT } from "./DeleteMember.query";
import Swal from "sweetalert2";
import { useMutation, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { IData } from "./DeleteMember.types";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { useRecoilState } from "recoil";

const schema = yup.object({
  email: yup.string().required("필수 입력 사항입니다."),
});

export default function DeleteMember() {
  const router = useRouter();
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const client = useApolloClient();
  const [deleteUsergql] = useMutation(DELETE_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const onSubmitDeleteMember = async (data: IData) => {
    try {
      await deleteUsergql({
        variables: {
          email: data.email,
        },
      });
      Swal.fire({
        title: "회원 탈퇴 완료",
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
      await client.mutate({
        mutation: LOG_OUT,

        context: {
          uri: "https://wawoong.shop/graphql",
          // headers: {
          //   Authorization: `Bearer ${accessToken}`,
          // },
          credentials: "include",
        },
      });
      localStorage.clear();
      setAccessToken("");
      setUserInfo({
        id: "",
        name: "",
        email: "",
        phone: "",
        point: 0,
      });
      router.push("/home");
    } catch (error) {
      Swal.fire({
        title: (error as Error).message,
        icon: "error",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    }
  };

  useEffect(() => {
    register("email", { required: true });
  }, [accessToken]);

  return (
    <DeleteMemberUI
      handleSubmit={handleSubmit}
      onSubmitDeleteMember={onSubmitDeleteMember}
      formState={formState}
      setValue={setValue}
      trigger={trigger}
    />
  );
}
