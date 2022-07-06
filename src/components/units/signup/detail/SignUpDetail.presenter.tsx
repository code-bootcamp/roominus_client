import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as S from "./SignUpDetail.styles";
export default function SignUpDetailUI() {
  return (
    <S.Wrapper>
      <S.Title>기본정보</S.Title>
      <S.FormFirst>
        <S.EmailBox>
          <S.EmailTitle>이메일 아이디💥</S.EmailTitle>
          <S.EmailInputBox>
            <S.EmailInput type="text" />
            <S.NextBtn>다음</S.NextBtn>
          </S.EmailInputBox>
          <S.Error>아이디를 입력해주세요.</S.Error>
        </S.EmailBox>
        <S.PasswordBoxes>
          <S.PasswordBox>
            <S.PasswordTitle>비밀번호💥</S.PasswordTitle>
            <div>
              <input type="text" />
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  color: "purple",
                  fontSize: "1.5em",
                  cursor: "pointer",
                }}
              />
            </div>
            <S.Error>비밀번호를 다시 입력하세요.</S.Error>
            <div>
              <div>*8~14자의 영문,숫자 혼합만 사용가능</div>
              <div>*숫자만으로 이루어진 비밀번호는 사용 할 수 없음</div>
              <div>*아이디가 포함된 문자는 사용 할 수 없음</div>
              <div>*같은 문자를 4번 이상 사용 할 수 없음</div>
            </div>
          </S.PasswordBox>
        </S.PasswordBoxes>
        <div>
          <div>
            <span>비밀번호 확인💥</span>
            <div>
              <input type="text" />
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  color: "purple",
                  fontSize: "1.5em",
                  cursor: "pointer",
                }}
              />
            </div>
            <S.Error>비밀번호가 일치하지않습니다.</S.Error>
          </div>
        </div>
        <div>
          <div>
            <span>이름💥</span>
            <div>
              <input type="text" />
              <FontAwesomeIcon
                icon={faEye}
                style={{
                  color: "purple",
                  fontSize: "1.5em",
                  cursor: "pointer",
                }}
              />
            </div>
            <S.Error>이름을 입력해주세요.</S.Error>
          </div>
        </div>
      </S.FormFirst>
      <div>
        <span>휴대폰번호✷</span>
        <div>
          <input type="text" placeholder="010-1234-5678" />
          <button>인증</button>
        </div>
        <div>
          <input type="text" placeholder="인증번호를 입력하세요." />
          <span>3:00</span>
          <button>확인</button>
        </div>
      </div>
      <form>
        <button>가입하기</button>
      </form>
    </S.Wrapper>
  );
}
