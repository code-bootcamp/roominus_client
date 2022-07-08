import * as S from "./Home.styles";
import Link from "next/link";
import { Rate } from "antd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function HomeUI(props) {
  const settings = {
    dots: false,
    arrows: false,
    className: "center",
    centerMode: true,
    centerPadding: "100px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
  };
  return (
    <S.Wrapper>
      <S.BackGroundImg></S.BackGroundImg>
      <S.StoreBox>
        <S.StoreTitleBox>
          <Link href={"/cafe"}>
            <S.StoreListButton>더보기</S.StoreListButton>
          </Link>
        </S.StoreTitleBox>
        <S.StoreImgboxes>
          <S.StoreImgbox>
            <S.StoreImgs src="/img/cafe/cafe.jpeg" alt="bestStore1" />
            <S.StoreName>SOLVER - 홍대점</S.StoreName>
            <S.LocationBox>
              <S.Location />
              홍대
            </S.LocationBox>
          </S.StoreImgbox>
          <S.StoreImgbox>
            <S.StoreImgs src="/img/cafe/cafe.jpeg" alt="bestStore1" />
            <S.StoreName>SOLVER - 홍대점</S.StoreName>
            <S.LocationBox>
              <S.Location />
              강남
            </S.LocationBox>
          </S.StoreImgbox>
          <S.StoreImgbox>
            <S.StoreImgs src="/img/cafe/cafe.jpeg" alt="bestStore1" />
            <S.StoreName>SOLVER - 홍대점</S.StoreName>
            <S.LocationBox>
              <S.Location />
              건대
            </S.LocationBox>
          </S.StoreImgbox>
        </S.StoreImgboxes>
      </S.StoreBox>
      <S.ThemeBoxes>
        <S.ThemeTitleBox>
          <Link href={"/theme"}>
            <S.ThemeListButton>더보기</S.ThemeListButton>
          </Link>
        </S.ThemeTitleBox>
        <S.ThemeImgboxes>
          <S.ThemeImgbox>
            <S.ThemeImgs src="/img/theme/월야애담.webp" alt="bestTheme1" />
            <S.GenreTag>#미스테리</S.GenreTag>
            <Rate
              onChange={props.setValue}
              value={props.value}
              style={{
                color: "#8B54C1",
                position: "absolute",
                bottom: "1em",
                left: "0.2em",
              }}
            />
          </S.ThemeImgbox>
          <S.ThemeImgbox>
            <S.ThemeImgs src="/img/theme/월야애담.webp" alt="bestTheme2" />
            <S.GenreTag>#모험</S.GenreTag>
            <Rate
              onChange={props.setValue}
              value={props.value}
              style={{
                color: "#8B54C1",
                position: "absolute",
                bottom: "1em",
                left: "0.2em",
              }}
            />
          </S.ThemeImgbox>
          <S.ThemeImgbox>
            <S.ThemeImgs src="/img/theme/월야애담.webp" alt="bestTheme3" />
            <S.GenreTag>#청춘</S.GenreTag>
            <Rate
              onChange={props.setValue}
              value={props.value}
              style={{
                color: "#8B54C1",
                position: "absolute",
                bottom: "1em",
                left: "0.2em",
              }}
            />
          </S.ThemeImgbox>
        </S.ThemeImgboxes>
      </S.ThemeBoxes>
      <S.AlarmCarouselBoxes>
        <S.AlarmTitle>룸인어스 공지사항</S.AlarmTitle>
        <Slider {...settings}>
          <S.AlarmCarouselBox>
            <S.AlarmImgs src="/svg/layout/1.svg" alt="alarm1" />
          </S.AlarmCarouselBox>
          <S.AlarmCarouselBox>
            <S.AlarmImgs src="/svg/layout/4.svg" alt="alarm4" />
          </S.AlarmCarouselBox>
          <S.AlarmCarouselBox>
            <S.AlarmImgs src="/svg/layout/5.svg" alt="alarm5" />
          </S.AlarmCarouselBox>
        </Slider>
      </S.AlarmCarouselBoxes>
      <S.FaQBoxes>
        <S.FaQTitle>자주 묻는 질문</S.FaQTitle>
        <S.FaQSmallBoxes>
          <S.FaQBox>
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
          </S.FaQBox>
        </S.FaQSmallBoxes>
      </S.FaQBoxes>
    </S.Wrapper>
  );
}
