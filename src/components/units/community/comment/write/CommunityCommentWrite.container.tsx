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
import { IDataProps } from "./CommunityCommentWrite.types";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../../commons/store";

export default function CommunityCommentWrite(props) {
  const router = useRouter();

  const [createBoardreview] = useMutation(CREATE_BOARD_REVIEW);
  const [updateBoardreview] = useMutation(UPDATE_BOARD_REVIEW);

  const [userInfo] = useRecoilState(userInfoState);

  const { register, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const onClickComment = async (data: IDataProps) => {
    try {
      const result = await createBoardreview({
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
      console.log(result);
      Swal.fire({
        icon: "success",
        title: "댓글 등록이 완료되었습니다!",
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: (error as Error).message,
      });
    }
  };

  const onClickEditComment = async (data: IDataProps) => {
    try {
      const result = await updateBoardreview({
        variables: {
          boardReviewId: props.editId,
          updateBoardreviewInput: {
            ...data,
          },
        },
      });
      console.log(result);
      Swal.fire({
        icon: "success",
        title: "댓글 수정이 완료되었습니다!",
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: (error as Error).message,
      });
    }
    props.setIsEdit(false);
  };

  const onClickCancel = () => {
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
      onClickCancel={onClickCancel}
    />
  );
}
