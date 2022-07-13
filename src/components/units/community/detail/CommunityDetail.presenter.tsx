import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import CommunityList from "../comment/CommunityComment.container";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import * as S from "./CommunityDetail.styles";

export default function CommunityDetailUI(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.NameDateBox>
          <S.WriterName>나는작성자</S.WriterName>
          <S.Date>3일전</S.Date>
        </S.NameDateBox>
        <S.Picture src="/img/community/board.png" />
        <S.PickAndShareBox>
          <S.PickBox>
            <S.RedHeart icon={faHeart} />
            {/* <S.PickIcon src="/img/community/redheart.png" /> */}
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
