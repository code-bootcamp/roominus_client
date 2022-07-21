import styled from "@emotion/styled";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rate } from "antd";

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
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 40px;
  }
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

export const GenreList = styled.div`
  padding: 20px 0px;
  @media ${breakPoints.mobile} {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(70px, auto));
    grid-gap: 0px 30px;
    align-items: center;
  }
`;

export const Genre = styled.button`
  font-size: 18px;
  width: 138px;
  height: 56px;
  border: 0px;
  border-radius: 50px;
  color: ${(props: IGenreProps) => (props.isPicked ? "white" : "#757575")};
  background-color: ${(props: IGenreProps) =>
    props.isPicked ? "#4A00E0" : "#DAD6E1"};
  margin: 5px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 100px;
    height: 45px;
  }
`;

export const MySlider = styled(Slider)`
  width: 100%;
`;

export const SliderImg = styled.img`
  width: 290;
  height: 420px;
  padding: 10px;
`;

export const ThemeList = styled.div`
  padding: 20px 0px;
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fill, minmax(260px, auto));
  /* grid-template-rows: repeat(3, minmax(400px, auto)); */

  column-gap: 30px;
  row-gap: 30px;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Flip = styled.div`
  width: 270px;
  height: 400px;
  position: relative;

  :hover {
    cursor: pointer;
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
  font-size: 0.7em;
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
  background-size: 270px 400px;
`;

export const ThemeBack = styled(defaultDiv)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${(props: IGenreProps) => props.src});
  background-size: 270px 400px;
  transform: rotateY(180deg);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ThemeTitle = styled.div`
  color: white;
  text-align: center;
  font-size: 2em;
  text-shadow: 0 0 10px #fffbcb, 0 0 20px #fffbcb, 0 0 30px #fffbcb;
  word-break: break-all;
`;

export const ThemeInfo = styled.div`
  font-size: 1.2em;
  color: white;
  text-align: left;
`;

export const GenreTag = styled.div`
  width: 5em;
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

export const Star = styled(Rate)`
  color: #7556ee;
  font-size: 15px;
  padding: 0px;
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
  cursor: pointer;
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

export const MobileList = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1.5em;
`;
export const MobileGenre = styled.h3``;
