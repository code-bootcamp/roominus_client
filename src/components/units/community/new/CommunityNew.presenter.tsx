import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./CommunityNew.styles";
import dynamic from "next/dynamic";
import Tag from "../../../commons/tag/Tag";
import { MyDropzone } from "../../../commons/dropzone/DropZone";
import { ICommunityNewUIProps } from "./CommunityNew.types";

const ToastEditor = dynamic(() => import("../../../commons/toast/Toast"), {
  ssr: false,
});

export default function CommunityNewUI(props: ICommunityNewUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          {props.isEdit ? "자유게시글 수정" : "자유게시글 작성"}
        </S.Title>
        <form
          onSubmit={() => {
            "return false";
          }}
        >
          <S.HalfBox>
            <S.Picture
              src={
                props?.imageUrl
                  ? props?.imageUrl
                  : "https://res.cloudinary.com/dop5piuwp/image/upload/v1658992364/public/community/preview_oflemg.png"
              }
            />
            <S.HalfRightBox>
              <div>
                <S.InfoBox>
                  <S.InfoTitle>
                    제목 <S.Essential>*</S.Essential>
                  </S.InfoTitle>
                  <S.Error>{props.formState.errors.title?.message}</S.Error>
                  <S.InfoInput
                    maxLength={15}
                    placeholder="제목을 입력해주세요(15자 이내)"
                    {...props.register("title")}
                    defaultValue={props.editData?.fetchBoard.title}
                  />
                </S.InfoBox>
              </div>
              <S.InfoBox>
                <S.InfoTitle>태그</S.InfoTitle>
                <Tag
                  tagItem={props.tagItem}
                  setTagItem={props.setTagItem}
                  tagList={props.tagList}
                  setTagList={props.setTagList}
                  editData={props.editData}
                  register={props.register("boardTags")}
                />
              </S.InfoBox>
              <S.DropZoneInfoBox>
                <S.InfoTitle>
                  썸네일 첨부 <S.Essential>*</S.Essential>
                </S.InfoTitle>
                <S.DropBox>
                  <MyDropzone
                    setImageUrl={props.setImageUrl}
                    setFileUrl={props.setFileUrl}
                  />
                </S.DropBox>
              </S.DropZoneInfoBox>
            </S.HalfRightBox>
          </S.HalfBox>
          <S.ContentsInfoBox>
            <S.InfoTitle>
              내용 <S.Essential>*</S.Essential>
            </S.InfoTitle>
            <S.Error>{props.formState.errors.content?.message}</S.Error>
            <ToastEditor
              defaultValue={props.editData?.fetchBoard.content}
              editorRef={props.editorRef}
              onChangeContent={props.onChangeContent}
            />
          </S.ContentsInfoBox>
          <S.ButtonBox>
            <WebBlackButton
              type="button"
              onClick={props.onClickList}
              title="목록으로"
            ></WebBlackButton>
            <WebPurpleButton
              type="button"
              onClick={props.handleSubmit(
                props.isEdit ? props.onClickEdit : props.onClickSubmit
              )}
              title={props.isEdit ? "수정하기" : "등록하기"}
            ></WebPurpleButton>
          </S.ButtonBox>
        </form>
      </S.Wrapper>
    </S.Container>
  );
}
