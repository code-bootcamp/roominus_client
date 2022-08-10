import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import CommunityCommentWriteUI from "./CommunityCommentWrite.presenter";
import {
  CREATE_BOARD_REVIEW,
  FETCH_BOARD_COMMENTS,
  UPDATE_BOARD_REVIEW,
} from "./CommunityCommentWrite.queries";
import Swal from "sweetalert2";
import {
  ICommunityCommentWriteProps,
  IDataProps,
} from "./CommunityCommentWrite.types";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";

export default function CommunityCommentWrite(
  props: ICommunityCommentWriteProps
) {
  const router = useRouter();

  const [createBoardreview] = useMutation(CREATE_BOARD_REVIEW);
  const [updateBoardreview] = useMutation(UPDATE_BOARD_REVIEW);

  const [userInfo] = useRecoilState(userInfoState);

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const onClickComment = async (data: IDataProps) => {
    if (!data.content) return;

    try {
      await createBoardreview({
        variables: {
          createBoardreviewInput: {
            content: data.content,
            board: router.query.id,
            // user: userInfo.id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.id },
          },
        ],
      });
      reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "로그인을 해주세요!",
        timer: 1300,
        showConfirmButton: false,
        backdrop: false,
      });
      router.push("/login");
    }
  };

  const onClickEditComment = async (data: IDataProps) => {
    try {
      await updateBoardreview({
        variables: {
          boardReviewId: props.editId,
          updateBoardreviewInput: {
            ...data,
          },
        },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: (error as Error).message,
        backdrop: false,
      });
    }
    props.setIsEdit(false);
  };

  return (
    <CommunityCommentWriteUI
      onClickComment={onClickComment}
      onClickEditComment={onClickEditComment}
      register={register}
      handleSubmit={handleSubmit}
      userInfo={userInfo}
      isEdit={props.isEdit}
      defaultValue={props.el}
    />
  );
}
