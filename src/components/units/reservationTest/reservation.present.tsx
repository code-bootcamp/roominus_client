import * as S from "./reservation.styles";
import { TextField, MenuItem, Grid, Box } from "@material-ui/core";
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
import { v4 as uuidv4 } from "uuid";
import ReservationThemeInfo from "./reservationInfo";
import { useForm } from "react-hook-form";
import Payment from "../payment";

export default function ReservationUI(props: any) {
  const date = new Date();
  const MaxDate = date.setMonth(date.getMonth() + 3);
  const { register, handleSubmit } = useForm();

  return (
    <S.Container>
      <S.Wrapper>
        {props.themeId ? (
          <>
            {props?.data?.fetchThemeMenus?.length ? (
              <div>
                <S.BackBox onClick={props.onClickReset}>
                  <S.Left />
                  <span>처음으로 </span>
                </S.BackBox>
                <ReservationThemeInfo data={props.data} />
              </div>
            ) : (
              <S.Container>
                <S.BackBox onClick={props.onClickReset}>
                  <S.Left />
                  <span>처음으로</span>
                </S.BackBox>

                <NoReservation />
              </S.Container>
            )}
          </>
        ) : (
          <>
            <ReservationNotice />
          </>
        )}

        <>
          <S.Form onSubmit={handleSubmit(props.onClickSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs>
                <TextField
                  fullWidth
                  variant="outlined"
                  select
                  required
                  label="테마 선택"
                  id="filled-theme"
                  autoFocus
                  onChange={props.onChangeTheme}
                  value={props?.themeId}
                >
                  {props?.themesList?.fetchThemes?.map((el: any) => (
                    <MenuItem key={uuidv4()} value={el.id}>
                      {el.title}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              {props.themeId && (
                <Grid item xs>
                  <TextField
                    fullWidth
                    required
                    select
                    label="매장 선택"
                    variant="outlined"
                    id="filled-cafe"
                    onChange={props.onChangeCafe}
                    value={props.cafeId}
                  >
                    <MenuItem value={props?.data?.fetchThemeMenus[0]?.cafe?.id}>
                      {props?.data?.fetchThemeMenus[0]?.cafe?.name}
                    </MenuItem>
                  </TextField>
                </Grid>
              )}
            </Grid>

            <Grid container spacing={2}>
              {props.cafeId && (
                <Grid item xs>
                  {/* <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}> */}
                  <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                      fullWidth
                      required
                      placeholder="날짜 선택"
                      inputVariant="outlined"
                      margin="none"
                      autoOk={true}
                      disablePast={true}
                      id="filled-date"
                      // label="방문일을 선택해주세요"
                      showTodayButton={true}
                      value={props.reservationDate}
                      format="YYYY-MM-DD"
                      mask={"____-__-__"}
                      maxDate={MaxDate}
                      maxDateMessage="예약 가능한 일정이 없습니다."
                      onChange={props.onChangeDate}
                      rifmFormatter={props.dateFormatter}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
              )}
              {props.cafeId && (
                <Grid item xs>
                  <TextField
                    fullWidth
                    required
                    select
                    value={props.time}
                    label="방문 시간 선택"
                    id="filled-time"
                    variant="outlined"
                    onChange={props.onChangeTime}
                  >
                    {props?.data?.fetchThemeMenus?.map((el: any) => (
                      <MenuItem key={uuidv4()} value={el.reservation_time}>
                        {el.reservation_time}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              )}
            </Grid>
            <Grid container spacing={2}>
              {props.reservationDate && (
                <Grid item xs>
                  <TextField
                    fullWidth
                    required
                    select
                    label="인원 선택"
                    id="filled-headCount"
                    variant="outlined"
                    onChange={props.onChangeHeadCount}
                    value={props.peopleNumber}
                  >
                    {props?.data?.fetchThemeMenus?.map((el: any) => (
                      <MenuItem
                        key={uuidv4()}
                        value={el.people_number * el.price}
                      >
                        {el.people_number}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              )}
              {props.reservationDate && (
                <Grid item xs>
                  <TextField
                    id="filled-point"
                    label="적립금을 입력해주세요"
                    type="number"
                    fullWidth
                    onChange={props.onChangePoint}
                    variant="outlined"
                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                  />
                </Grid>
              )}
            </Grid>

            {props.reservationDate && (
              <Grid container spacing={2}>
                <Grid item xs>
                  <TextField
                    fullWidth
                    required
                    variant="outlined"
                    id="outlined-required"
                    label="방문자명"
                    // defaultValue="유저 이름"
                    autoFocus
                    // register={props.register("name")}
                    {...register("name", { required: "필수입력!" })}
                  />
                </Grid>

                <Grid item xs>
                  <TextField
                    id="filled-number"
                    label="휴대폰 번호"
                    type="tel"
                    fullWidth
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                    // defaultValue="유저핸드폰"
                    variant="outlined"
                    // register={props.register("phoneNumber")}
                    {...register("phoneNumber", { required: "필수입력!" })}
                  />
                </Grid>
              </Grid>
            )}

            {props.reservationDate && (
              <Grid container spacing={2}>
                <Grid item xs>
                  <TextField
                    id="filled-memo"
                    label="메모"
                    type="text"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    // register={props.register("memo")}
                    {...register("memo")}
                  />
                </Grid>
              </Grid>
            )}

            {props.totalPrice && (
              <S.FooterBox>
                <S.Total>
                  <span>최종 결제 금액</span>
                  <h4>
                    {(props.totalPrice - props.usePoint).toLocaleString()}원
                  </h4>
                </S.Total>

                <S.InformationUse>
                  <h2>이용안내</h2>

                  <S.CheckBox>
                    <input
                      type="checkbox"
                      ref={props.optionalCheckRef}
                      onChange={props.onChangeOptionalCheck}
                    />
                    <span>개인정보 수집에 동의합니다</span>
                  </S.CheckBox>
                  <p>
                    o 입장 전 설명을 위해 플레이타임 시작 10분 전까지 매장에
                    도착해주세요. 정시 입장이 어려운 경우, 다음 예약자에게
                    피해가 가지않도록 시간이 차감될 수 있습니다. <br></br>o 매장
                    근처 주차가 어려울 수있으니 도보 이용 바랍니다. <br></br>o
                    예약취소는 마이페이지에서 가능합니다.<br></br> o 입장 후에는
                    어떠한 경우에도 환불이 불가능합니다. 단, 중대한 사유로
                    플레이가 중지될 경우 책임 정도에 따라 일부 환불이
                    가능합니다. 반드시 매장에 문의해 주세요.
                  </p>

                  <div>
                    <p>
                      ■ 수집하는 개인정보 항목 : 룸인어스는 상담, 서비스 신청
                      등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.{" "}
                      <br></br>ο 수집항목 : 이름, 휴대전화번호 <br></br>ο
                      개인정보 수집방법 : 홈페이지(예약)
                    </p>
                  </div>
                </S.InformationUse>

                <S.ButtonBox>
                  <WebBlackButton type="button" title="돌아가기" />
                  {/* <WebPurpleButton
                    type="submit"
                    title="결제하기"
                    disabled={props.formState.isSubmitting}
                  /> */}
                  <Payment totalPrice={props.totalPrice} />
                </S.ButtonBox>
              </S.FooterBox>
            )}
          </S.Form>
        </>
      </S.Wrapper>
    </S.Container>
  );
}
