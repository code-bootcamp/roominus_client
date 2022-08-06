import * as S from "./Home.styles";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CafeCard from "./cafecard/CafeCard";
import FAQ from "./faq/Faq";
import ThemeCardComponent from "./themecard/ThemeCard";
import { IHomeUIProps } from "./Home.type";
import { useEffect, useState } from "react";
import Notice from "./notice";
import BestBoard from "./board";

export default function HomeUI(props: IHomeUIProps) {
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
    speed: 6000, //슬라이드가 지나가는 초
    autoplaySpeed: 4000, //한페이지에서 멈추는 초
    pauseOnHover: true,
    cssEase: "linear",
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
            {props.fetchThemes?.fetchThemes.slice(0, 4).map((el: any) => (
              <div key={el.id}>
                <ThemeCardComponent el={el} />
              </div>
            ))}
          </S.ThemeList>
        )}
        {windowSize && (
          <S.ThemeList>
            {props.fetchThemes?.fetchThemes.slice(0, 2).map((el: any) => (
              <div key={el.id}>
                <ThemeCardComponent el={el} />
              </div>
            ))}
          </S.ThemeList>
        )}
      </S.ThemeBoxes>
      <S.AlarmCarouselBoxes>
        <S.Title>이벤트</S.Title>
        <S.StyledSlider {...settings}>
          <S.AlarmCarouselBox>
            <S.AlarmImgs
              src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990936/public/home/alarm1_rtnjwj.webp"
              alt="alarm1"
            />
          </S.AlarmCarouselBox>
          <S.AlarmCarouselBox>
            <S.AlarmImgs
              src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990936/public/home/alarm2_isxkc4.webp"
              alt="alarm2"
            />
          </S.AlarmCarouselBox>
          <S.AlarmCarouselBox>
            <S.AlarmImgs
              src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990936/public/home/alarm3_o9qibl.webp"
              alt="alarm3"
            />
          </S.AlarmCarouselBox>
          <S.AlarmCarouselBox>
            <S.AlarmImgs
              src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990936/public/home/alarm4_imqf9r.webp"
              alt="alarm4"
            />
          </S.AlarmCarouselBox>
          <S.AlarmCarouselBox>
            <S.AlarmImgs
              src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990936/public/home/alarm5_wpun7o.webp"
              alt="alarm5"
            />
          </S.AlarmCarouselBox>
        </S.StyledSlider>
      </S.AlarmCarouselBoxes>
      <S.BoardBox>
        <S.TitleBox>
          <S.Title>현재 인기글</S.Title>
          <Link href={"/community"}>
            <S.ThemeListButton>더보기 {`>`}</S.ThemeListButton>
          </Link>
        </S.TitleBox>

        <BestBoard />
      </S.BoardBox>
      <S.FaQBoxes>
        <S.Title>자주 묻는 질문(FAQ)</S.Title>
        <FAQ />
      </S.FaQBoxes>
      <S.NoticeBoxes>
        <S.Title>공지사항</S.Title>
        <Notice />
      </S.NoticeBoxes>
    </S.Wrapper>
  );
}
