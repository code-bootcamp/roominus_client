import WebSmallBlackButton from "../../../../../commons/buttons/buttonDesktop/WebSmallBlackButton";
import WebSmallPurpleButton from "../../../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import * as S from "./CommentAnswerWrite.styles";

export default function CommentAnswerWriteUI(props) {
  return (
    <S.Wrapper>
      <form
        onSubmit={
          props.isAnswerEdit
            ? props.handleSubmit(props.onClickReCommentUpdate)
            : props.handleSubmit(props.onClickReComment)
        }
      >
        <S.ReCommentListBox>
          <S.Arrow src="/img/community/arrow.webp" />
          <S.ListInfoBox>
            <S.InfoTitleBox>
              <S.InfoName>{props.userInfo?.name}</S.InfoName>
            </S.InfoTitleBox>
            <S.ReCommentWriteBox>
              <S.ReCommentInput
                placeholder="답글을 입력하세요"
                {...props.register("content")}
              />
              <WebSmallPurpleButton title="등록하기" />
              {props.isAnswer && (
                <WebSmallBlackButton
                  title="취소하기"
                  type="button"
                  onClick={props.onClickCancel}
                />
              )}
            </S.ReCommentWriteBox>
          </S.ListInfoBox>
        </S.ReCommentListBox>
      </form>
    </S.Wrapper>
  );
}