import CommunityCommentWrite from "../write/CommunityCommentWrite.container";
import * as S from "./CommunityCommentEdit.styles";

export default function CommunityCommentEditUI(props) {
  return (
    <S.Wrapper>
      {props.isEdit === false && (
        <S.CommentListBox>
          <S.ListInfoBox>
            <S.InfoTitleBox>
              <S.InfoTitle>
                <S.InfoName>신하* 님</S.InfoName>
                <S.Date>2022.07.06</S.Date>
              </S.InfoTitle>
              <S.InfoTitle>
                <S.Comment src="/img/community/comment/recomment.webp" />
                <S.Edit
                  src="/img/community/comment/commentedit.webp"
                  onClick={props.onClickEdit}
                />
                <S.Delete src="/img/community/comment/commentdelete.webp" />
              </S.InfoTitle>
            </S.InfoTitleBox>
            <S.Contents>댓글내용이에요 우와 대단해~</S.Contents>
          </S.ListInfoBox>
        </S.CommentListBox>
      )}

      {props.isEdit === true && <CommunityCommentWrite />}
    </S.Wrapper>
  );
}
