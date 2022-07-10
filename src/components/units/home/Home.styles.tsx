import styled from "@emotion/styled";
import {
  EnvironmentOutlined,
  CaretDownOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackGroundImg = styled.div`
  width: 100vw;
  height: 38em;
  background: url("/img/home/home.png") center/cover;
  margin-bottom: 2em;

  @media ${breakPoints.mobile} {
    height: 15em;
  }
`;

export const StoreBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: lightgreen; */

  @media ${breakPoints.mobile} {
    width: 75%;
  }
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 600;
`;

export const StoreListButton = styled.span`
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  :hover {
    transform: translatex(0.3em);
  }
  transition: all 250ms ease-in-out;
`;
export const StoreImgboxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2em;

  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
  /* background-color: lightcoral; */

  @media ${breakPoints.tablet} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakPoints.mobile} {
    width: 75%;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const StoreImgbox = styled.div`
  position: relative;
  width: 30%;
  height: 14.6em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 1.5em;
  border-radius: 10px;
  background-color: white;
  /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */

  :hover {
    transform: translateY(-0.3em);
  }
  transition: all 250ms ease-in-out;
`;
export const StoreImgs = styled.img`
  width: 9em;
  height: 10em;
  border-radius: 10px;
`;
export const StoreName = styled.div`
  font-size: 1em;
  font-weight: 700;
`;
export const LocationBox = styled.div`
  width: 3em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #26272c;
  color: white;
  font-size: 0.8em;
  position: absolute;
  top: 2em;
  left: 0em;
  z-index: 2;
`;
export const Location = styled(EnvironmentOutlined)`
  font-size: 0.8em;
  color: white;
`;

export const ThemeBoxes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
// export const ThemeTitleBox = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-end;
// `;

export const ThemeListButton = styled.span`
  font-size: 1em;
  font-weight: 600;
  cursor: pointer;
  :hover {
    transform: translatex(0.3em);
  }
  transition: all 250ms ease-in-out;
`;
export const ThemeImgboxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2em;
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
  /* background-color: lightblue; */

  @media ${breakPoints.tablet} {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakPoints.mobile} {
    width: 75%;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const ThemeImgbox = styled.div`
  position: relative;
  width: 100%;
  height: 20em;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  /* padding-top: 1.5em; */
  /* border-radius: 20px; */
  /* box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px; */

  :hover {
    transform: translateY(-0.3em);
  }
  transition: all 250ms ease-in-out;
`;
export const ThemeImgs = styled.img`
  position: absolute;
  top: 0em;
  left: 0em;
  width: 100%;
  height: 20em;
  /* border-radius: 10px; */
`;
export const ThemeTitle = styled.div`
  font-size: 1em;
  font-weight: 700;
`;
export const GenreTag = styled.div`
  position: absolute;
  bottom: 3em;
  left: 1em;
  width: 5em;
  height: 1.8em;
  border-radius: 8px;
  background-color: #220d4daf;
  font-size: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

// export const RateBox = styled.div`
//   position: absolute;
//   bottom: 1em;
//   left: 1em;
//   display: flex;
//   flex-direction: row;
//   background-color: red;
// `;

export const RateTitle = styled.span`
  position: absolute;
  bottom: 1em;
  left: 1em;
  /* color: white; */
  font-weight: 500;
`;

export const OpenBtnArrow = styled(CaretDownOutlined)`
  z-index: 5;
`;
export const CloseBtnArrow = styled(CaretRightOutlined)`
  z-index: 5;
`;
export const AlarmCarouselBoxes = styled.div`
  width: 100%;
  /* height: 10em; */
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin-bottom: 3em;

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 75%;
  }
`;
export const AlarmCarouselBox = styled.div`
  width: 100%;
  /* height: 53em;
  background-color: red; */

  /* @media ${breakPoints.mobile} {
    height: 20em;
  } */
`;
export const AlarmTitle = styled.div`
  font-size: 1.3em;
  font-weight: 700;
`;
export const AlarmImgs = styled.img`
  width: 100%;
  height: 55%;
`;
export const FaQBoxes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;

  @media ${breakPoints.mobile} {
    width: 75%;
  }
`;
export const FaQTitle = styled.div`
  font-size: 1em;
  font-weight: 700;
`;
export const FaQSmallBoxes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #bdbdbd;
  border-radius: 10px;
  padding: 1em 1em 1em 1em;
`;

export const FaQBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FaQTitleBox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const QestionTitle = styled.div`
  font-size: 1em;
  font-weight: 500;
`;

export const FaQs = styled.pre`
  white-space: pre-wrap;
  font-size: 0.8em;
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 1em 1em 1em 1em;
`;
