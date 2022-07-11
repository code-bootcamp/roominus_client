import styled from "@emotion/styled";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";

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
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 100%;
    font-size: 0.5em;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  padding: 2em 0px;
`;

export const SearchBox = styled.div`
  width: 100%;
  height: 60px;
  padding: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dad6e1;
  border-radius: 30px;
  box-shadow: 0px 4px 4px #dad6e1;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: transparent;
  padding: 10px 15px;
  border-style: none;
  font-size: 1.1em;
  color: #d9d6e0;
  border-collapse: collapse;
  caret-color: #4a00e0;
  color: #4a00e0;
  &:focus {
    outline: none;
  }
`;

export const SearchInputUnderline = styled.span`
  display: inline-block;
  height: 2px;
  background-color: dodgerblue;
`;

export const SearchButton = styled.button`
  width: 4em;
  height: 2.5em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(142, 45, 226, 1) 30%,
      rgba(74, 0, 224, 1) 100%
    );
  }
  background-color: #4a00e0;
  color: #ffffff;
`;
export const GenreList = styled.div`
  padding: 20px 0px;
  @media ${breakPoints.mobile} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(110px, auto));
    grid-gap: 0px 30px;
    align-items: center;
  }
`;

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

// -------------------------------
export const FlipDiv = styled.div`
  width: 200px;
  height: 250px;
  position: relative;
  perspective: 1100px;
  margin: 2rem;
  :hover {
    transform: rotateY(180deg);
  }
`;

export const CardDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
  :hover {
    transform: rotateY(180deg);
  }
`;

export const FrontBackDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const FrontDiv = styled(FrontBackDiv)`
  background-color: red;
`;

export const BackDiv = styled(FrontBackDiv)`
  background-color: blue;
  transform: rotateY(180deg);
`;
// -------------------------------

export const ThemeList = styled.div`
  padding: 20px 0px;
  display: grid;
  /* grid-template-columns: 1fr 1fr 1fr 1fr; */
  grid-template-columns: repeat(auto-fill, minmax(290px, auto));
  /* grid-template-rows: repeat(auto-fill, minmax(420px, auto)); */
  /* grid-template-rows: repeat(3, minmax(400px, auto)); */
  row-gap: 30px;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Flip = styled.div`
  width: 290px;
  height: 420px;
  position: relative;

  :hover {
    /* transform: rotateY(180deg); */
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 1s;
  transform-style: preserve-3d;

  :hover {
    transform: rotateY(180deg);
  }
`;

export const defaultDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
`;

export const Theme = styled(defaultDiv)`
  position: absolute;
  width: 100%;
  height: 100%;
  /* width: 290px;
  height: 420px; */
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  background-blend-mode: multiply;
  background: linear-gradient(
      180deg,
      rgba(38, 40, 44, 0) 0%,
      rgba(38, 40, 44, 0.14) 75%,
      #26282c 100%
    ),
    url(${(props: IGenreProps) => props.src});
  background-size: 290px 420px;
`;

export const ThemeBack = styled(defaultDiv)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${(props: IGenreProps) => props.src});
  background-size: 290px 420px;
  transform: rotateY(180deg);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ThemeTitle = styled.div`
  color: white;
  text-align: center;
  font-size: 1.8em;
  text-shadow: 0 0 10px #fffbcb, 0 0 20px #fffbcb, 0 0 30px #fffbcb;
  word-break: break-all;
`;

export const ThemeInfo = styled.div`
  color: white;
  text-align: left;
`;
export const ImgGradient = styled.div`
  /* width: 290px;
  height: 420px;
  background: linear-gradient(
    180deg,
    rgba(38, 40, 44, 0) 0%,
    rgba(38, 40, 44, 0.14) 56.77%,
    #26282c 100%
  );
  background-blend-mode: multiply; */
`;

export const GenreTag = styled.div`
  width: 80px;
  height: 30px;
  border-radius: 8px;
  background-color: #220d4daf;
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const Rank = styled.div`
  padding: 5px;
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
  border: transparent;
  background-color: #26282c;
`;

export const Toggle = styled.div``;
export const ToggleMenuWrapper = styled.ul`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    flex-direction: column;
    text-align: center;
    font-size: 2em;
    width: 100%;
    padding: 15px;
  }
`;

export const ToggleMenu = styled.li`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;
export const Menu = styled(MenuOutlined)`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    font-size: 4em;
  }
`;

export const Close = styled(CloseOutlined)`
  display: none;

  @media ${breakPoints.mobile} {
    display: block;
    font-size: 3em;
  }
`;
