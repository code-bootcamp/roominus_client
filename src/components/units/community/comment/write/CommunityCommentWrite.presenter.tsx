import WebSmallBlackButton from "../../../../commons/buttons/buttonDesktop/WebSmallBlackButton";
import WebSmallPurpleButton from "../../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import * as S from "./CommunityCommentWrite.styles";
import { ICommunityCommentWriteUIProps } from "./CommunityCommentWrite.types";

export default function CommunityCommentWriteUI(
  props: ICommunityCommentWriteUIProps
) {
  return (
    <S.Wrapper>
      <form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onClickEditComment)
            : props.handleSubmit(props.onClickComment)
        }
      >
        <S.CommentWriteBox>
          <S.Name>{props.userInfo?.name}</S.Name>
          <S.CommentInput
            placeholder="댓글을 입력하세요"
            {...props.register("content")}
            defaultValue={props.defaultValue?.content}
          />
          <WebSmallPurpleButton
            title={props.isEdit ? "수정하기" : "등록하기"}
          ></WebSmallPurpleButton>
          {props.isEdit && (
            <WebSmallBlackButton
              type="button"
              title="취소하기"
              onClick={props.onClickCancel}
            />
          )}
        </S.CommentWriteBox>
      </form>
    </S.Wrapper>
  );
}
