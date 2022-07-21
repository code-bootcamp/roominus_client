import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import Swal from "sweetalert2";
import { userInfoState } from "../../../../../../commons/store";
import CommentAnswerWriteUI from "./CommentAnswerWrite.presenter";
import {
  CREATE_BOARD_SECOND_REVIEW,
  FETCH_BOARD_REVIEW_COMMENTS,
} from "./CommentAnswerWrite.queries";

export default function CommentAnswerWrite(props) {
  const [userInfo] = useRecoilState(userInfoState);

  const [createBoardsecondreview] = useMutation(CREATE_BOARD_SECOND_REVIEW);

  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onClickReComment = async (data) => {
    try {
      const result = await createBoardsecondreview({
        variables: {
          boardReviewId: props.answerId,
          createBoardsecondreviewInput: {
            ...data,
          },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_REVIEW_COMMENTS,
            variables: {
              boardreviewId: props.answerId,
            },
          },
        ],
      });
      console.log(result);
      Swal.fire({
        icon: "success",
        title: "답글이 등록되었습니다!",
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: (error as Error).message,
      });
    }
    props.setIsAnswer(false);
  };

  const onClickCancel = () => {
    props.setIsAnswer(false);
  };

  return (
    <CommentAnswerWriteUI
      userInfo={userInfo}
      isAnswer={props.isAnswer}
      onClickCancel={onClickCancel}
      register={register}
      handleSubmit={handleSubmit}
      onClickReComment={onClickReComment}
    />
  );
}
