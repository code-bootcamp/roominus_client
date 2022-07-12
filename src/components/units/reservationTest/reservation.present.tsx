import * as S from "./reservation.styles";
import { Box, TextField, MenuItem, Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
// import moment from "moment";
import MomentUtils from "@date-io/moment";
import WebBlackButton from "../../commons/buttons/buttonDesktop/WebBlackButton";
import { GiNightSleep } from "react-icons/Gi";
import Link from "next/link";
import ReservationNotice from "./reservationNotice/reservationNotice.container";

export default function ReservationUI(props: any) {
  const data = [
    {
      theme: { title: "월야애담", id: "erqrer" },
      cafe: "홍대1호점",
      people_number: 6,
      price: 12000,
      timezone: ["10시 30분", "11시 30분", "12시 30분"],
    },
    {
      theme: { title: "LOVER", id: "erqredfdfr" },
      cafe: "홍대2호점",
      people_number: 6,
      price: 12000,
    },
  ];

  if (!data.length)
    return (
      <Box
        width={1}
        height={450}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <S.NoBox>
          <GiNightSleep
            style={{
              fontSize: "3em",
              color: "#4A00E0e7",
              marginLeft: "3em",
              marginBottom: "0.8em",
            }}
          />

          <S.Notice>
            죄송합니다! <br></br>이 테마는 현재 운영중인 매장이 없습니다!{" "}
            <br></br>다른 테마를 선택해주세요!
          </S.Notice>
        </S.NoBox>
        <Link href="/theme">
          <WebBlackButton title="돌아가기"></WebBlackButton>
        </Link>
      </Box>
    );

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
              select
              label="Select Theme"
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
                label="Select Cafe"
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
          {props.cafe && (
            <Grid item xs>
              {/* <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}> */}
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDatePicker
                  fullWidth
                  placeholder="날짜를 선택해주세요"
                  inputVariant="outlined"
                  margin="none"
                  autoOk={true}
                  id="visit-date"
                  label="Visit Date"
                  showTodayButton={true}
                  value={props.selectedDate}
                  format="YYYY-MM-DD"
                  onChange={(date) => props.onChangeDate(date._d)}
                  // inputValue={props.inputValue}
                  // onChange={props.onChangeDate}
                  // minDate={new Date(showtime.startDate)}
                  // maxDate={new Date(showtime.endDate)}
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
                value={props.selectedTime}
                label="Select Time"
                variant="outlined"
                onChange={props.onChangeTime}
              >
                {data.map((el) => (
                  <MenuItem key={el.people_number} value={el.people_number}>
                    {el.people_number}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          )}

          {props.time && (
            <Grid item xs>
              <TextField
                fullWidth
                select
                value={props.headCount}
                label="HeadCount"
                variant="outlined"
                onChange={props.onChangeHeadCount}
              >
                {data.map((el) => (
                  <MenuItem key={el.timezone} value={el.timezone}>
                    {el.timezone}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          )}

          {props.time && (
            <Grid item xs>
              <TextField
                fullWidth
                select
                value={props.headCount}
                label="HeadCount"
                variant="outlined"
                onChange={props.onChangeHeadCount}
              >
                {data.map((el) => (
                  <MenuItem key={el.timezone} value={el.timezone}>
                    {el.timezone}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          )}

          {props.time && (
            <Grid item xs>
              <TextField
                fullWidth
                select
                value={props.headCount}
                label="HeadCount"
                variant="outlined"
                onChange={props.onChangeHeadCount}
              >
                {data.map((el) => (
                  <MenuItem key={el.timezone} value={el.timezone}>
                    {el.timezone}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          )}

          {props.time && (
            <Grid item xs={6}>
              <TextField
                fullWidth
                select
                value={props.headCount}
                label="HeadCount"
                variant="outlined"
                onChange={props.onChangeHeadCount}
              >
                {data.map((el) => (
                  <MenuItem key={el.timezone} value={el.timezone}>
                    {el.timezone}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          )}
        </Grid>
      </S.Wrapper>
    </S.Container>
  );
}
