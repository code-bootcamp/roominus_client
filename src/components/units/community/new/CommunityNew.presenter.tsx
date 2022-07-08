import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./CommunityNew.styles";

export default function CommunityNewUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        {/* <S.Title>탈출인증 게시물 등록</S.Title> */}
        <S.InfoBackground>
          <S.HalfBox>
            <S.Picture src="/img/community/board.png" />
            <S.HalfRightBox>
              <S.InfoBox>
                <S.InfoTitle>
                  제목 <S.Essential>*</S.Essential>
                </S.InfoTitle>
                <S.InfoInput placeholder="제목을 입력해주세요" />
              </S.InfoBox>
              <S.InfoBox>
                <S.InfoTitle>태그</S.InfoTitle>
                <S.InfoInput placeholder="태그를 입력해주세요" />
              </S.InfoBox>
              <S.InfoBox>
                <S.InfoTitle>
                  썸네일 첨부 <S.Essential>*</S.Essential>
                </S.InfoTitle>
                <S.DropBox>DropZone</S.DropBox>
              </S.InfoBox>
            </S.HalfRightBox>
          </S.HalfBox>
          <S.InfoBox>
            <S.InfoTitle>
              내용 <S.Essential>*</S.Essential>
            </S.InfoTitle>
            <S.WebEditor>
              토스트 editor 들어가는 부분이고 토스트도 먹고 싶다
            </S.WebEditor>
          </S.InfoBox>
          <S.ButtonBox>
            <WebBlackButton
              onClick={props.onClickList}
              title="목 록"
            ></WebBlackButton>
            <WebPurpleButton onClick={props.onClickSubmit} title="등 록">
              등 록
            </WebPurpleButton>
          </S.ButtonBox>
        </S.InfoBackground>
      </S.Wrapper>
    </S.Container>
  );
}
