import styled from "@emotion/styled";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { breakPoints } from "../../../commons/styles/media";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  position: relative;

  left: calc(-50vw + 50%);
  background: url("https://res.cloudinary.com/dop5piuwp/image/upload/v1658990940/public/main/back1_wxc37r.jpg")
    center/cover;
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
    /* display: flex;
    flex-direction: column;
    align-items: center; */
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
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const RuminousTitleUs = styled(RuminousTitle)`
  text-shadow: 0 0 10px #fffbcb, 0 0 20px #fffbcb, 0 0 30px #fffbcb;

  @media ${breakPoints.mobile} {
  }
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

export const TitleLogo = styled.img`
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 60%;
  }
`;

export const TitleLogo2 = styled.img`
  @media ${breakPoints.mobile} {
    width: 20%;
  }
`;

export const ScrollDownBox = styled.div`
  position: absolute;
  bottom: 0%;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; */
  align-items: center;
  font-size: 1.2em;
`;
export const ScrollDownLine = styled.div`
  height: 4em;
  border-left: 2px solid white;
`;
export const ScrollDown = styled.div`
  color: white;
  font-family: serif;
  font-size: 2.5em;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const PressEnter = styled.div`
  opacity: 50%;
  color: white;
  font-family: serif;
  position: absolute;
  right: 1%;
  bottom: 0;
  font-size: 3em;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
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
  gap: 0.3em;
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

export const Lune = styled.img`
  width: 40vw;
  opacity: 80%;
  margin-left: 40%;
  @media ${breakPoints.mobile} {
    width: 60vw;
  }
`;

export const DoorWrapper = styled.div`
  position: absolute;
  bottom: -90%;
  right: 36%;

  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.tablet} {
    right: 30%;
  }
  @media ${breakPoints.mobile} {
    right: 25%;
  }
`;

export const DoorBox = styled.div`
  opacity: 80%;
  width: 40vw;
  height: 60vw;

  text-align: center;
  position: relative;
`;

export const Door = styled.div`
  width: 100%;
  height: 100%;
  border-top-left-radius: 45%;
  border-top-right-radius: 45%;
  position: absolute;
  top: 0;
  left: 0;
  animation: neon2 2s ease-out alternate infinite forwards;
  @keyframes neon2 {
    0%,
    100% {
      box-shadow: 0 0 0.1vw #fffbcb, 0 0 3vw #fffbcb, 0 0 10vw #fffbcb,
        0 0 0.4vw #fed128;
    }
    50% {
      box-shadow: 0 0 0.5vw #fffbcb, 0 0 1.5vw #fffbcb, 0 0 5vw #fffbcb,
        0 0 5vw #fffbcb, 0 0 0.2vw #fffbcb;
    }
  }
`;

export const NeonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NeonBottom = styled(Neon)`
  justify-content: center;
`;
