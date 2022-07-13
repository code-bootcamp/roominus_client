import * as S from "./reservation.styles";
import { TextField, MenuItem, Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import moment from "moment";
import MomentUtils from "@date-io/moment";
import ReservationNotice from "./reservationNotice/reservationNotice.container";
import NoReservation from "./Noreservation";

export default function ReservationUI(props: any) {
  const data = [
    {
      theme: { title: "월야애담", id: "erqrer" },
      cafe: "홍대1호점",
      people_number: 6,
      price: 12000,
      timezone: ["10시 30분", "11시 30분", "12시 30분"],
      headCount: 6,
    },
  ];

  const time = [
    {
      label: "1",
      value: "10시 30분",
    },
    {
      label: "2",
      value: "12시 30분",
    },
    {
      label: "3",
      value: "14시 30분",
    },
    {
      label: "4",
      value: "14시",
    },
    {
      label: "5",
      value: "17시 30분",
    },
  ];

  const people = [
    {
      label: "2",
      value: "24000",
    },
    {
      label: "3",
      value: "40000",
    },
    {
      label: "4",
      value: "55000",
    },
    {
      label: "5",
      value: "70000",
    },
    {
      label: "6",
      value: "80000",
    },
  ];

  const date = new Date();
  const MaxDate = date.setMonth(date.getMonth() + 3);

  if (!data.length) return <NoReservation />;

  return (
    <S.Container>
      <S.Wrapper>
        {props.theme ? (
          <>
            <S.ImageInfoBox>
              <S.ImageBox>
                <S.Image src="/img/theme/네모네모.webp" />
              </S.ImageBox>
              <S.InfoBox>
                <S.ThemeTitle>테마명</S.ThemeTitle>
                <span>소개</span>
                <span>테마명</span>
                <span>테마명</span>
              </S.InfoBox>
            </S.ImageInfoBox>
          </>
        ) : (
          <>
            <ReservationNotice />
          </>
        )}

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
              {data.map((el) => (
                <MenuItem key={el.theme.id} value={el.theme.id}>
                  {el.theme.title}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
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
                {data.map((el) => (
                  <MenuItem key={el.cafe} value={el.cafe}>
                    {el.cafe}
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
          {props.selectedDate && (
            <Grid item xs>
              <TextField
                fullWidth
                select
                value={props.time}
                label="방문 시간을 선택해주세요"
                variant="outlined"
                onChange={props.onChangeTime}
              >
                {time.map((el) => (
                  <MenuItem key={el.label} value={el.value}>
                    {el.value}
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
                value={props.headCount}
                label="인원을 선택해주세요"
                variant="outlined"
                onChange={props.onChangeHeadCount}
              >
                {people.map((el) => (
                  <MenuItem key={el.label} value={el.label}>
                    {el.label}
                  </MenuItem>
                ))}
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
        {props.price && (
          <Grid container spacing={2}>
            <Grid item xs>
              <TextField
                fullWidth
                required
                variant="outlined"
                id="outlined-required"
                label="이름을 입력해주세요"
                defaultValue="유저 이름 "
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
                defaultValue="유저핸드폰"
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
        <Grid container spacing={2}></Grid>
        <div>
          <span>최종 결제 금액</span>
          <span>{props.totalPrice}</span>
        </div>
      </S.Wrapper>
    </S.Container>
  );
}
