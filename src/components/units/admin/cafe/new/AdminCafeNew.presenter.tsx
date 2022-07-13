import WebPurpleLoginButton from "../../../../commons/buttons/buttonDesktop/WebPurpleLoginButton";
import * as S from "./AdminCafeNew.styles";

export default function AdminCafeNewUI(props) {
  return (
    <S.Wrapper>
      <S.Form onSubmit={props.handleSubmit(props.onClickButton)}>
        <S.Title>
          {props.isEdit ? "cafe 수정페이지" : "cafe 등록페이지"}
        </S.Title>
        <S.InputsTitle>매장 이름</S.InputsTitle>
        {console.log(props.editData)}
        <S.Input
          type="text"
          {...props.register("name")}
          placeholder="매장명을 입력하세요"
          defaultValue={props.editData?.fetchCafe.name}
        />
        <S.InputsTitle>매장 전화번호</S.InputsTitle>
        <S.Input
          type="text"
          {...props.register("phone")}
          placeholder="매장 전화번호를 입력하세요"
          defaultValue={props.editData?.fetchCafe.phone}
        />
        <S.InputsTitle>매장 소개</S.InputsTitle>
        <S.Textarea
          type="text"
          {...props.register("intro_content")}
          placeholder="매장소개 입력하세요"
          defaultValue={props.editData?.fetchCafe.intro_content}
        />
        <S.InputsTitle>매장 지역</S.InputsTitle>
        <S.Input
          type="text"
          {...props.register("address")}
          placeholder="매장 지역을 입력하세요"
          defaultValue={props.editData?.fetchCafe.address}
        />
        <S.InputsTitle>매장 상세주소</S.InputsTitle>
        <S.Input
          type="text"
          {...props.register("address_detail")}
          placeholder="매장 상세주소를 입력하세요"
          defaultValue={props.editData?.fetchCafe.address_detail}
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
        {/* <S.PreviewEmpty></S.PreviewEmpty> */}
      </S.PreviewBox>
      <S.Form2
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickUpdate : props.onClickButton
        )}
      >
        <WebPurpleLoginButton
          type="submit"
          title={props.isEdit ? "수정하기" : "등록하기"}
        />
      </S.Form2>
    </S.Wrapper>
  );
}
