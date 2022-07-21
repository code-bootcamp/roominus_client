import CommentAnswerWrite from "../write/CommentAnswerWrite.container";
import * as S from "./CommentAnswerEdit.styles";

export default function CommentAnswerEditUI(props) {
  return (
    <S.Wrapper>
      {props.isAnswerEdit === false && (
        <S.CommentListBox>
          <S.Arrow src="/img/community/arrow.webp" />
          <S.ListInfoBox>
            <S.InfoTitleBox>
              <S.InfoTitle>
                <S.InfoName>손은* 님</S.InfoName>
                <S.Date>2022.07.06</S.Date>
              </S.InfoTitle>
              <S.InfoTitle>
                <S.Edit src="/img/community/comment/commentedit.webp" />
                <S.Delete src="/img/community/comment/commentdelete.webp" />
              </S.InfoTitle>
            </S.InfoTitleBox>
            <S.Contents>이건 대댓글내용이에요 언제만들죠ㅠ</S.Contents>
          </S.ListInfoBox>
        </S.CommentListBox>
      )}

      {props.isAnswerEdit === true && (
        <CommentAnswerWrite answerEditId={props.answerEditId} />
      )}
    </S.Wrapper>
  );
}
