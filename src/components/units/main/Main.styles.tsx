import styled from "@emotion/styled";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;

  left: calc(-50vw + 50%);
  background: url("/img/main/back1.jpeg") center/cover;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  -ms-overflow-style: none !important;
  ::-webkit-scrollbar {
    display: none;
    width: none !important;
  }
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

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  font-family: "StMarie";
  font-size: 3em;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const RuminousTitle = styled.div`
  font-family: "GowunDodum-Regular";
  display: flex;
  flex-direction: row;
  color: white;
  animation: animation 2s ease-in-out running;
  @keyframes animation {
    0% {
      opacity: 0;
      filter: blur(10px);
    }
    25% {
      opacity: 0.5;
      filter: blur(1px);
    }
    75% {
      opacity: 0.75;
      filter: blur(10px);
    }
    100% {
      opacity: 1;
      filter: blur(0px);
    }
  }
  @media ${breakPoints.mobile} {
  }
`;

export const RuminousTitleUs = styled(RuminousTitle)`
  text-shadow: 0 0 10px #fffbcb, 0 0 20px #fffbcb, 0 0 30px #fffbcb;

  @keyframes animation {
    0% {
      opacity: 0;
      filter: blur(10px);
    }
    25% {
      opacity: 0.5;
      filter: blur(0px);
    }
    75% {
      opacity: 0.75;
      filter: blur(1px);
    }
    100% {
      opacity: 1;
      filter: blur(10px);
    }
  }
`;

export const ScrollDownBox = styled.div`
  position: absolute;
  bottom: 0%;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  align-items: center;
`;
export const ScrollDownLine = styled.div`
  height: 4em;
  border-left: 1px solid white;
`;
export const ScrollDown = styled.div`
  color: white;
  font-family: serif;
`;

export const PressEnter = styled.div`
  opacity: 50%;
  color: white;
  font-family: serif;
  position: absolute;
  right: 1%;
  bottom: 0;
`;

export const Word = styled.h1`
  color: white;
`;

export const Typing = styled.div`
  font-size: 3em;
  color: white;
  width: 17ch;
  animation: typing 3s steps(17), blink 0.5s step-end infinite alternate;
  animation-delay: 2s;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  border-color: transparent;
  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-right: 3px solid;
    }
  }
`;

export const Neon = styled(Typing)`
  position: absolute;
  top: 60%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-family: "GowunBatang-Regular";
  max-width: 767;
  font-size: 7vw;
  color: #fffbcb;
  animation: neon 2s ease-out alternate infinite forwards;
  @keyframes neon {
    0%,
    100% {
      text-shadow: 0 0 0.1vw #fffbcb, 0 0 3vw #fffbcb, 0 0 10vw #fffbcb,
        0 0 0.4vw #fed128;
    }
    50% {
      text-shadow: 0 0 0.5vw #fffbcb, 0 0 1.5vw #fffbcb, 0 0 5vw #fffbcb,
        0 0 5vw #fffbcb, 0 0 0.2vw #fffbcb;
    }
  }

  @font-face {
    font-family: "GowunBatang-Regular";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunBatang-Regular.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  @media ${breakPoints.mobile} {
  }
`;

export const FlashText = styled.div`
  font-size: 7vw;
  font-family: "GowunBatang-Regular";
  color: white;
  opacity: 0;
  animation: flashText 1s ease-out alternate infinite;

  @keyframes flashText {
    to {
      opacity: 0.25;
    }
  }
`;

export const MyParallax = styled(Parallax)`
  -ms-overflow-style: none !important;
  ::-webkit-scrollbar {
    display: none;
    width: none !important;
  }
  overflow-x: hidden;
`;

export const Layer1 = styled(ParallaxLayer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Layer2 = styled(ParallaxLayer)`
  width: auto;
  height: 100vh;
  position: relative;
`;

export const DoorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DoorBox = styled.div`
  color: white;
  opacity: 70%;
  width: 30vw;
  height: 40vw;
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
  line-height: 300px;
  border: 1px solid white;
  position: relative;
  /* transform-style: preserve-3d;
  transform: perspective(1500px);
  :hover {
    transform: rotateY(180deg);
    visibility: visible;
  } */
  .card-container {
    display: flex;
    margin-top: 12%;
    margin-left: 15%;
    margin-right: 15%;
    justify-content: space-evenly;
    text-align: center;
    flex-wrap: wrap;
  }

  .card {
    margin-top: 50px;
    border-radius: 2px;
    -webkit-box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 3px 6px 0px rgba(0, 0, 0, 0.75);
    transform-style: preserve-3d;
    transition: transform 10s;
  }

  .card-wrap:hover .card {
    transform-origin: right;
    transform: rotateY(180deg);
  }
`;

export const Door = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid;
  border-top-left-radius: 45%;
  border-top-right-radius: 45%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  /* transform-style: preserve-3d;
  transform-origin: right;
  transition: 1s;
  transform: rotateY(180deg);
  ::after {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 15px;
    background-color: white;
    border-radius: 50%;
  }
  :hover {
    transform: rotateY(-120deg);
  } */
`;

export const NeonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NeonBottom = styled(Neon)`
  text-align: right;
`;
