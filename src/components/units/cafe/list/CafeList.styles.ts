import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
  }
`;

export const SearchWrapper = styled.section`
  width: 100vw;
  height: 14.38em;
  background: url("/img/layout/banner.webp") center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; //SearchWrapper만 화면 끝까지 늘리기
  left: calc(-50vw + 50%);

  @media ${breakPoints.tablet} {
    font-size: 0.8em;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
    height: 150px;
  }
`;

export const SearchBox = styled.div`
  width: 70vw;
  height: 70%;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;

  @media ${breakPoints.tablet} {
    width: 80vw;
  }

  @media ${breakPoints.mobile} {
    height: 75%;
  }
`;

export const SearchDetailBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakPoints.mobile} {
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DetailBox = styled.div`
  width: 40%;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakPoints.tablet} {
    width: 45%;
  }

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 85%;
  }
`;

export const LocationSelect = styled.select`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    border: none;
    outline: none;
    background-color: white;
    width: 80%;
    height: 40px;
    font-size: 1.2em;
  }
`;

export const DetailTitle = styled.h3`
  width: 3em; //3.5vw
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.4em;

  @media ${breakPoints.tablet} {
    width: 15%;
    font-size: 1.3em;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

interface ILocationButtonProps {
  total?: boolean;
  gangnam?: boolean;
  hongdae?: boolean;
  kondae?: boolean;
}

export const LocationButtonTotal = styled.button`
  width: 19%;
  height: 45px;
  margin-right: 0.5em;
  border: none;
  background-color: #a3a8b7;
  color: white;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props: ILocationButtonProps) =>
    props.total ? "#4a00e0e7" : "#a3a8b7"};

  @media ${breakPoints.mobile} {
    display: none;
    width: 35%;
    height: 30px;
  }
`;

export const LocationButtonGangnam = styled.button`
  width: 19%;
  height: 45px;
  margin-right: 0.5em;
  border: none;
  background-color: #a3a8b7;
  color: white;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props: ILocationButtonProps) =>
    props.gangnam ? "#4a00e0e7" : "#a3a8b7"};

  @media ${breakPoints.mobile} {
    display: none;
    width: 35%;
    height: 30px;
  }
`;

export const LocationButtonHongdae = styled.button`
  width: 19%;
  height: 45px;
  margin-right: 0.5em;
  border: none;
  background-color: #a3a8b7;
  color: white;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props: ILocationButtonProps) =>
    props.hongdae ? "#4a00e0e7" : "#a3a8b7"};

  @media ${breakPoints.mobile} {
    display: none;
    width: 35%;
    height: 30px;
  }
`;

export const LocationButtonKondae = styled.button`
  width: 19%;
  height: 45px;
  margin-right: 0.5em;
  border: none;
  background-color: #a3a8b7;
  color: white;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props: ILocationButtonProps) =>
    props.kondae ? "#4a00e0e7" : "#a3a8b7"};

  @media ${breakPoints.mobile} {
    display: none;
    width: 35%;
    height: 30px;
  }
`;

export const LocationOption = styled.option`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    background-color: #ffffff;
    border-radius: 20px;
  }
`;

export const DetailContents = styled.input`
  width: 70%;
  height: 45px;
  border: none;
  outline: none;
  border-bottom: 1px solid #bdbdbd;
  padding-left: 0.5em;
  font-size: 1.1em;
  margin-left: 1em;

  @media ${breakPoints.mobile} {
    width: 80%;
    font-size: 1.2em;
  }
`;

export const ButtonBox = styled.div`
  width: 100%;
  height: 50px;
  gap: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Button = styled.button`
  width: 15%;
  margin-right: 1em;
  background-color: #a5a0fb;
  border: none;
  color: white;
`;

export const ListWrapper = styled.section`
  width: 100%;
`;

export const BestListBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.5em;
  width: 100%;
  height: 4em;
  margin: 1em 0em;

  & h1 {
    font-weight: 700;
    font-size: 1.5em;
    margin: 0;
  }

  @media ${breakPoints.mobile} {
    margin-top: 3em;
    width: 75%;

    & h1 {
      font-weight: 700;
      font-size: 2.5em;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;
export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 1em 0em 1em 0em;

  @media ${breakPoints.mobile} {
    display: none;
    height: 70px;
  }
`;

export const Line = styled.div`
  margin: 2em 0em;
  border-bottom: 0.1em solid #c2c2c2;
`;

export const Flex = styled.div`
  margin-bottom: 2em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Etc = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;

  @media ${breakPoints.tablet} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${breakPoints.mobile} {
    margin-top: 2em;
    width: 75%;

    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const MoreButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MoreButton = styled.button`
  width: 344px;
  height: 56px;
  border-radius: 10px;
  color: white;
  background-color: #26282c;
  font-weight: 700;
  cursor: pointer;
  margin: 2em 0em 2em 0em;
  font-size: 1.3em;

  @media ${breakPoints.mobile} {
    width: 75%;
    height: 3.5em;
    margin-bottom: 2em;
    font-size: 2em;
  }
`;
