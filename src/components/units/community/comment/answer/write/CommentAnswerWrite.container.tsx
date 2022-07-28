import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import Swal from "sweetalert2";
import { userInfoState } from "../../../../../../commons/store";
import CommentAnswerWriteUI from "./CommentAnswerWrite.presenter";
import {
  CREATE_BOARD_SECOND_REVIEW,
  FETCH_REVIEW_COMMENTS,
  UPDATE_BOARD_SECOND_REVIEW,
} from "./CommentAnswerWrite.queries";
import {
  ICommentAnswerWriteProps,
  IDataProps,
} from "./CommentAnswerWrite.types";

export default function CommentAnswerWrite(props: ICommentAnswerWriteProps) {
  const [userInfo] = useRecoilState(userInfoState);

  const [createBoardsecondreview] = useMutation(CREATE_BOARD_SECOND_REVIEW);
  const [udpateBoardsecondreview] = useMutation(UPDATE_BOARD_SECOND_REVIEW);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onClickReComment = async (data: IDataProps) => {
    if (!data.content) return;

    try {
      await createBoardsecondreview({
        variables: {
          boardReviewId: props.answerId,
          createBoardsecondreviewInput: {
            ...data,
          },
        },
        refetchQueries: [
          {
            query: FETCH_REVIEW_COMMENTS,
            variables: {
              boardreviewId: props.answerId,
            },
          },
        ],
      });
      Swal.fire({
        icon: "success",
        title: "답글이 등록되었습니다!",
        timer: 1300,
        showConfirmButton: false,
        backdrop: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: (error as Error).message,
        backdrop: false,
      });
    }
    props.setIsAnswer((prev: any) => !prev);
  };

  const onClickReCommentUpdate = async (data: IDataProps) => {
    try {
      await udpateBoardsecondreview({
        variables: {
          secondReviewId: props.answerEditId,
          updateBoardSecondReviewInput: {
            ...data,
          },
        },
      });
      props.refetch();
      props.setIsAnswerEdit((prev: any) => !prev);
      Swal.fire({
        icon: "success",
        title: "답글 수정이 완료되었습니다!",
        timer: 1300,
        showConfirmButton: false,
        backdrop: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        backdrop: false,
        title: (error as Error).message,
      });
    }
  };

  const onClickCancel = () => {
    props.setIsAnswerEdit(false);
  };

  const onClickAnswerCancel = () => {
    props.setIsAnswer(false);
  };

  return (
    <CommentAnswerWriteUI
      userInfo={userInfo}
      onClickCancel={onClickCancel}
      register={register}
      handleSubmit={handleSubmit}
      onClickReComment={onClickReComment}
      onClickReCommentUpdate={onClickReCommentUpdate}
      isAnswerEdit={props.isAnswerEdit}
      answerData={props.answerData}
      isAnswer={props.isAnswer}
      onClickAnswerCancel={onClickAnswerCancel}
    />
  );
}
