import CommentAnswerEdit from "../edit/CommentAnswerEdit.container";
import {
  IBoardsecondreviewEl,
  ICommentAnswerListUIProps,
} from "./CommentAnswerList.types";

export default function CommentAnswerListUI(props: ICommentAnswerListUIProps) {
  return (
    <div>
      {props.answerData?.fetchReviewComments.boardsecondreview?.map(
        (el: IBoardsecondreviewEl) => (
          <div key={el.id}>
            <CommentAnswerEdit
              refetch={props.refetch}
              key={el.id}
              onClickDelete={props.onClickDelete}
              el={el}
              answerData={props.answerData}
            />
          </div>
        )
      )}
    </div>
  );
}
