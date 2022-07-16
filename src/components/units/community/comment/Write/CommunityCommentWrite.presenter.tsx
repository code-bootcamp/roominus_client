import WebSmallPurpleButton from "../../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import * as S from "./CommunityCommentWrite.styles";

export default function CommunityCommentWriteUI(props) {
  return (
    <S.Wrapper>
      <S.CommentTitleBox>
        <S.CommentIcon src="/img/community/comment/commentIcon.png" />
        <S.CommentTitle>댓글</S.CommentTitle>
      </S.CommentTitleBox>
      <S.CommentWriteBox>
        <S.Name>이영* 님</S.Name>
        <S.CommentInput placeholder="댓글을 입력하세요" />
        <WebSmallPurpleButton
          title="등 록"
          onClick={props.onClickComment}
        ></WebSmallPurpleButton>
      </S.CommentWriteBox>
    </S.Wrapper>
  );
}
