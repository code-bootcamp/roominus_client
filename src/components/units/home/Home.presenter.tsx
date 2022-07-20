import * as S from "./Home.styles";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CafeCard from "./cafecard/CafeCard";
import FAQ from "./faq/Faq";
import { useEffect, useState } from "react";
import ThemeCardComponent from "./themecard/ThemeCard";

export default function HomeUI(props) {
  const [windowSize, setWindowSize] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  const settings = {
    // dots: true,
    arrows: false,
    className: "center",
    // centerMode: true,
    centerPadding: "100px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000, //슬라이드가 지나가는 초
    autoplaySpeed: 2000, //한페이지에서 멈추는 초
    pauseOnHover: true,
    cssEase: "linear",
    // className: "center",
    // centerMode: false,
    // infinite: true,
    // centerPadding: "60px",
    // speed: 500,
    // autoplaySpeed: 3000,
    // dots: true,
    // autoplay: true,
    // infinite: true,
    // slidesToShow: 1,
  };
  return (
    <S.Wrapper>
      <S.BackGroundImg></S.BackGroundImg>
      <S.StoreBox>
        <S.TitleBox>
          <S.Title>신규 매장</S.Title>
          <Link href={"/cafe"}>
            <S.StoreListButton onClick={props.onClickMore}>
              더보기 {`>`}
            </S.StoreListButton>
          </Link>
        </S.TitleBox>
        {!windowSize && (
          <S.StoreImgboxes>
            {props.data?.fetchCafes.slice(0, 4).map((el: any) => (
              <span key={el.id} id={el.id} onClick={props.onClickCard(el)}>
                <CafeCard el={el} />
              </span>
            ))}
          </S.StoreImgboxes>
        )}
        {windowSize && (
          <S.StoreImgboxes>
            {props.data?.fetchCafes.slice(0, 2).map((el: any) => (
              <span key={el.id} id={el.id} onClick={props.onClickCard(el)}>
                <CafeCard el={el} />
              </span>
            ))}
          </S.StoreImgboxes>
        )}
      </S.StoreBox>
      <S.ThemeBoxes>
        <S.TitleBox>
          <S.Title>신규 테마</S.Title>
          <Link href={"/theme"}>
            <S.ThemeListButton>더보기 {`>`}</S.ThemeListButton>
          </Link>
        </S.TitleBox>
        {!windowSize && (
          <S.ThemeList>
            {props.fetchThemes?.fetchThemes.slice(0, 4).map((el) => (
              <div key={el.id}>
                <ThemeCardComponent el={el} />
              </div>
            ))}
          </S.ThemeList>
        )}
        {windowSize && (
          <S.ThemeList>
            {props.fetchThemes?.fetchThemes.slice(0, 2).map((el) => (
              <div key={el.id}>
                <ThemeCardComponent el={el} />
              </div>
            ))}
          </S.ThemeList>
        )}
      </S.ThemeBoxes>
      <S.AlarmCarouselBoxes>
        <S.Title>룸인어스 공지사항</S.Title>
        <S.StyledSlider {...settings}>
          <S.AlarmCarouselBox>
            <S.AlarmImgs src="/img/home/alarm1.webp" alt="alarm1" />
          </S.AlarmCarouselBox>
          <S.AlarmCarouselBox>
            <S.AlarmImgs src="/img/home/alarm2.webp" alt="alarm2" />
          </S.AlarmCarouselBox>
          <S.AlarmCarouselBox>
            <S.AlarmImgs src="/img/home/alarm3.webp" alt="alarm3" />
          </S.AlarmCarouselBox>
          <S.AlarmCarouselBox>
            <S.AlarmImgs src="/img/home/alarm4.webp" alt="alarm4" />
          </S.AlarmCarouselBox>
          <S.AlarmCarouselBox>
            <S.AlarmImgs src="/img/home/alarm5.webp" alt="alarm5" />
          </S.AlarmCarouselBox>
        </S.StyledSlider>
      </S.AlarmCarouselBoxes>
      <S.FaQBoxes>
        <S.Title>자주 묻는 질문(FAQ)</S.Title>
        <FAQ />
      </S.FaQBoxes>
    </S.Wrapper>
  );
}
