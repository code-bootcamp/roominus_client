import WebPurpleLoginButton from "../../../../commons/buttons/buttonDesktop/WebPurpleLoginButton";
import WebLongestHighlightUnderlineInput from "../../../../commons/inputs/inputDesktop/WebLongestHighlightUnderlineInput";
import * as S from "./AdminCafeNewStyle";

export default function AdminCafeNewUI(props) {
  return (
    <S.Wrapper>
      <S.Form onSubmit={props.handleSubmit(props.onClickButton)}>
        <S.Title>cafe 등록페이지</S.Title>
        <S.InputsTitle>매장 이름</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          register={props.register("name")}
          placeholder="매장명을 입력하세요"
        />
        <S.InputsTitle>매장 전화번호</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          register={props.register("phone")}
          placeholder="매장 전화번호를 입력하세요"
        />
        <S.InputsTitle>매장 소개</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          register={props.register("intro_content")}
          placeholder="매장소개 입력하세요"
        />
        <S.InputsTitle>매장 지역</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          register={props.register("address")}
          placeholder="매장 지역을 입력하세요"
        />
        <S.InputsTitle>매장 상세주소</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          register={props.register("address_detail")}
          placeholder="매장 상세주소를 입력하세요"
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
      <S.Form2 onSubmit={props.handleSubmit(props.onClickButton)}>
        <WebPurpleLoginButton type="submit" title="등록하기" />
      </S.Form2>
    </S.Wrapper>
  );
}
