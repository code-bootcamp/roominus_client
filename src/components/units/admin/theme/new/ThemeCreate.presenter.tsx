import { Rate } from "antd";
import WebPurpleLoginButton from "../../../../commons/buttons/buttonDesktop/WebPurpleLoginButton";
import WebLongestHighlightUnderlineInput from "../../../../commons/inputs/inputDesktop/WebLongestHighlightUnderlineInput";
import * as S from "./ThemeCreate.styles";
export default function ThemeCreateUI(props) {
  console.log(props.ThemeUpdateData);
  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "테마수정" : "테마등록"}</S.Title>
      <S.InputsTitle>어려움 정도</S.InputsTitle>
      <Rate
        onChange={props.setValue}
        value={props.value || props.ThemeUpdateData?.fetchTheme.rank}
      />
      <S.Form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onSubmitUpdateTheme)
            : props.handleSubmit(props.onSubmitCreateTheme)
        }
      >
        <S.InputsTitle>매장명</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          placeholder="cafeName"
          register={props.register("cafeName")}
          defaultValue={props.ThemeUpdateData?.fetchTheme.cafe?.name}
        />
        <S.InputsTitle>장르</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          placeholder="genreName"
          register={props.register("genreName")}
          defaultValue={props.ThemeUpdateData?.fetchTheme.genre?.name}
        />
        <S.InputsTitle>제목</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          placeholder="title"
          register={props.register("title")}
          defaultValue={props.ThemeUpdateData?.fetchTheme.title}
        />
        <S.InputsTitle>부 제목</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          placeholder="intro_title"
          register={props.register("intro_title")}
          defaultValue={props.ThemeUpdateData?.fetchTheme.intro_title}
        />
        <S.InputsTitle>테마 상세 설명</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          placeholder="intro_content"
          register={props.register("intro_content")}
          defaultValue={props.ThemeUpdateData?.fetchTheme.intro_content}
        />

        <S.InputsTitle>나이 제한</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="number"
          placeholder="agelimit"
          register={props.register("agelimit")}
          defaultValue={props.ThemeUpdateData?.fetchTheme.agelimit}
        />
        <S.InputsTitle>인원 제한</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="number"
          placeholder="peoplelimit"
          register={props.register("peoplelimit")}
          defaultValue={props.ThemeUpdateData?.fetchTheme.peoplelimit}
        />
      </S.Form>
      <S.InputsTitle>이미지</S.InputsTitle>
      <S.RealImgInput
        type="file"
        onChange={props.onChangeFile}
        ref={props.imgRef}
      />
      <S.PreviewBox>
        <S.ImgBox onClick={props.onClickRealInput}>
          <S.ImgAddBtn />
        </S.ImgBox>
        {props.imgurl && <S.PreviewImg src={props.imgurl} alt="picture" />}
        {!props.imgurl && <S.PreviewEmpty></S.PreviewEmpty>}
      </S.PreviewBox>

      <S.Form2
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onSubmitUpdateTheme)
            : props.handleSubmit(props.onSubmitCreateTheme)
        }
      >
        <WebPurpleLoginButton
          type="submit"
          title={props.isEdit ? "테마 수정" : "테마 등록"}
        />
      </S.Form2>
    </S.Wrapper>
  );
}
