import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import CommunityList from "../comment/CommunityComment.container";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import * as S from "./CommunityDetail.styles";
import Dompurify from "dompurify";
import CommunityCommentWrite from "../comment/write/CommunityCommentWrite.container";
import CommunityCommentList from "../comment/list/CommunityCommentList.container";
import {
  IBoardTagsProps,
  ICommunityDetailProps,
} from "./CommunityDetail.types";
import ShareButton from "../../../commons/buttons/sharebutton";
import { getDateBefore } from "../../../commons/getDate";

export default function CommunityDetailUI(props: ICommunityDetailProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.NameDateBox>
          <S.WriterName>{props.data?.fetchBoard.user?.name}</S.WriterName>
          <S.Date>{getDateBefore(props.data?.fetchBoard.createdAt)}</S.Date>
        </S.NameDateBox>
        <S.ImageBox src={props.data?.fetchBoard.mainImg} />
        <S.PickAndShareBox>
          <S.PickBox>
            <S.RedHeart icon={faHeart} />
            <S.PickCount>52</S.PickCount>
          </S.PickBox>
          {/* <ShareButton /> */}
        </S.PickAndShareBox>

        <S.BoardTitle>{props.data?.fetchBoard.title}</S.BoardTitle>
        <S.Tag>
          {props.data?.fetchBoard.boardTags.map((el: IBoardTagsProps) => (
            <S.Tags key={el.id}># {el.title}</S.Tags>
          ))}
        </S.Tag>
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
          <WebPurpleButton
            title="수정하기"
            onClick={props.onClickEdit}
          ></WebPurpleButton>
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
