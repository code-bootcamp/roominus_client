import WebSmallPurpleButton from "../../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import * as S from "./CommunityCommentWrite.styles";

export default function CommunityCommentWriteUI(props) {
  return (
    <S.Wrapper>
      <S.CommentTitleBox>
        <S.CommentIcon src="/img/community/comment/commentIcon.webp" />
        <S.CommentTitle>댓글</S.CommentTitle>
      </S.CommentTitleBox>
      <form onSubmit={props.handleSubmit(props.onClickComment)}>
        <S.CommentWriteBox>
          <S.Name>이영* 님</S.Name>
          <S.CommentInput
            placeholder="댓글을 입력하세요"
            {...props.register("content")}
          />
          <WebSmallPurpleButton title="등록하기"></WebSmallPurpleButton>
        </S.CommentWriteBox>
      </form>
    </S.Wrapper>
  );
}
