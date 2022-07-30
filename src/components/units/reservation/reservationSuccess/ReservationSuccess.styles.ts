import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1em;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1em;

  & h1 {
    font-size: 2em;
    margin: 0;

    @media ${breakPoints.mobile} {
      margin: 0;
    }
  }
`;

export const Calendar = styled(CalendarMonthOutlinedIcon)`
  :hover {
    cursor: pointer;
    color: #4a00e0e7;
  }
  color: black;
  margin-left: 0.1em;
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "GowunDodum-Regular";

  border-radius: 10px;
  gap: 1em;
  padding: 1em 0em 5em 0em;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 100%;
    gap: 2em;

    display: flex;
    flex-direction: column;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageDataBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
  width: 100%;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    gap: 3em;
  }
`;

export const TicketBox = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 30em;
  height: 40em;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(183, 96, 202, 0.25);
  background-color: #f2ebf5;

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 1.2em;
    height: 0.5em;
    width: 28em;
  }

  &:before {
    top: -0.31em;
    background: radial-gradient(
        circle,
        transparent,
        transparent 50%,
        #f2ebf5 50%,
        #f2ebf5 100%
      ) -0.44em -0.5em / 1em 1em repeat-x;
  }

  &:after {
    bottom: -5px;
    background: radial-gradient(
        circle,
        transparent,
        transparent 50%,
        #f2ebf5 50%,
        #f2ebf5 100%
      ) -0.44em -0.13em / 1em 1em repeat-x;
  }

  @media ${breakPoints.tablet} {
    width: 24em;
    height: 34em;

    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 18px;
      height: 6px;
      width: 22em;
    }
  }

  @media ${breakPoints.mobile} {
    width: 24em;
    height: 34em;

    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 18px;
      height: 6px;
      width: 22em;
    }
  }
`;

export const Image = styled.img`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: 6px solid #d8d8d8;
`;
export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: 6px solid #d8d8d8;
`;

export const Text = styled.span`
  width: 20em;
  font-family: "Helvetica", "Arial", sans-serif;
  font-size: 3em;
  font-weight: 900;
  text-transform: uppercase;
  color: #a08bf3;
  opacity: 0.2;
  transform: translate(-10px, -50px) rotate(-35deg);

  @media ${breakPoints.tablet} {
    width: 10em;
    font-size: 2.3em;
    transform: translate(10px, 70px) rotate(-40deg);
  }

  @media ${breakPoints.mobile} {
    width: 10em;
    font-size: 2.3em;
    transform: translate(10px, 70px) rotate(-40deg);
  }
`;

export const ThemeTitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  padding-left: 1.8em;

  & span {
    color: #a3a8b7;
    font-size: 1.3em;
    font-weight: 700;

    @media ${breakPoints.tablet} {
      font-size: 0.9em;
    }
  }

  & h2 {
    font-size: 1.8em;
    font-weight: 700;

    @media ${breakPoints.tablet} {
      font-size: 1.5em;
    }
  }
`;

export const ThemeInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  z-index: 1;

  width: 100%;
  padding-left: 1.8em;
  gap: 0.7em;
  font-size: 1.2em;

  @media ${breakPoints.tablet} {
    gap: 0em;
  }
`;

export const ClearTimeBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 95%;
  padding-bottom: 1em;
`;

export const ClearTime = styled.span`
  color: #a3a8b7;
  font-size: 0.9em;
  font-weight: 500;
`;

export const QRcodeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;

  @media ${breakPoints.mobile} {
    gap: 0;
  }
`;

export const QRcode = styled.div`
  :hover {
    transform: scale(1.1);
  }
  transition: all 300ms ease-in-out;
`;

export const NotionArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3em 0em 3em 0em;
`;

export const NoticeTitle = styled.span`
  font-size: 2.5em;

  @media ${breakPoints.mobile} {
    font-size: 2em;
  }
`;

export const NoticeBoxes = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3em;
  margin: 5em;

  @media ${breakPoints.tablet} {
    gap: 1em;
    margin: 3em;
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3em;
  }
`;

export const NoticeBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoticeImg = styled.img`
  height: 7em;
  padding-bottom: 1em;

  @media ${breakPoints.tablet} {
    height: 5.5em;
  }

  @media ${breakPoints.mobile} {
    height: 5em;
  }
`;

export const Notice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoticeSubject = styled.h2`
  background-color: black;
  color: white;
  border-radius: 15px;
  font-size: 1.25em;

  width: 9.5em;

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

export const NoticeDescription = styled.p`
  color: #26282c;
  font-size: 0.9em;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2em;
`;
