import { useMutation, useQuery } from "@apollo/client";
import Swal from "sweetalert2";
import CommentAnswerListUI from "./CommentAnswerList.presenter";
import {
  DELETE_BOARD_SECOND_REVIEW,
  FETCH_REVIEW_COMMENTS,
} from "./CommentAnswerList.queries";
import { ICommentAnswerListProps } from "./CommentAnswerList.types";

export default function CommentAnswerList(props: ICommentAnswerListProps) {
  const [deleteBoardsecondreview] = useMutation(DELETE_BOARD_SECOND_REVIEW);

  const { data: answerData, refetch } = useQuery(FETCH_REVIEW_COMMENTS, {
    variables: { boardreviewId: props.el.id },
  });

  const onClickDelete = async (event: any) => {
    try {
      await deleteBoardsecondreview({
        variables: {
          secondReviewId: event.target.id,
        },
      });
      refetch();
      Swal.fire({
        icon: "success",
        title: "답글이 삭제되었습니다!",
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
  };

  return (
    <CommentAnswerListUI
      answerData={answerData}
      refetch={refetch}
      onClickDelete={onClickDelete}
    />
  );
}
