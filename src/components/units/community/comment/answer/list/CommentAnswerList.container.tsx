import { useQuery } from "@apollo/client";
import CommentAnswerListUI from "./CommentAnswerList.presenter";
import { FETCH_BOARD_REVIEW_COMMENTS } from "./CommentAnswerList.queries";

export default function CommentAnswerList(props) {
  const { data: answerData, refetch } = useQuery(FETCH_BOARD_REVIEW_COMMENTS, {
    variables: { boardreviewId: props.el.id },
  });
  console.log(answerData);

  return <CommentAnswerListUI answerData={answerData} refetch={refetch} />;
}
