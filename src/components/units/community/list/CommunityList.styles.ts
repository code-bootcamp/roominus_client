import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0em 0em 2em 0em;

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.5em;
  width: 100%;
  height: 4em;
  margin-top: 1em;

  & h1 {
    font-weight: 700;
    font-size: 1.5em;
    margin: 0;
  }

  @media ${breakPoints.mobile} {
    width: 75%;

    & h1 {
      font-weight: 700;
      font-size: 1.3em;
    }
  }
`;
export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 1em 0em 1em 0em;
`;
export const CountBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 1.1em;
  padding-bottom: 0.5em;

  & span {
    font-size: 1.1em;
  }

  @media ${breakPoints.mobile} {
    width: 75%;

    & span {
      font-size: 1em;
    }
  }
`;

export const Etc = styled.ul`
  margin-bottom: 0px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1em;

  @media ${breakPoints.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakPoints.mobile} {
    width: 75%;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const ItemBackground = styled.li`
  width: 100%;
  height: 320px;
  background-color: #ffffff;
  border: 1px solid #d9d6e0;
  box-shadow: 0px 4px 4px rgba(217, 214, 224, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  :hover {
    transform: scale(1.02);
  }
  transition: all 250ms ease-in-out;

  @media ${breakPoints.mobile} {
    height: 380px;
  }
`;

export const Picture = styled.img`
  width: 100%;
  height: 220px;
  border-radius: 8px 8px 0px 0px;
  cursor: pointer;
  /* object-fit: cover; */

  @media ${breakPoints.mobile} {
    height: 280px;
  }
`;

export const InfoBox = styled.div`
  width: 85%;
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NameDateBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DatePickBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const WriteName = styled.h3`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const BoardName = styled.h3`
  font-size: 1.3em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PickBox = styled.div`
  height: 2em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PickCount = styled.p`
  margin-bottom: 0px;
  height: 2em;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonBox = styled.div`
  margin: 1em 0em;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media ${breakPoints.mobile} {
    width: 70%;
  }
`;

export const PaginationsWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${breakPoints.mobile} {
    margin-top: 2em;
  }
`;

export const RedHeart = styled(FontAwesomeIcon)`
  font-size: 17px;
  color: #e35d5b;
  margin-right: 0.3em;
`;
