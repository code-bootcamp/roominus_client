import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Container = styled.main`
  width: 100vw;
  height: 1000px;
  position: relative;

  left: calc(-50vw + 50%);

  display: flex;
  flex-direction: column;
  overflow-y: auto;
  /* background-color: #26282c; */
  background: url("/img/main/inkback.jpeg") center/cover;
`;

export const Page1 = styled.section``;

export const Page2 = styled.section`
  width: 100vw;
  left: calc(-50vw + 50%);
  height: 500px;
  /* background-color: black; */
`;

export const Carousel = styled.div`
  width: 100vw;
  height: 50em;
  background-image: url("/img/main/mainImage.png");
  background-size: cover;
  /* position: relative;
  left: calc(-50vw + 50%); */
`;

export const Image = styled.div`
  width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/img/main/main01.webp");
`;

export const Image2 = styled.div`
  width: 100vw;
  height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("/img/main/main02.jpeg");
`;
export const Contents = styled.div`
  font-size: 10px;
  padding: 10px;
  text-align: left;
  height: 500px;
`;

export const RuminousTitle = styled.span`
  color: white;
  animation: animation 3s ease-in-out;

  @keyframes animation {
    0% {
      opacity: 0;
      transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(0deg);
      filter: blur(10px);
    }
    25% {
      opacity: 0.5;
      transform: translateY(-40px) skewX(5deg) skewY(5deg) rotateZ(0deg);
      filter: blur(0px);
    }
    75% {
      opacity: 1;
      transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg);
      filter: blur(1px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px) skewX(0deg) skewY(0deg) rotateZ(0deg);
      filter: blur(10px);
    }
  }
`;

export const RuminousTitleUs = styled.span`
  color: white;
  animation: animation 3s ease-in-out;
  animation-delay: 1s;
  @keyframes animation {
    0% {
      opacity: 0;
      transform: translateY(-100px) skewX(10deg) skewY(10deg) rotateZ(0deg);
      filter: blur(10px);
    }
    100% {
      opacity: 0.5;
      transform: translateY(-40px) skewX(5deg) skewY(5deg) rotateZ(0deg);
      filter: blur(0px);
    }
  }
`;

export const Word = styled.h1`
  color: white;
`;
