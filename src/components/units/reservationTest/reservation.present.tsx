import * as S from "./reservation.styles";
import { Box, TextField, MenuItem, Grid } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import moment from "moment";
import MomentUtils from "@date-io/moment";

export default function ReservationUI(props: any) {
  const reservationTable = [
    { name: "홍대1호점" },
    { name: "홍대2호점" },
    { name: "홍대3호점" },
    { name: "홍대4호점" },
    { name: "홍대5호점" },
  ];

  if (!reservationTable.length)
    return (
      <Box
        display="flex"
        width={1}
        height={1}
        alignItems="center"
        justifyContent="center"
      >
        <span>진행중인 매장이 없습니다</span>
      </Box>
    );

  return (
    <S.Container>
      <S.Wrapper>
        <S.ImageInfoBox>
          <S.ImageBox>
            <S.Image src="/img/theme/네모네모.webp" />
          </S.ImageBox>
        </S.ImageInfoBox>
        <Grid container spacing={3}>
          <Grid item xs>
            <TextField
              fullWidth
              select
              label="Select Cafe"
              variant="outlined"
              onChange={props.onChangeCafe}
              value={props.cafe}
            >
              {reservationTable.map((el) => (
                <MenuItem key={el.name} value={el.name}>
                  {el.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          {props.cafe && (
            <Grid item xs>
              <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
                <KeyboardDatePicker
                  fullWidth
                  inputVariant="outlined"
                  margin="none"
                  autoOk={true}
                  id="visit-date"
                  label="Visit Date"
                  showTodayButton={true}
                  value={props.selectedDate}
                  format="YYYY-MM-DD"
                  inputValue={props.inputValue}
                  onChange={props.onChangeDate}
                  variant="inline"
                  // onChange={(date) => props.onChangeDate(date._d)}
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

          {props.cafe && (
            <Grid item xs>
              <TextField
                fullWidth
                select
                // value={selectedTime}
                label="Select Time"
                variant="outlined"
                onChange={props.onChangeTime}
              >
                {/* {times.map((time, index) => (
              <MenuItem key={time + '-' + index} value={time}>
                {time}
              </MenuItem>
            ))} */}
              </TextField>
            </Grid>
          )}
        </Grid>
      </S.Wrapper>
    </S.Container>
  );
}
