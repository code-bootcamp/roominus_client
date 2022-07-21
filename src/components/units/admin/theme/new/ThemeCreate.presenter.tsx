import { Rate } from "antd";
import WebPurpleLoginButton from "../../../../commons/buttons/buttonDesktop/WebPurpleLoginButton";
import * as S from "./ThemeCreate.styles";
import { IThemeCreateUIProps } from "./ThemeCreate.types";
export default function ThemeCreateUI(props: IThemeCreateUIProps) {
  return (
    <S.Wrapper>
      <S.Title>{props.isEdit ? "테마수정" : "테마등록"}</S.Title>
      <S.InputsTitle>난이도</S.InputsTitle>
      <Rate
        onChange={props.setValue}
        value={props.value || props.themeUpdateData?.fetchTheme.rank}
      />
      <S.Form
        onSubmit={
          props.isEdit
            ? props.handleSubmit(props.onSubmitUpdateTheme)
            : props.handleSubmit(props.onSubmitCreateTheme)
        }
      >
        <S.InputsTitle>매장명</S.InputsTitle>
        <S.MyInput
          type="text"
          placeholder="cafeName"
          {...props.register("cafeName")}
          defaultValue={props.themeUpdateData?.fetchTheme.cafe?.name}
        />
        <S.InputsTitle>장르</S.InputsTitle>
        <S.MyInput
          type="text"
          placeholder="genreName"
          {...props.register("genreName")}
          defaultValue={props.themeUpdateData?.fetchTheme.genre?.name}
        />
        <S.InputsTitle>제목</S.InputsTitle>
        <S.MyInput
          type="text"
          placeholder="title"
          {...props.register("title")}
          defaultValue={props.themeUpdateData?.fetchTheme.title}
        />
        <S.InputsTitle>부 제목</S.InputsTitle>
        <S.MyInput
          type="text"
          placeholder="intro_title"
          {...props.register("intro_title")}
          defaultValue={props.themeUpdateData?.fetchTheme.intro_title}
        />
        <S.InputsTitle>테마 상세 설명</S.InputsTitle>
        <S.MyInput
          type="text"
          placeholder="intro_content"
          {...props.register("intro_content")}
          defaultValue={props.themeUpdateData?.fetchTheme.intro_content}
        />

        <S.InputsTitle>나이 제한</S.InputsTitle>
        <S.MyInput
          type="number"
          placeholder="agelimit"
          {...props.register("agelimit")}
          defaultValue={props.themeUpdateData?.fetchTheme.agelimit}
        />
        <S.InputsTitle>인원 제한</S.InputsTitle>
        <S.MyInput
          type="number"
          placeholder="peoplelimit"
          {...props.register("peoplelimit")}
          defaultValue={props.themeUpdateData?.fetchTheme.peoplelimit}
        />
        <S.InputsTitle>이용 시간</S.InputsTitle>
        <S.MyInput
          type="number"
          placeholder="clearTime"
          {...props.register("clearTime")}
          defaultValue={props.themeUpdateData?.fetchTheme.clearTime}
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
          onClick={undefined}
        />
      </S.Form2>
    </S.Wrapper>
  );
}
