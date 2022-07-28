import CommunityCommentWrite from "../write/CommunityCommentWrite.container";
import * as S from "./CommunityCommentEdit.styles";
import { getDate } from "../../../../../components/commons/getDate";
import { ICommunityCommentEditUIProps } from "./CommunityCommentEdit.types";
import CommentAnswerWrite from "../answer/write/CommentAnswerWrite.container";
import CommentAnswerList from "../answer/list/CommentAnswerList.container";

export default function CommunityCommentEditUI(
  props: ICommunityCommentEditUIProps
) {
  return (
    <S.Wrapper>
      {props.isEdit === false && (
        <div>
          <S.CommentListBox>
            <S.ListInfoBox>
              <S.InfoTitleBox>
                <S.InfoTitle>
                  <S.InfoName>{props.el.user?.name}</S.InfoName>
                  <S.Date>{getDate(props.el.createdAt)}</S.Date>
                </S.InfoTitle>
                <S.InfoTitle>
                  <S.Comment
                    src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990935/public/community/comment/recomment_ohb13o.webp"
                    onClick={props.onClickReComment}
                    id={props.el.id}
                  />
                  {props.el.user?.name !== props.userInfo?.name ? (
                    ""
                  ) : (
                    <div>
                      <S.Edit
                        src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990935/public/community/comment/commentedit_iaravb.webp"
                        onClick={props.onClickEdit}
                        id={props.el.id}
                      />
                      <S.Delete
                        src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990935/public/community/comment/commentdelete_bjl3eo.webp"
                        onClick={props.onClickDelete}
                        id={props.el.id}
                      />
                    </div>
                  )}
                </S.InfoTitle>
              </S.InfoTitleBox>
              <S.Contents>{props.el.content}</S.Contents>
            </S.ListInfoBox>
          </S.CommentListBox>
          <CommentAnswerList el={props.el} />
        </div>
      )}

      {props.isEdit === true && (
        <CommunityCommentWrite
          isEdit={props.isEdit}
          el={props.el}
          editId={props.editId}
          setIsEdit={props.setIsEdit}
        />
      )}

      {props.isAnswer === true && (
        <CommentAnswerWrite
          isAnswer={props.isAnswer}
          el={props.el}
          answerId={props.answerId}
          setIsAnswer={props.setIsAnswer}
          onClickReComment={props.onClickReComment}
          // 타입용
          answerData={undefined}
          isAnswerEdit={undefined}
          answerEditId={""}
          refetch={undefined}
          setIsAnswerEdit={undefined}
        />
      )}
    </S.Wrapper>
  );
}
