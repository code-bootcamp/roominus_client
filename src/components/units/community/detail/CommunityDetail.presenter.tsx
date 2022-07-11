import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import ShareButton from "../../../commons/buttons/sharebutton";
import CommunityList from "../comment/CommunityComment.container";
import * as S from "./CommunityDetail.styles";

export default function CommunityDetailUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Picture src="/img/community/board.png" />
        <S.PickAndShareBox>
          <S.PickBox>
            <S.PickIcon>❤️</S.PickIcon>
            <S.PickCount>52</S.PickCount>
          </S.PickBox>
          {/* <ShareButton /> */}
        </S.PickAndShareBox>

        <S.BoardTitle>유토피아 탈출 성공 보드!</S.BoardTitle>
        <S.BoardContents>
          보드판 인증게시판 내용입니다. 보드판 인증게시판 내용입니다. 보드판
          인증게시판 내용입니다. 보드판 인증게시판 내용입니다. 보드판 인증게시판
          내용입니다. 보드판 인증게시판 내용입니다. 보드판 인증게시판
          내용입니다. 보드판 인증게시판 내용입니다. 보드판 인증게시판
          내용입니다. 보드판 인증게시판 내용입니다.
        </S.BoardContents>
        <S.ButtonBox>
          <WebBlackButton
            onClick={props.onClickList}
            title="목 록"
          ></WebBlackButton>
          <WebPurpleButton title="수 정"></WebPurpleButton>
        </S.ButtonBox>
      </S.Wrapper>
      <CommunityList />
    </S.Container>
  );
}
