import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import CommunityList from "../comment/CommunityComment.container";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import * as S from "./CommunityDetail.styles";
import { getDateBefore } from "../../../commons/getDate";
import Dompurify from "dompurify";
import CommunityCommentWrite from "../comment/Write/CommunityCommentWrite.container";
import CommunityCommentList from "../comment/List/CommunityCommentList.container";
import { ICommunityDetailProps } from "./CommunityDetail.types";

export default function CommunityDetailUI(props: ICommunityDetailProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.NameDateBox>
          <S.WriterName>작성자</S.WriterName>
          <S.Date>{getDateBefore(props.data?.fetchBoard.createdAt)}</S.Date>
        </S.NameDateBox>
        <S.ImageBox src={props.data?.fetchBoard.mainImg} />
        <S.PickAndShareBox>
          <S.PickBox>
            <S.RedHeart icon={faHeart} />
            {/* <S.PickIcon src="/img/community/redheart.png" /> */}
            <S.PickCount>52</S.PickCount>
          </S.PickBox>
          {/* <ShareButton /> */}
        </S.PickAndShareBox>

        <S.BoardTitle>{props.data?.fetchBoard.title}</S.BoardTitle>
        <S.BoardContents>
          {/* {props.data?.fetchBoard.content} */}
          {typeof window !== "undefined" ? (
            <div
              style={{}}
              dangerouslySetInnerHTML={{
                __html: Dompurify.sanitize(props.data?.fetchBoard.content),
              }}
            ></div>
          ) : (
            <div style={{}}></div>
          )}
        </S.BoardContents>
        <S.ButtonBox>
          <WebBlackButton
            onClick={props.onClickList}
            title="목록으로"
          ></WebBlackButton>
          <WebPurpleButton title="수정하기"></WebPurpleButton>
          <WebPurpleButton
            onClick={props.onClickDelete}
            title="삭제하기"
          ></WebPurpleButton>
        </S.ButtonBox>
      </S.Wrapper>
      <S.Comment>
        <CommunityCommentWrite />
        <CommunityCommentList />
        <CommunityList />
      </S.Comment>
    </S.Container>
  );
}
