import styled from "@emotion/styled";
import { Box } from "@material-ui/core";

const NoBox = styled.div`
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Notice = styled.p`
  font-size: 1.5em;
  padding-top: 1em;
`;

const Sorry = styled.img`
  width: 8em;
`;
export default function NoReservation() {
  return (
    <Box
      width={1}
      height={300}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      paddingTop={10}
    >
      <NoBox>
        <Sorry src="/img/reservation/sorry.webp" />

        <Notice>
          앗! <br></br>현재 이 테마는 예약이 불가능합니다! <br></br>다른 테마를
          선택해주세요!
        </Notice>
      </NoBox>
    </Box>
  );
}
