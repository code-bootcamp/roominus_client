import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  padding: 1em 0em 2em 0em;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 2em;

    @media ${breakPoints.mobile} {
      font-size: 1.5em;
      margin: 0;
    }
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
  width: 25em;
  height: 35em;
  box-shadow: 10px 10px 39px rgba(183, 96, 202, 0.25);

  @media ${breakPoints.tablet} {
    width: 20em;
    height: 30em;
  }
`;
export const DataBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  border: 1px solid #a3a8b7;
  border-radius: 8px;
  width: 25em;
  height: 35em;
  gap: 2em;
  box-shadow: 10px 10px 39px rgba(183, 96, 202, 0.25);

  & span {
    font-size: 1.2em;

    @media ${breakPoints.tablet} {
      font-size: 1em;
    }
  }

  @media ${breakPoints.tablet} {
    width: 20em;
    height: 30em;
  }
`;

export const ThemeTitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5em;

  & span {
    color: #a3a8b7;
    font-size: 1.1em;

    @media ${breakPoints.tablet} {
      font-size: 0.9em;
    }
  }

  & h2 {
    font-size: 1.6em;
    font-weight: 700;

    @media ${breakPoints.tablet} {
      font-size: 1.3em;
    }
  }
`;

export const ThemeInfoBox = styled.div`
  width: 100%;
  padding-left: 1.8em;
  display: flex;
  gap: 0.5em;
  flex-direction: column;
  align-items: flex-start;

  @media ${breakPoints.tablet} {
    gap: 0em;
  }
`;

export const ClearTimeBox = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.8em;
  width: 90%;
`;
export const ClearTime = styled.span`
  color: #a3a8b7;
  font-size: 0.3em;
`;
export const QRcodeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
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
    width: 5.5em;
    height: 5.5em;
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
  color: #7457e8;
  font-size: 1em;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2em;
`;
