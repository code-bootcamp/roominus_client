import Link from "next/link";
import SearchRoomCheckInDate from "./CheckInDate";
import * as S from "./Reservation.styles";

const onClick = (event) => {
  console.log(event.target.id);
};

export default function ReservationUI() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ImageBox>
          <S.Image src="/img/theme/네모네모.webp" />
        </S.ImageBox>
        <S.Form>
          <S.InputBox>
            <S.InputLabel>날짜</S.InputLabel>
            <SearchRoomCheckInDate />
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>매장</S.InputLabel>
            <select style={{ textAlign: "center", padding: "10px" }}>
              <option disabled selected>
                매장을 선택해주세요
              </option>
              <option value={"건대 1호점"}>건대 1호점</option>
              <option value={"건대 2호점"}>건대 2호점</option>
              <option value={"홍대 1호점"}>홍대 1호점</option>
              <option value={"강남 1호점"}>강남 1호점</option>
            </select>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>테마</S.InputLabel>
            <select style={{ textAlign: "center", padding: "10px" }}>
              <option disabled selected>
                테마를 선택해주세요
              </option>
              <option value={"네모네모마을에는 무슨일이 있었을까?"}>
                네모네모마을에는 무슨일이 있었을까?
              </option>
              <option value={"네모네모마을에는 무슨일이 있었을까?"}>
                네모네모마을에는 무슨일이 있었을까?
              </option>
              <option value={"월야애담"}>월야애담</option>
              <option value={"월야애담"}>월야애담</option>
            </select>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>인원</S.InputLabel>
            <select style={{ textAlign: "center", padding: "10px" }}>
              <option disabled selected>
                인원을 선택해주세요
              </option>
              <option value={"1명"}>1명</option>
              <option value={"2명"}>2명</option>
              <option value={"3명"}>3명</option>
              <option value={"4명"}>4명</option>
            </select>
          </S.InputBox>
          <S.TimeWrapper>
            <S.InputLabel>시간 선택</S.InputLabel>
            <S.RadioBox onClick={onClick}>
              <S.RadioInput type="radio" className="btn" id="id_btn_01" />
              <label htmlFor="id_btn_01"> 11:00</label>
            </S.RadioBox>
            <S.RadioBox onClick={onClick}>
              <S.RadioInput type="radio" className="btn" id="id_btn_02" />
              <label htmlFor="id_btn_02"> 13:00</label>
            </S.RadioBox>
            <S.RadioBox onClick={onClick}>
              <S.RadioInput type="radio" className="btn" id="id_btn_03" />
              <label htmlFor="id_btn_03"> 15:00</label>
            </S.RadioBox>
            <S.RadioBox onClick={onClick}>
              <S.RadioInput type="radio" className="btn" id="id_btn_04" />
              <label htmlFor="id_btn_04"> 17:00</label>
            </S.RadioBox>
            <S.RadioBox onClick={onClick}>
              <S.RadioInput type="radio" className="btn" id="id_btn_05" />
              <label htmlFor="id_btn_05"> 19:00</label>
            </S.RadioBox>
            <S.RadioBox onClick={onClick}>
              <S.RadioInput type="radio" className="btn" id="id_btn_06" />
              <label htmlFor="id_btn_06"> 21:00</label>
            </S.RadioBox>
          </S.TimeWrapper>
          <S.InputBox>
            <S.InputLabel>예약자명</S.InputLabel>
            <S.Input type="text" placeholder="예약자 명을 입력해주세요." />
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>연락처</S.InputLabel>
            <S.Input type="text" placeholder="연락처를 입력해주세요." />
          </S.InputBox>

          <S.ButtonWrapper>
            <S.CancelBtn>
              <Link href={"/theme"}>
                <a> 돌아가기 </a>
              </Link>
            </S.CancelBtn>
            <S.SubmitBtn>
              <Link href={"/reservation/_id"}>
                <a> 결제하기 </a>
              </Link>
            </S.SubmitBtn>
          </S.ButtonWrapper>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
}
