import * as S from "./reservation.styles";
import { TextField, MenuItem, Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import moment from "moment";
import MomentUtils from "@date-io/moment";
import ReservationNotice from "./reservationNotice/reservationNotice.container";
import WebBlackButton from "../../commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../commons/buttons/buttonDesktop/WebPurpleButton";
import NoReservation from "./Noreservation";
// import NoReservation from "./Noreservation";

export default function ReservationUI(props: any) {
  const date = new Date();
  const MaxDate = date.setMonth(date.getMonth() + 3);

  console.log("length", props?.data?.fetchThemeMenus?.length);
  return (
    <S.Container>
      <S.Wrapper>
        {props.theme ? (
          <>
            {props?.data?.fetchThemeMenus?.length ? (
              <div>
                {" "}
                <S.ImageInfoBox>
                  <S.ImageBox>
                    <S.Image
                      src={props.data?.fetchThemeMenus[0]?.theme?.mainImg}
                    />
                  </S.ImageBox>
                  <S.InfoBox>
                    <S.ThemeTitle>
                      {props.data?.fetchThemeMenus[0]?.theme?.title}
                    </S.ThemeTitle>
                    <span>
                      {props.data?.fetchThemeMenus[0]?.theme?.intro_title}
                    </span>
                    <span>
                      {props.data?.fetchThemeMenus[0]?.theme?.intro_content}
                    </span>
                    <span>
                      {props.data?.fetchThemeMenus[0]?.theme?.agelimit}세 이상
                      이용가능
                    </span>
                  </S.InfoBox>
                </S.ImageInfoBox>
              </div>
            ) : (
              <div>
                <NoReservation />
              </div>
            )}
          </>
        ) : (
          <>
            <ReservationNotice />
          </>
        )}

        <>
          {" "}
          <Grid container spacing={2}>
            <Grid item xs>
              <TextField
                fullWidth
                focused
                select
                label="테마를 선택해주세요"
                variant="outlined"
                onChange={props.onChangeTheme}
                value={props?.theme}
              >
                {props?.themesList?.fetchThemes?.map((el) => (
                  <MenuItem key={el.id} value={el.id}>
                    {el.title}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {props.theme && (
              <Grid item xs>
                <TextField
                  fullWidth
                  select
                  label="매장을 선택해주세요"
                  variant="outlined"
                  onChange={props.onChangeCafe}
                  value={props.cafe}
                >
                  {props?.data?.fetchThemeMenus?.map((el, i) => (
                    <MenuItem key={i} value={el.cafe.id}>
                      {el.cafe.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            )}
            {props.theme && (
              <Grid item xs>
                {/* <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}> */}
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <KeyboardDatePicker
                    fullWidth
                    placeholder="날짜를 선택해주세요"
                    inputVariant="outlined"
                    margin="none"
                    autoOk={true}
                    disablePast={true}
                    id="visit-date"
                    label="방문일을 선택해주세요"
                    showTodayButton={true}
                    value={props.selectedDate}
                    format="YYYY-MM-DD"
                    mask={"____-__-__"}
                    maxDate={MaxDate}
                    maxDateMessage="예약 가능한 일정이 없습니다."
                    onChange={(date) => props.onChangeDate(date._d)}
                    rifmFormatter={props.dateFormatter}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Grid>
            )}
          </Grid>
          <Grid container spacing={2}>
            {props.cafe && (
              <Grid item xs>
                <TextField
                  fullWidth
                  select
                  value={props.time}
                  label="방문 시간을 선택해주세요"
                  variant="outlined"
                  onChange={props.onChangeTime}
                >
                  {props?.data?.fetchThemeMenus?.map((el, i) => (
                    <MenuItem key={i} value={el.reservation_time}>
                      {el.reservation_time}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            )}

            {props.selectedDate && (
              <Grid item xs>
                <TextField
                  fullWidth
                  select
                  label="인원을 선택해주세요"
                  variant="outlined"
                  onChange={props.onChangeHeadCount}
                  value={props.headCount}
                >
                  <MenuItem value={40000}>2인</MenuItem>
                  <MenuItem value={55000}>3인</MenuItem>
                  <MenuItem value={68000}>4인</MenuItem>
                  <MenuItem value={87000}>5인</MenuItem>
                  <MenuItem value={99000}>6인</MenuItem>
                </TextField>
              </Grid>
            )}
            {props.selectedDate && (
              <Grid item xs>
                <TextField
                  label="사용할 적립금을 입력해주세요"
                  multiline
                  fullWidth
                  type="number"
                  variant="outlined"
                  defaultValue={props.point}
                  onChange={props.onChangePoint}
                />
              </Grid>
            )}
          </Grid>
          {props.time && (
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  fullWidth
                  required
                  variant="outlined"
                  id="outlined-required"
                  label="이름을 입력해주세요"
                  defaultValue="유저 이름 디폴트로 불러올것"
                />
              </Grid>

              <Grid item xs>
                <TextField
                  id="filled-number"
                  label="휴대폰 번호를 입력해주세요"
                  type="tel"
                  fullWidth
                  required
                  InputLabelProps={{
                    shrink: true,
                  }}
                  defaultValue="유저핸드폰 디폴트로 불러올것"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs>
                <TextField
                  label="매장에 전달할 사항을 입력해주세요"
                  multiline
                  fullWidth
                  rows={1}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          )}
          {props.totalPrice && (
            <>
              <S.Total>
                <span>최종 결제 금액</span>
                <span>
                  {(props.totalPrice - props.point).toLocaleString()}원
                </span>
              </S.Total>

              <S.InformationUse>
                <h3>이용안내</h3>

                <div>
                  <input
                    type="checkbox"
                    ref={props.optionalCheckRef}
                    onChange={props.onChangeOptionalCheck}
                  />
                  <span>개인정보 수집에 동의합니다</span>
                </div>
                <p>
                  o 입장 전 설명을 위해 플레이타임 시작 10분 전까지 매장에
                  도착해주세요. 정시 입장이 어려운 경우, 다음 예약자에게 피해가
                  가지않도록 시간이 차감될 수 있습니다. <br></br>o 매장 근처
                  주차가 어려울 수있으니 도보 이용 바랍니다. <br></br>o
                  예약취소는 마이페이지에서 가능합니다.<br></br> o 입장 후에는
                  어떠한 경우에도 환불이 불가능합니다. 단, 중대한 사유로
                  플레이가 중지될 경우 책임 정도에 따라 일부 환불이 가능합니다.
                  반드시 매장에 문의해 주세요.
                </p>

                <span>
                  ■ 수집하는 개인정보 항목 : 룸인어스는 상담, 서비스 신청 등등을
                  위해 아래와 같은 개인정보를 수집하고 있습니다. <br></br>ο
                  수집항목 : 이름, 휴대전화번호 <br></br>ο 개인정보 수집방법 :
                  홈페이지(예약)
                </span>
              </S.InformationUse>

              <S.ButtonBox>
                <WebBlackButton type="button" title="돌아가기" />
                <WebPurpleButton type="button" title="결제하기" />
              </S.ButtonBox>
            </>
          )}
        </>
      </S.Wrapper>
    </S.Container>
  );
}
