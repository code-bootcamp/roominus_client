import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
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
          <div>
            <S.WriterName>{props.data?.fetchBoard.user?.name}</S.WriterName>
            <S.Date>{getDateBefore(props.data?.fetchBoard.createdAt)}</S.Date>
          </div>
          {props.data?.fetchBoard.user?.name !== props.userInfo?.name ? (
            ""
          ) : (
            <S.EditDeleteBox>
              <div onClick={props.onClickEdit}>수정</div>
              <div onClick={props.onClickDelete}>삭제</div>
            </S.EditDeleteBox>
          )}
        </S.NameDateBox>
        <S.ImageBox
          src={props.data?.fetchBoard.mainImg}
          onError={props.handleImgError}
        />
        <S.PickAndShareBox>
          <S.PickBox>
            {props.like ? (
              <S.RedHeart icon={faHeart} onClick={props.onClickLike} />
            ) : (
              <S.GrayHeart icon={faHeart} onClick={props.onClickLike} />
            )}
            <S.PickCount>{props.data?.fetchBoard.like}</S.PickCount>
          </S.PickBox>
          <ShareButton />
        </S.PickAndShareBox>

        <S.BoardTitle>{props.data?.fetchBoard.title}</S.BoardTitle>
        <S.Tag>
          {props.data?.fetchBoard.boardTags.map((el: IBoardTagsProps) => (
            <S.Tags key={el.id}># {el.title}</S.Tags>
          ))}
        </S.Tag>
        <S.BoardContents>
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
            type={"button"}
            value={undefined}
          ></WebBlackButton>

          {props.data?.fetchBoard.user?.name !== props.userInfo?.name ? (
            ""
          ) : (
            <S.UserButtonBox>
              <WebPurpleButton
                title="수정하기"
                onClick={props.onClickEdit}
                type={undefined}
                value={""}
              ></WebPurpleButton>
              <WebPurpleButton
                onClick={props.onClickDelete}
                title="삭제하기"
                type={undefined}
                value={""}
              ></WebPurpleButton>
            </S.UserButtonBox>
          )}
        </S.ButtonBox>
      </S.Wrapper>
      <S.Comment>
        <S.CommentTitleBox>
          <S.CommentIcon src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990935/public/community/comment/commentIcon_nvspt4.webp" />
          <S.CommentTitle>댓글</S.CommentTitle>
        </S.CommentTitleBox>
        <CommunityCommentWrite
          // 타입용
          el={undefined}
          isEdit={false}
          editId={undefined}
          setIsEdit={undefined}
        />
        <CommunityCommentList />
      </S.Comment>
    </S.Container>
  );
}
