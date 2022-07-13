import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";

const NoBox = styled.div`
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Notice = styled.p`
  font-size: 1.5em;
  padding: 2em;
`;

const Sorry = styled.img`
  width: 8em;
`;
export default function NoReservation() {
  return (
    <>
      <Box
        width={1}
        height={650}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        <NoBox>
          <Sorry src="/img/reservation/sorry.png" />

          <Notice>
            앗! <br></br>현재 이 테마를 운영중인 매장이 없습니다! <br></br>다른
            테마를 선택해주세요!
          </Notice>
        </NoBox>
        <Link href="/theme">
          <WebBlackButton title="돌아가기"></WebBlackButton>
        </Link>
      </Box>
    </>
  );
}
