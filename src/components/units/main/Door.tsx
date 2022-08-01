import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

const DoorWrapper = styled.div`
  /* background: url("https://res.cloudinary.com/tihos/image/upload/v1587424333/codepen/multi-colored-concrete-wall-3697356.jpg");
  background-size: cover;
  overflow: hidden;
  width: 100vw;
  height: 100vh; */
`;

export const DoorBox = styled.div`
  opacity: 100%;
  width: 30vw;
  height: 80vh;
  text-align: center;
  position: relative;

  @media ${breakPoints.tablet} {
    width: 40vw;
    height: 60vh;
  }
  @media ${breakPoints.mobile} {
    width: 50vw;
    height: 50vh;
  }
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
  /* background: url("https://res.cloudinary.com/dop5piuwp/image/upload/v1658992045/public/main/doorback_hsnc16.jpg")
    center/cover; */
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
    border: #26282c;
    background-color: white;
    background-size: cover;
    opacity: 95%;
  }

  :after {
    border: #26282c;
    background-color: white;
    background-size: cover;
    opacity: 95%;

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
  color: #c8bc35;
  animation: neon 2s ease-out alternate infinite forwards;
  @keyframes neon {
    0%,
    100% {
      text-shadow: 0 0 0.1vw #fff36b 0 0 3vw #fff36b, 0 0 10vw #fff36b,
        0 0 0.4vw #fed128;
    }
    50% {
      text-shadow: 0 0 0.5vw #fff36b, 0 0 1.5vw #fff36b, 0 0 5vw #fff36b,
        0 0 5vw #fff36b, 0 0 0.2vw #fff36b;
    }
  }

  @media ${breakPoints.mobile} {
    font-size: 5vw;
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
      <DoorBox>
        <Door></Door>
      </DoorBox>
      <NeonWrapper>
        <NeonBottom>들어가기</NeonBottom>
      </NeonWrapper>
    </DoorWrapper>
  );
}
