import { useRef } from "react";
import ReactToPrint from "react-to-print";
import ReservationSuccessUI from "./ReservationSuccess.presenter";
import { PrinterOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakPoints } from "../../../commons/styles/media";

const Container = styled.main`
  display: flex;
  flex-direction: column;
`;

const PrintBox = styled.div`
  width: 99%;
  display: flex;
  justify-content: flex-end;
`;

const Printer = styled(PrinterOutlined)`
  font-size: 1.8em;
  padding-top: 0.5em;
  color: #4a00e0e7;

  :hover {
    transform: scale(1.1);
  }
  transition: all 300ms ease-in-out;

  /* @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  } */
`;

export default function ReservationSuccess() {
  const componentRef = useRef(null);
  const router = useRouter();
  const link = `localhost:3000${router.asPath}`;

  return (
    <Container>
      <PrintBox>
        <ReactToPrint
          trigger={() => <Printer />}
          content={() => componentRef.current}
        />
      </PrintBox>
      <ReservationSuccessUI link={link} printRef={componentRef} />;
    </Container>
  );
}
