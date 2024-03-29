import * as S from "./reservation.styles";
import { TextField, MenuItem } from "@material-ui/core";

import MomentUtils from "@date-io/moment";
import WebBlackButton from "../../commons/buttons/buttonDesktop/WebBlackButton";
import { v4 as uuidv4 } from "uuid";
import Payment from "../payment/payment";
import Swal from "sweetalert2";
import ReservationNotice from "./reservationNotice/reservationNotice";
import { IReservationUIProps } from "./reservation.types";
import Link from "next/link";
import ReservationThemeInfo from "./reservationthemeInfo/reservationthemeinfo";
import NoReservation from "./Noreservation";
import { useRef } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function ReservationUI(props: IReservationUIProps) {
  const date = new Date();
  const MaxDate = date.setMonth(date.getMonth() + 3);

  if (props.max < props.usePoint || props.usePoint < 0) {
    Swal.fire({
      icon: "error",
      title: "적립금 오류",
      backdrop: false,
    });
  }

  return (
    <S.Container>
      <S.Wrapper>
        {props.themeId ? (
          <>
            {props?.themeMenus?.fetchThemeMenus?.length ? (
              <>
                <S.BackBox>
                  <S.Left onClick={props.onClickReset} />
                  <span onClick={props.onClickReset}>처음으로 </span>
                </S.BackBox>
                <ReservationThemeInfo
                  data={props.themeMenus}
                  timeTable={props.timeTable}
                />
              </>
            ) : (
              <>
                <S.BackBox>
                  <S.Left onClick={props.onClickReset} />
                  <span onClick={props.onClickReset}>처음으로</span>
                </S.BackBox>
                <NoReservation />
              </>
            )}
          </>
        ) : (
          <ReservationNotice data={props?.themesList?.fetchThemesAll} />
        )}

        <S.Form autoComplete="off">
          <TextField
            fullWidth
            variant="outlined"
            select
            required
            label="테마 선택"
            id="filled-theme"
            onChange={props.onChangeTheme}
            value={props.themeId || ""}
            helperText="예약이 가능한 테마만 예약 과정이 진행됩니다."
            style={{ paddingBottom: "1.3em" }}
          >
            <MenuItem value={""} disabled>
              테마를 선택해주세요
            </MenuItem>
            {props?.themesList?.fetchThemesAll?.map((el: any) => (
              <MenuItem key={uuidv4()} value={el.id}>
                {el.title}
              </MenuItem>
            ))}
          </TextField>

          {!!props?.themeMenus?.fetchThemeMenus.length && props?.themeId && (
            <TextField
              fullWidth
              required
              select
              label="매장 선택"
              variant="outlined"
              id="filled-cafe"
              onChange={props.onChangeCafe}
              value={props?.cafeId || ""}
              helperText="예약이 가능한 매장만 선택이 가능합니다."
              style={{ paddingBottom: "1.3em" }}
            >
              <MenuItem value={""} disabled>
                매장을 선택해주세요
              </MenuItem>
              <MenuItem value={props?.themeMenus?.fetchThemeMenus[0]?.cafe?.id}>
                {props?.themeMenus?.fetchThemeMenus[0]?.cafe?.name}
              </MenuItem>
            </TextField>
          )}

          <S.GridBox>
            {!!props?.themeMenus?.fetchThemeMenus.length && props?.cafeId && (
              <>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="방문일을 선택해주세요"
                      format="YYYY-MM-DD"
                      maxDate={MaxDate}
                      fullWidth
                      required
                      inputVariant="outlined"
                      margin="none"
                      autoOk={true}
                      disablePast={true}
                      showTodayButton={true}
                      value={
                        props?.reservationDate ? props?.reservationDate : ""
                      }
                      onChange={props.onChangeDate}
                      style={{ paddingBottom: "1.3em" }}
                      helperText="방문하실 날짜를 선택해주세요."
                    />
                  </LocalizationProvider>
                </MuiPickersUtilsProvider>
              </>
            )}

            {!!props?.themeMenus?.fetchThemeMenus.length &&
              props?.reservationDate && (
                <TextField
                  fullWidth
                  required
                  select
                  value={props?.time ? props?.time : ""}
                  label="방문 시간 선택"
                  id="filled-time"
                  variant="outlined"
                  onChange={props.onChangeTime}
                  helperText="방문하실 시간을 선택해주세요."
                  style={{ paddingBottom: "1.3em" }}
                >
                  <MenuItem value={""} disabled>
                    시간을 선택해주세요
                  </MenuItem>
                  {props?.resultTime?.map((el: any) => (
                    <MenuItem key={uuidv4()} value={el}>
                      {el}
                    </MenuItem>
                  ))}
                </TextField>
              )}
          </S.GridBox>

          <S.GridBox>
            {!!props?.themeMenus?.fetchThemeMenus.length && props?.selectTime && (
              <TextField
                fullWidth
                required
                select
                label="인원 선택"
                id="filled-headCount"
                variant="outlined"
                onChange={props.onChangeHeadCount}
                value={props?.peopleNumber || ""}
                helperText="방문하시는 인원을 선택해주세요."
                style={{ paddingBottom: "1.3em" }}
              >
                <MenuItem value={""} disabled>
                  인원을 선택해주세요
                </MenuItem>
                {props?.selectTime?.map((el: any) => (
                  <MenuItem key={uuidv4()} value={el}>
                    {el}
                  </MenuItem>
                ))}
              </TextField>
            )}

            {!!props?.themeMenus?.fetchThemeMenus.length &&
              props?.reservationDate &&
              props?.selectTime && (
                <div>
                  {" "}
                  <TextField
                    id="filled-point"
                    label="적립금을 입력해주세요"
                    type="number"
                    fullWidth
                    onChange={props.onChangePoint}
                    style={{ paddingBottom: "0.2em" }}
                    variant="outlined"
                    onWheel={(e) => (e.target as HTMLInputElement).blur()}
                  />
                  <S.Point>
                    현재 적립금 <span>{props.max.toLocaleString()}원</span> 사용
                    가능합니다.
                  </S.Point>
                </div>
              )}
          </S.GridBox>

          {!!props?.themeMenus?.fetchThemeMenus.length &&
            props?.reservationDate &&
            props?.selectTime && (
              <TextField
                id="filled-memo"
                label="메모"
                type="text"
                fullWidth
                multiline
                maxRows={2}
                variant="outlined"
                value={props?.memo || ""}
                onChange={props.onChangeMemo}
                style={{ paddingBottom: "1.3em" }}
                helperText="예약자와 방문자가 다를 경우 방문자 정보를 작성해주세요."
              />
            )}

          {!!props?.themeMenus?.fetchThemeMenus.length && props.totalPrice && (
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
                  <input type="checkbox" onChange={props.onChangeChecked} />
                  <span>개인정보 수집에 동의합니다</span>
                </S.CheckBox>
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

                <div>
                  <p>
                    ■ 수집하는 개인정보 항목 : 룸인어스는 상담, 서비스 신청
                    등등을 위해 아래와 같은 개인정보를 수집하고 있습니다.{" "}
                    <br></br>ο 수집항목 : 이름, 휴대전화번호 <br></br>ο 개인정보
                    수집방법 : 홈페이지(예약)
                  </p>
                </div>
              </S.InformationUse>
              {props?.checked &&
                props?.selectTime &&
                props?.totalPrice &&
                props?.themeId &&
                props?.cafeId &&
                props?.reservationDate &&
                props?.peopleNumber && (
                  <S.ButtonBox>
                    <Link href="/home">
                      <a>
                        <WebBlackButton type="button" title="돌아가기" />
                      </a>
                    </Link>

                    <Payment
                      title="결제하기"
                      type="button"
                      // 예약 데이터
                      ThemeMenuId={props?.ThemeMenuId}
                      cafeId={props?.cafeId}
                      // createReservationInput
                      reservationDate={props?.reservationDate}
                      memo={props?.memo}
                      // createPaymentInput
                      peopleNumber={props?.peopleNumber}
                      totalPrice={props?.totalPrice - props?.usePoint}
                      usePoint={props?.usePoint}
                    />
                  </S.ButtonBox>
                )}
            </S.FooterBox>
          )}
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
}
