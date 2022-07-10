import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { FormOutlined } from "@ant-design/icons";

export const Container = styled.main`
  padding: 2em 0em 2em 0em;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
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

  border: 1px solid darkgray;
  border-radius: 10px;
  gap: 1em;
  padding: 1em;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;

    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 3em;
  transform: rotate(270deg);

  @media ${breakPoints.tablet} {
    font-size: 2em;
  }
  @media ${breakPoints.mobile} {
    transform: rotate(0deg);
  }
`;

export const IamgeDataBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  width: 100%;
`;

export const Image = styled.img`
  border-radius: 8px;
  width: 15em;

  @media ${breakPoints.tablet} {
    width: 15em;
  }
  @media ${breakPoints.mobile} {
    width: 13.8em;
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
    padding: 0.5em;
  }
`;

export const Barcode = styled.img`
  width: 10em;
  transform: rotate(90deg);

  @media ${breakPoints.tablet} {
    width: 7em;
  }
  @media ${breakPoints.mobile} {
    transform: rotate(0deg);
    width: 90%;
    height: 50px;
  }
`;

export const NotionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 5em 0em 3em 0em;
`;

export const NoticeTitle = styled.span`
  border-top: 2px solid #b2b2b2;
  font-size: 2.5em;
  margin-bottom: 10px;

  @media ${breakPoints.mobile} {
    font-size: 2em;
  }
`;

export const NoticeImg = styled.img`
  height: 15.63em;

  @media ${breakPoints.tablet} {
    height: 12em;
  }

  @media ${breakPoints.mobile} {
    height: 6em;
  }
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
