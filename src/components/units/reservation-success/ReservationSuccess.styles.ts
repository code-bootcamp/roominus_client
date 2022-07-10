import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { FormOutlined } from "@ant-design/icons";

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

export const From = styled(FormOutlined)`
  font-size: 2em;
  padding-bottom: 0.5em;
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

  border: 1px solid darkgray;
  border-radius: 10px;
  gap: 1em;
  padding: 1em;

  @media ${breakPoints.tablet} {
    width: 100%;
    height: 100%;
    gap: 2em;

    display: flex;
    flex-direction: column;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
  }
`;

export const TicketTitleBox = styled.div`
  display: flex;
  align-items: center;
  transform: rotate(270deg);

  @media ${breakPoints.tablet} {
    transform: rotate(0deg);
  }
  @media ${breakPoints.mobile} {
    transform: rotate(0deg);
  }
`;

export const Title = styled.span`
  font-size: 1.8em;
  font-family: "PressStart2P";
`;

export const IamgeDataBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  width: 100%;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 15em;

  @media ${breakPoints.tablet} {
    width: 15em;
  }
  @media ${breakPoints.mobile} {
    width: 11em;
  }
`;
export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid darkgray;
  border-radius: 8px;
  width: 50%;

  font-size: 1em;
  padding: 1em;

  @media ${breakPoints.tablet} {
    padding: 0.5em;
  }

  @media ${breakPoints.mobile} {
    width: auto;
  }
`;

export const Barcode = styled.div`
  background: url("/img/reservation/barcode.png") center/cover;

  width: 28.13em;
  height: 6.25em;
  transform: rotate(90deg);

  @media ${breakPoints.tablet} {
    transform: rotate(0deg);
  }
  @media ${breakPoints.mobile} {
    transform: rotate(0deg);
    width: 250px;
    height: 35px;
  }
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
  border-top: 2px solid #b2b2b2;
  font-size: 2.5em;

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
  width: 150px;
  height: 150px;
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

  width: 8em;
  margin-bottom: 1em;

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

export const NoticeDescription = styled.p`
  color: darkgray;
  font-size: 0.88em;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  padding: 1em 0em 1em 0em;
`;

export const CancelBtn = styled.button`
  width: 100px;
  height: 4em;
  border-radius: 10px;
  font-size: 1em;
  border: none;
  color: white;
  background-color: #b2b2b2;
  cursor: pointer;

  margin-right: 0.5em;
`;

export const SubmitBtn = styled.button`
  width: 100px;
  height: 4em;
  border-radius: 10px;
  font-size: 1em;
  border: none;
  color: white;
  background-color: #4a00e0;
  cursor: pointer;

  margin-left: 0.5em;
`;

export const ButtonTitle = styled.a`
  color: white;
`;
