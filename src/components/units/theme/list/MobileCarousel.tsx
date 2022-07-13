import styled from "@emotion/styled";
import Slider from "react-slick";
import * as S from "./ThemeList.styles";

const Wrapper = styled.div`
  width: 300px;
`;

const MySlider = styled(Slider)`
  width: 100%;
`;

const SliderImg = styled.img`
  width: 290px;
  height: 420px;
  padding: 10px;
`;

const Theme = styled.div`
  /* position: absolute; */
  /* width: 100%;
  height: 100%; */
  width: 290px;
  height: 420px;
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
  padding: 10px;
`;

// const ImgGradient = styled.div`
//   /* width: 290px;
//   height: 420px;
//   background: linear-gradient(
//     180deg,
//     rgba(38, 40, 44, 0) 0%,
//     rgba(38, 40, 44, 0.14) 56.77%,
//     #26282c 100%
//   );
//   background-blend-mode: multiply; */
// `;

const GenreTag = styled.div`
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

const Rank = styled.div`
  padding: 5px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export default function MobileCarousel(props: any) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Wrapper>
      <MySlider {...settings}>
        {props.data?.fetchThemes.map((el: any, i: number) => (
          <Theme key={i} src={el.mainImg} onClick={props.onClickTheme(el)}>
            <Rank>
              난이도
              <S.Star disabled defaultValue={el.rank} />
            </Rank>

            <GenreTag>#{el?.genre.name}</GenreTag>
          </Theme>
        ))}
      </MySlider>
    </Wrapper>
  );
}
