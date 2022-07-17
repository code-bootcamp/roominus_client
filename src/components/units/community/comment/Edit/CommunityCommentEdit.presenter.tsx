import CommunityCommentWrite from "../Write/CommunityCommentWrite.container";
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
                <S.Comment src="/img/community/comment/recomment.png" />
                <S.Edit
                  src="/img/community/comment/commentedit.png"
                  onClick={props.onClickEdit}
                />
                <S.Delete src="/img/community/comment/commentdelete.png" />
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
