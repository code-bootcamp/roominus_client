import styled from "@emotion/styled";
import Slider from "react-slick";
import { ICarouselProps, IFetchThemes } from "./ThemeList.types";
import { v4 as uuidv4 } from "uuid";

const Wrapper = styled.div`
  width: 100%;
`;

const MySlider = styled(Slider)`
  width: 100%;
  overflow-x: hidden;
`;

const Theme = styled.img`
  padding: 10px;
  height: 300px;
`;

export default function MobileCarousel(props: ICarouselProps) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 355,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <MySlider {...settings}>
        {props.data?.map((el: IFetchThemes, i: number) => (
          <Theme
            key={uuidv4()}
            src={el.mainImg}
            onClick={props.onClickTheme(el)}
          ></Theme>
        ))}
      </MySlider>
    </Wrapper>
  );
}
