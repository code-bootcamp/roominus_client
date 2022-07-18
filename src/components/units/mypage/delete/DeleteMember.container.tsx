import { useEffect } from "react";
import DeleteMemberUI from "./DeleteMember.presenter";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DELETE_USER } from "./DeleteMember.query";
import Swal from "sweetalert2";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const schema = yup.object({
  email: yup.string().required("필수 입력 사항입니다."),
});

export default function DeleteMember() {
  const router = useRouter();
  const { register, handleSubmit, formState, setValue, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [deleteUsergql] = useMutation(DELETE_USER);
  const onSubmitDeletMember = async (data) => {
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
      router.push("/home");
    } catch (error) {
      Swal.fire({
        title: error.message,
        icon: "error",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    }
  };

  useEffect(() => {
    register("email", { required: true });
  }, []);

  return (
    <DeleteMemberUI
      handleSubmit={handleSubmit}
      onSubmitDeletMember={onSubmitDeletMember}
      formState={formState}
      setValue={setValue}
      trigger={trigger}
    />
  );
}
