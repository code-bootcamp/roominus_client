import { Rate } from "antd";
import WebPurpleLoginButton from "../../../../commons/buttons/buttonDesktop/WebPurpleLoginButton";
import WebLongestHighlightUnderlineInput from "../../../../commons/inputs/inputDesktop/WebLongestHighlightUnderlineInput";
import * as S from "./ThemeCreate.styles";
export default function ThemeCreateUI(props) {
  return (
    <S.Wrapper>
      <S.Title>테마등록</S.Title>
      <S.InputsTitle>어려움 정도</S.InputsTitle>
      <Rate onChange={props.setValue} value={props.value} />
      <S.Form onSubmit={props.handleSubmit(props.onSubmitCreateTheme)}>
        <S.InputsTitle>매장명</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          placeholder="cafeName"
          register={props.register("cafeName")}
        />
        <S.InputsTitle>장르</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          placeholder="genreName"
          register={props.register("genreName")}
        />
        <S.InputsTitle>제목</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          placeholder="title"
          register={props.register("title")}
        />
        <S.InputsTitle>부 제목</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          placeholder="intro_title"
          register={props.register("intro_title")}
        />
        <S.InputsTitle>테마 상세 설명</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          placeholder="intro_content"
          register={props.register("intro_content")}
        />
        <S.InputsTitle>나이 제한</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="number"
          placeholder="agelimit"
          register={props.register("agelimit")}
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
        <S.PreviewEmpty></S.PreviewEmpty>
      </S.PreviewBox>

      <S.Form2 onSubmit={props.handleSubmit(props.onSubmitCreateTheme)}>
        <WebPurpleLoginButton type="submit" title="테마 등록" />
      </S.Form2>
    </S.Wrapper>
  );
}
