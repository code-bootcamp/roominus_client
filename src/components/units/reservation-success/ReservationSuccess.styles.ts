import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.main`
  padding: 2em 0em 2em 0em;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  padding-bottom: 1em;
`;

export const ContainerTitle = styled.h1`
  font-size: 2em;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
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
  padding: 2em 0em 5em 0em;

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

export const IamgeDataBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;
  width: 100%;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 22em;
  height: 30em;
  box-shadow: 10px 10px 39px rgba(183, 96, 202, 0.25);
`;
export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  border: 1px solid darkgray;
  border-radius: 8px;
  width: 22em;
  height: 30em;
  gap: 2em;
  box-shadow: 10px 10px 39px rgba(183, 96, 202, 0.25);

  & span {
    font-size: 1.2em;
  }
`;

export const BarcodeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
`;

export const Barcode = styled.div`
  background: url("/img/reservation/qr-code.png") center/cover;
  width: 7em;
  height: 7em;
`;

export const ThemeTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

  .span {
    color: darkgray;
  }

  h2 {
    font-size: 2em;
  }
`;

export const ThemeInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
`;

export const NotionArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-top: 1px solid darkgray;
  padding: 3em 0em 3em 0em;
`;

export const NoticeTitle = styled.span`
  font-size: 2.5em;
  width: 80%;

  @media ${breakPoints.mobile} {
    font-size: 2em;
  }
`;

export const NoticeBoxs = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 1.5em;
  gap: 5em;

  @media ${breakPoints.tablet} {
    flex-wrap: wrap;
    gap: 1em;
  }

  @media ${breakPoints.mobile} {
    flex-wrap: wrap;
    gap: 1em;
  }
`;

export const NoticeBox = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 40%;
  }

  @media ${breakPoints.mobile} {
    width: auto;
  }
`;

export const NoticeImg = styled.img`
  width: 8em;
  height: 8em;
  padding-bottom: 1em;

  @media ${breakPoints.tablet} {
    width: 8em;
  }

  @media ${breakPoints.mobile} {
    width: 5em;
    height: 6.25em;
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
  color: darkblue;
  font-size: 1em;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2em;
`;
