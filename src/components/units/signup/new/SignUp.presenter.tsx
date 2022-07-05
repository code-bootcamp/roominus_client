import * as S from "./SignUp.styles";

export default function SignUpUI() {
  return (
    <S.Wrapper>
      <S.Title>회원가입</S.Title>
      <S.WarningBox>
        <S.Warning>
          이용약관에 동의하지않는 경우 서비스 이용에 제한이 있을 수 있습니다.
        </S.Warning>
        <S.CheckBox>
          <S.Check type="checkbox" />
          <span>전체동의</span>
        </S.CheckBox>
      </S.WarningBox>
      <S.NecessityInfoBox>
        <S.NecessityTitleBox>
          <S.NecessityTitles>
            <S.NecessityTitle>[필수]</S.NecessityTitle>
            <S.NecessitySubTitle>이용약관</S.NecessitySubTitle>
          </S.NecessityTitles>
          <S.NecessityCheckBoxes>
            <S.NecessityCheckBox type="checkbox" />
            <S.NecessityCheckBoxTitle>동의합니다</S.NecessityCheckBoxTitle>
          </S.NecessityCheckBoxes>
        </S.NecessityTitleBox>
        <S.NecessityInfo>
          제 1장 총칙 이용약관입니다. 저는 이용약관입니다. 저는 이용약관입니다.
          제 1장 총칙 이용약관입니다. 저는 이용약관입니다. 저는 이용약관입니다.
          제 1장 총칙 이용약관입니다. 저는 이용약관입니다. 저는
          이용약관입니다.제 1장 총칙 이용약관입니다. 저는 이용약관입니다. 저는
          이용약관입니다.제 1장 총칙 이용약관입니다. 저는 이용약관입니다. 저는
          이용약관입니다.제 1장 총칙 이용약관입니다. 저는 이용약관입니다. 저는
          이용약관입니다.제 1장 총칙 이용약관입니다. 저는 이용약관입니다
        </S.NecessityInfo>
      </S.NecessityInfoBox>
      <S.OptionalInfoBox>
        <S.OptionalTitleBox>
          <S.OptionalTitles>
            <S.OptionalTitle>[선택]</S.OptionalTitle>
            <S.OptionalSubTitle>이용약관</S.OptionalSubTitle>
          </S.OptionalTitles>
          <S.OptionalCheckBoxes>
            <S.OptionalCheckBox type="checkbox" />
            <S.OptionalCheckBoxTitle>동의합니다</S.OptionalCheckBoxTitle>
          </S.OptionalCheckBoxes>
        </S.OptionalTitleBox>
        <S.OptionalInfo>
          제 1장 총칙 이용약관입니다. 저는 이용약관입니다. 저는 이용약관입니다.
          제 1장 총칙 이용약관입니다. 저는 이용약관입니다. 저는 이용약관입니다.
          제 1장 총칙 이용약관입니다. 저는 이용약관입니다. 저는
          이용약관입니다.제 1장 총칙 이용약관입니다. 저는 이용약관입니다. 저는
          이용약관입니다.제 1장 총칙 이용약관입니다. 저는 이용약관입니다. 저는
          이용약관입니다.제 1장 총칙 이용약관입니다. 저는 이용약관입니다. 저는
          이용약관입니다.제 1장 총칙 이용약관입니다. 저는 이용약관입니다
        </S.OptionalInfo>
      </S.OptionalInfoBox>
      <S.ButtonBox>
        <S.PrevButton>이전</S.PrevButton>
        <S.NextButton>다음</S.NextButton>
      </S.ButtonBox>
    </S.Wrapper>
  );
}
