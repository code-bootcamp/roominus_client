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
import ThemeCardComponent from "./themecard/ThemeCard";
import { height } from "@mui/material/node_modules/@mui/system";

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
