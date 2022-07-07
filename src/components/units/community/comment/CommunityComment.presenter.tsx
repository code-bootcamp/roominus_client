import WebSmallPurpleButton from "../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import * as S from "./CommunityComment.styles";

export default function CommunityCommentUI() {
  return (
    <S.Wrapper>
      <S.CommentWriteBox>
        <S.Name>이영* 님</S.Name>
        <S.CommentInput placeholder="댓글을 입력하세요" />
        <WebSmallPurpleButton title="등 록"></WebSmallPurpleButton>
      </S.CommentWriteBox>
      <S.CommentListBox>
        <S.NameIcon></S.NameIcon>
        <S.ListInfoBox>
          <S.InfoTitleBox>
            <S.InfoTitle>
              <S.InfoName>신하* 님</S.InfoName>
              <S.Date>2022.07.06</S.Date>
            </S.InfoTitle>
            <S.InfoTitle>
              <S.Comment>댓글</S.Comment>
              <S.Edit>수정</S.Edit>
              <S.Delete>삭제</S.Delete>
            </S.InfoTitle>
          </S.InfoTitleBox>
          <S.Contents>
            댓글내용이에요 우와 대단해~ 댓글내용이에요 우와 대단해~
          </S.Contents>
        </S.ListInfoBox>
      </S.CommentListBox>
      <S.CommentListBox>
        <S.Arrow src="/img/community/arrow.png" />
        <S.NameIcon></S.NameIcon>
        <S.ListInfoBox>
          <S.InfoTitleBox>
            <S.InfoTitle>
              <S.InfoName>손은* 님</S.InfoName>
              <S.Date>2022.07.06</S.Date>
            </S.InfoTitle>
            <S.InfoTitle>
              <S.Comment>댓글</S.Comment>
              <S.Edit>수정</S.Edit>
              <S.Delete>삭제</S.Delete>
            </S.InfoTitle>
          </S.InfoTitleBox>
          <S.Contents>
            이건 대댓글내용이에요 언제만들죠ㅠ 이건 대댓글내용이에요
          </S.Contents>
        </S.ListInfoBox>
      </S.CommentListBox>
      <S.ReCommentListBox>
        <S.Arrow src="/img/community/arrow.png" />
        <S.ListInfoBox>
          <S.InfoTitleBox>
            {/* <S.InfoTitle> */}
            <S.InfoName>김지* 님</S.InfoName>
            {/* </S.InfoTitle> */}
            <S.InfoTitle>
              <S.Delete>삭제</S.Delete>
            </S.InfoTitle>
          </S.InfoTitleBox>
          <S.ReCommentWriteBox>
            <S.CommentInput placeholder="대댓글을 입력하세요" />
            <WebSmallPurpleButton title="등 록"></WebSmallPurpleButton>
          </S.ReCommentWriteBox>
        </S.ListInfoBox>
      </S.ReCommentListBox>
    </S.Wrapper>
  );
}
