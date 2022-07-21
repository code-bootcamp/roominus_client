import CommentAnswerEdit from "../edit/CommentAnswerEdit.container";
import * as S from "./CommentAnswerList.styles";

export default function CommentAnswerListUI(props) {
  return (
    <S.Wrapper>
      {props.answerData?.fetchReviewComments.boardsecondreview.map((el) => (
        <S.Wrap key={el.id}>
          <CommentAnswerEdit
            refetch={props.refetch}
            key={el.id}
            onClickDelete={props.onClickDelete}
            el={el}
            answerData={props.answerData}
          />
        </S.Wrap>
      ))}
    </S.Wrapper>
  );
}
