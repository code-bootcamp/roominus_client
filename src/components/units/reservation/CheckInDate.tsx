import styled from "@emotion/styled";
import React, { useState } from "react";
import DatePicker from "../../commons/datepicker/DatePicker";

const Container = styled.div`
  position: relative;
  width: 50%;
  border: 1px solid black;

  .search-room-bar-date-label {
    font-size: 10px;
    font-weight: 800;
    margin-bottom: 4px;
    position: absolute;
    z-index: 1;
    left: 20px;
    top: 16px;
  }

  input {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 12px;
    font-weight: 600;
    text-align: center;
    outline: none;
    cursor: pointer;
  }
  > div {
    width: 100%;
    height: 100%;
    .react-datepicker-wrapper {
      width: 100%;
      height: 100%;
      .react-datepicker__input-container {
        width: 100%;
        height: 100%;
      }
    }
    .react-datepicker {
      display: flex;
    }
  }
`;

export default function SearchRoomCheckInDate() {
  // const { checkInDate, setCheckInDateDispatch } = useState();

  // //* 방문 날짜 변경
  // const onChangeCheckInDate = (date: Date | null) =>
  //   setCheckInDateDispatch(date);

  // return (
  //   <Container>
  //     <DatePicker
  //       selected={checkInDate}
  //       monthsShown={2}
  //       onChange={onChangeCheckInDate}
  //       selectsStart
  //       startDate={checkInDate}
  //       placeholderText="날짜를 선택해주세요"
  //       minDate={new Date()}
  //     />
  //   </Container>
  // );

  const [startDate, setStartDate] = useState(new Date());
  return (
    <Container>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        monthsShown={2}
        selectsStart
        minDate={new Date()}
        placeholderText="날짜를 선택해주세요"
      />
    </Container>
  );
}
