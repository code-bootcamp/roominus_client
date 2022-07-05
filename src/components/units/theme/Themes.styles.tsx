import styled from "@emotion/styled";

interface IGenreProps {
  isPicked?: Boolean;
  src?: string;
}

export const Container = styled.main`
  width: 100vw;
  height: 1000px;
  position: relative;

  left: calc(-50vw + 50%);

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  /* background-color: #26282c; */
  background: url("/img/inkback.jpeg") center/cover;
`;

export const Wrapper = styled.section``;

export const GenreList = styled.div``;

export const Genre = styled.button`
  font-size: 18px;
  width: 140px;
  height: 56px;
  border: 0px;
  border-radius: 50px;
  color: ${(props: IGenreProps) => (props.isPicked ? "white" : "#757575")};
  background-color: ${(props: IGenreProps) =>
    props.isPicked ? "#4A00E0" : "#DAD6E1"};
  margin: 5px;
`;

export const ThemeList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Theme = styled.li`
  width: 290px;
  height: 420px;
  padding: 10px 15px;
  background: url(${(props: IGenreProps) => props.src});
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

export const ThemeImg = styled.img`
  width: 290px;
  height: 420px;
`;

export const GenreTag = styled.div`
  width: 140px;
  height: 45px;
  border-radius: 8px;
  background-color: #492396b0;
  font-size: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Rank = styled.h4`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ShowMoreButton = styled.button`
  width: 344px;
  height: 56px;
  border-radius: 8px;
  font-size: 18px;
  color: white;
  background-color: #26282c;
`;
