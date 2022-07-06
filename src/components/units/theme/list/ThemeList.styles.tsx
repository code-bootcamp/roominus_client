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

export const Wrapper = styled.section``;

export const GenreList = styled.div`
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
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

export const ThemeList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
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
