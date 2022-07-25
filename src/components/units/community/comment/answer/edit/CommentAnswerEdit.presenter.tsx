import CommentAnswerWrite from "../write/CommentAnswerWrite.container";
import * as S from "./CommentAnswerEdit.styles";
import { getDate } from "../../../../../../components/commons/getDate";
import { ICommentAnswerEditUIProps } from "./CommentAnswerEdit.types";

export default function CommentAnswerEditUI(props: ICommentAnswerEditUIProps) {
  return (
    <S.Wrapper>
      {props.isAnswerEdit === false && (
        <S.CommentListBox>
          <S.Arrow src="/img/community/arrow.webp" />
          <S.ListInfoBox>
            <S.InfoTitleBox>
              <S.InfoTitle>
                <S.InfoName>{props.el.user?.name}</S.InfoName>
                <S.Date>{getDate(props.el.createdAt)}</S.Date>
              </S.InfoTitle>
              <S.InfoTitle>
                {props.el.user?.name !== props.userInfo.name ? (
                  ""
                ) : (
                  <div>
                    <S.Edit
                      src="/img/community/comment/commentedit.webp"
                      onClick={props.onClickEdit}
                      id={props.el.id}
                    />
                    <S.Delete
                      src="/img/community/comment/commentdelete.webp"
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
      )}

      {props.isAnswerEdit === true && (
        <CommentAnswerWrite
          answerEditId={props.answerEditId}
          refetch={props.refetch}
          isAnswerEdit={props.isAnswerEdit}
          setIsAnswerEdit={props.setIsAnswerEdit}
          answerData={props.el}
          // 타입 지정 때문에 작성
          isAnswer={undefined}
          answerId={""}
          setIsAnswer={undefined}
          el={undefined}
          onClickReComment={function (event: any): void {
            throw new Error("Function not implemented.");
          }}
        />
      )}
    </S.Wrapper>
  );
}
