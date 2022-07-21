import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import CommentAnswerListUI from "./CommentAnswerList.presenter";
import {
  DELETE_BOARD_SECOND_REVIEW,
  FETCH_REVIEW_COMMENTS,
} from "./CommentAnswerList.queries";

export default function CommentAnswerList(props) {
  const router = useRouter();

  const [deleteBoardsecondreview] = useMutation(DELETE_BOARD_SECOND_REVIEW);

  const { data: answerData, refetch } = useQuery(FETCH_REVIEW_COMMENTS, {
    variables: { boardreviewId: props.el.id },
  });
  console.log(answerData);

  const onClickDelete = async (event) => {
    try {
      const result = await deleteBoardsecondreview({
        variables: {
          secondReviewId: event.target.id,
        },
      });
      console.log(result);
      refetch();
      Swal.fire({
        icon: "success",
        title: "답글 삭제가 완료되었습니다!",
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: (error as Error).message,
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
