import WebPurpleLoginButton from "../../../../commons/buttons/buttonDesktop/WebPurpleLoginButton";
import WebLongestHighlightUnderlineInput from "../../../../commons/inputs/inputDesktop/WebLongestHighlightUnderlineInput";
import * as S from "./AdminReservationNewStyle";

export default function AdminReservationNewUI(props) {
  return (
    <S.Wrapper>
      <S.Form>
        <S.Title>예약 리스트 등록페이지</S.Title>
        <S.InputsTitle>테마 아이디</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          // register={props.register("name")}
          placeholder="테마 id를 입력하세요"
        />
        <S.InputsTitle>운영 매장</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="text"
          // register={props.register("intro_content")}
          placeholder="매장소개 입력하세요"
        />
        <S.InputsTitle>운영 시간</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="select"
          // register={props.register("phone")}
          placeholder="운영시간을 입력 입력하세요"
        />

        <S.InputsTitle>인원</S.InputsTitle>
        <select>
          <option selected disabled>
            최대 인원을 입력하세요
          </option>
          <option value={2}>2 </option>
          <option value={3}> 3</option>
          <option value={4}> 4</option>
          <option value={5}> 5</option>
          <option value={6}>6 </option>
        </select>

        <S.InputsTitle>금액</S.InputsTitle>
        <WebLongestHighlightUnderlineInput
          type="number"
          // register={props.register("address_detail")}
          placeholder="금액을 입력하세요"
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
      {/* <S.Form2 onSubmit={props.handleSubmit(props.onClickButton)}> */}
      <WebPurpleLoginButton type="submit" title="등록하기" />
      {/* </S.Form2> */}
    </S.Wrapper>
  );
}
