import CommunityCommentWrite from "../write/CommunityCommentWrite.container";
import * as S from "./CommunityCommentEdit.styles";
import { getDate } from "../../../../../components/commons/getDate";
import { ICommunityCommentEditUIProps } from "./CommunityCommentEdit.types";

export default function CommunityCommentEditUI(
  props: ICommunityCommentEditUIProps
) {
  return (
    <S.Wrapper>
      {props.isEdit === false && (
        <S.CommentListBox>
          <S.ListInfoBox>
            <S.InfoTitleBox>
              <S.InfoTitle>
                <S.InfoName>신하* 님</S.InfoName>
                <S.Date>{getDate(props.el.createdAt)}</S.Date>
              </S.InfoTitle>
              <S.InfoTitle>
                <S.Comment src="/img/community/comment/recomment.webp" />
                <S.Edit
                  src="/img/community/comment/commentedit.webp"
                  onClick={props.onClickEdit}
                />
                <S.Delete
                  src="/img/community/comment/commentdelete.webp"
                  onClick={props.onClickDelete}
                  id={props.el.id}
                />
              </S.InfoTitle>
            </S.InfoTitleBox>
            <S.Contents>{props.el.content}</S.Contents>
          </S.ListInfoBox>
        </S.CommentListBox>
      )}

      {props.isEdit === true && <CommunityCommentWrite />}
    </S.Wrapper>
  );
}
