import * as S from "./Home.styles";
import Link from "next/link";
import { Rate } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ListCards from "../cafe/list/card/ListCards";
import CafeCard from "./cafecard/CafeCard";
import FAQ from "./faq/Faq";
import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { useEffect, useState } from "react";



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
    // dots: false,
    // arrows: false,
    // className: "center",
    // centerMode: true,
    // centerPadding: "100px",
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // speed: 4000,
    // autoplaySpeed: 4000,
    // pauseOnHover: true,
    // cssEase: "linear",
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplaySpeed: 3000,
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <S.Wrapper>
      <S.BackGroundImg></S.BackGroundImg>
      <S.StoreBox>
        <S.TitleBox>
          <S.Title>매장</S.Title>
          <Link href={"/cafe"}>
            <S.StoreListButton>더보기 ></S.StoreListButton>
          </Link>
        </S.TitleBox>
        {!windowSize && (
        <S.StoreImgboxes>
          {/* <S.StoreImgbox>
            <S.StoreImgs src="/img/cafe/cafe.jpeg" alt="bestStore1" />
            <S.StoreName>SOLVER - 홍대점</S.StoreName>
            <S.LocationBox>
              <S.Location />
              홍대
            </S.LocationBox>
          </S.StoreImgbox> */}
          {new Array(4).fill(1).map((el) => (
            <span key={el}>
              <CafeCard />
            </span>
          ))}
        </S.StoreImgboxes>
        )}
         {windowSize && (
        <S.StoreImgboxes>
          {new Array(2).fill(1).map((el) => (
            <span key={el}>
              <CafeCard />
            </span>
          ))}
        </S.StoreImgboxes>
        )}
      </S.StoreBox>
      <S.ThemeBoxes>
        <S.TitleBox>
        <S.Title>테마</S.Title>
          <Link href={"/theme"}>
            <S.ThemeListButton>더보기 ></S.ThemeListButton>
          </Link>
        </S.TitleBox>
        {!windowSize && (

        <S.ThemeImgboxes>
        {new Array(4).fill(1).map((el) => (
          <span key={el}>
          <S.ThemeImgbox>
            <S.ThemeImgs src="/img/theme/월야애담.webp" alt="bestTheme1" />
            <S.GenreTag>#미스테리</S.GenreTag>
            {/* <S.RateBox> */}
              <S.RateTitle>난이도</S.RateTitle>
              <Rate
                onChange={props.setValue}
                value={props.value}
                style={{
                  color: "#8B54C1",
                  position: "absolute",
                  bottom: "0.75em",
                  left: "3.2em",
                }}
              />
            {/* </S.RateBox> */}
          </S.ThemeImgbox>
          </span>
        ))}
        </S.ThemeImgboxes>
        )}
         {windowSize && (
          <S.ThemeImgboxes>
          {new Array(2).fill(1).map((el) => (
            <span key={el}>
            <S.ThemeImgbox>
              <S.ThemeImgs src="/img/theme/월야애담.webp" alt="bestTheme1" />
              <S.GenreTag>#미스테리</S.GenreTag>
              {/* <S.RateBox> */}
                <S.RateTitle>난이도</S.RateTitle>
                <Rate
                  onChange={props.setValue}
                  value={props.value}
                  style={{
                    color: "#8B54C1",
                    position: "absolute",
                    bottom: "0.75em",
                    left: "3.2em",
                  }}
                />
              {/* </S.RateBox> */}
            </S.ThemeImgbox>
            </span>
          ))}
          </S.ThemeImgboxes>
          )}
      </S.ThemeBoxes>
      <S.AlarmCarouselBoxes>
      <S.Title>룸인어스 공지사항</S.Title>
        <Slider {...settings}>
          <S.AlarmCarouselBox>
            <S.AlarmImgs src="/img/home/alarm1.png" alt="alarm1" />
          </S.AlarmCarouselBox>
          <S.AlarmCarouselBox>
            <S.AlarmImgs src="img/home/alarm2.png" alt="alarm2" />
          </S.AlarmCarouselBox>
          <S.AlarmCarouselBox>
            <S.AlarmImgs src="/img/home/alarm3.png" alt="alarm3" />
          </S.AlarmCarouselBox>
        </Slider>
      </S.AlarmCarouselBoxes>
      <S.FaQBoxes>
        <S.Title>자주 묻는 질문(FAQ)</S.Title>
        {/* <S.FaQSmallBoxes> */}
          <FAQ />
          {/* <S.FaQBox>
            <S.FaQTitleBox>
              {props.isOpened1 && (
                <S.OpenBtnArrow onClick={props.onClickOpenQuestion1} />
              )}
              {!props.isOpened1 && (
                <S.CloseBtnArrow onClick={props.onClickCloseQuestion1} />
              )}
              <S.QestionTitle>룸인어스 란?</S.QestionTitle>
            </S.FaQTitleBox>
            {props.isOpened1 && (
              <S.FaQs>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                fuga ratione velit voluptatibus debitis iure cupiditate
                consequuntur quasi, ducimus sunt, quia amet, dolor placeat
                voluptate blanditiis laudantium veritatis repellendus at.
              </S.FaQs>
            )}
          </S.FaQBox>
          <S.FaQBox>
            <S.FaQTitleBox>
              {props.isOpened2 && (
                <S.OpenBtnArrow onClick={props.onClickOpenQuestion2} />
              )}
              {!props.isOpened2 && (
                <S.CloseBtnArrow onClick={props.onClickCloseQuestion2} />
              )}

              <S.QestionTitle>환불 가능 한가요?</S.QestionTitle>
            </S.FaQTitleBox>
            {props.isOpened2 && (
              <S.FaQs>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                fuga ratione velit voluptatibus debitis iure cupiditate
                consequuntur quasi, ducimus sunt, quia amet, dolor placeat
                voluptate blanditiis laudantium veritatis repellendus at.
              </S.FaQs>
            )}
          </S.FaQBox>
          <S.FaQBox>
            <S.FaQTitleBox>
              {props.isOpened3 && (
                <S.OpenBtnArrow onClick={props.onClickOpenQuestion3} />
              )}
              {!props.isOpened3 && (
                <S.CloseBtnArrow onClick={props.onClickCloseQuestion3} />
              )}
              <S.QestionTitle>서울지역만 가능한가요?</S.QestionTitle>
            </S.FaQTitleBox>

            {props.isOpened3 && (
              <S.FaQs>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                fuga ratione velit voluptatibus debitis iure cupiditate
                consequuntur quasi, ducimus sunt, quia amet, dolor placeat
                voluptate blanditiis laudantium veritatis repellendus at.
              </S.FaQs>
            )}
          </S.FaQBox> */}
        {/* </S.FaQSmallBoxes> */}
      </S.FaQBoxes>
    </S.Wrapper>
  );
}
