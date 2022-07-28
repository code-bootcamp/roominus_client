import { css } from "@emotion/react";
import styled from "@emotion/styled";

const DoorWrapper = styled.div`
  /* background: url("https://res.cloudinary.com/tihos/image/upload/v1587424333/codepen/multi-colored-concrete-wall-3697356.jpg");
  background-size: cover;
  overflow: hidden;
  width: 100vw;
  height: 100vh; */
`;

const SlidingDoors = styled.div`
  /* width: 30vw;
  height: 70hv; */
  width: 100vw;
  height: 100vh;

  position: absolute;
  /* bottom: -3px; */
  /* left: 50%; */
  /* margin-left: -15vw; */

  overflow: hidden;
  background: url("https://res.cloudinary.com/tihos/image/upload/q_auto/v1587425872/codepen/adventure-alps-background-beautiful-547114.jpg");
  background-size: cover;
  background-position: -200px 0;
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px #000000;

  :before,
  :after {
    content: "";
    width: 50%;
    height: 100vh;
    left: 0;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    -webkit-transition: 2000ms;
    border: 3px solid rgba(0, 0, 0, 0.5);
  }

  :before {
    background: url("/img/main/brick-left.jpg");
    background-size: cover;
  }

  :after {
    background: url("/img/main/brick-right.jpg");
    background-size: cover;

    background-position: -15vw 0;
  }

  :hover:before {
    left: -15vw;
  }

  :hover:after {
    left: 15vw;
  }
`;

export const DoorBox = styled.div`
  opacity: 100%;
  width: 30vw;
  height: 80vh;

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
  overflow: hidden;
  /* background-color: #fffbcb; */
  background: url("https://res.cloudinary.com/dop5piuwp/image/upload/v1658992045/public/main/doorback_hsnc16.jpg")
    center/cover;
  :before,
  :after {
    content: "";
    width: 50%;
    height: 100vh;
    left: 0;
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    -webkit-transition: 2000ms;
    border: 3px solid rgba(0, 0, 0, 0.5);
  }

  :before {
    /* background: url("/img/main/back1.jpeg") center/cover; */
    background-color: black;
    background-size: cover;
  }

  :after {
    /* background: url("/img/main/back1.jpeg") center/cover; */
    background-color: black;
    background-size: cover;

    background-position: -15vw 0;
  }

  :hover:before {
    left: -15vw;
  }

  :hover:after {
    left: 15vw;
  }
`;
export const Neon = styled.div`
  position: absolute;
  top: 60%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-family: "GowunBatang-Regular";
  max-width: 767;
  font-size: 3vw;
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

interface IOpenDoorProps {
  onClickDoor: () => void;
}
export default function OpenDoor(props: IOpenDoorProps) {
  return (
    <DoorWrapper onClick={props.onClickDoor}>
      {/* <SlidingDoors></SlidingDoors> */}
      <DoorBox>
        <Door></Door>
      </DoorBox>
      <NeonWrapper>
        <NeonBottom>들어가기</NeonBottom>
      </NeonWrapper>
    </DoorWrapper>
  );
}
