import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as S from "./Main.styles";

export default function MainUI() {
  const router = useRouter();

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" || event.key === "Enter") {
        window.removeEventListener("keydown", handleKey);
        router.push("/home");
      }
    };

    window.addEventListener("keydown", handleKey);
  }, []);

  const onClickDoor = () => {
    router.push("/home");
  };
  return (
    <S.Container>
      {/* <S.Page1><S.Carousel></S.Carousel></S.Page1>
      <S.Page2>
        <img src="/img/ink.png" />
        <S.Image src="/img/ink.png" />
      </S.Page2> */}
      Roominus Roominus
      <S.MyParallax pages={3}>
        <S.Layer1
          offset={0}
          speed={1}
          // style={{ backgroundColor: "#232946" }}
        >
          <S.Title>
            <S.RuminousTitle>
              <img src="/img/main/roomin.png" />
            </S.RuminousTitle>
            <S.RuminousTitleUs>
              <img src="/img/main/us.png" />
            </S.RuminousTitleUs>
          </S.Title>
          <S.ScrollDownBox>
            <S.ScrollDownLine />
            <S.ScrollDown>Scroll</S.ScrollDown>
          </S.ScrollDownBox>
          <S.PressEnter>Skip : Enter</S.PressEnter>
        </S.Layer1>

        {/* <ParallaxLayer
          offset={1}
          speed={1}
          // style={{ backgroundColor: "#8bd3dd" }}
        /> */}
        <ParallaxLayer offset={1} speed={2} style={{ opacity: 1 }}>
          <img
            src="/img/main/lune.png"
            style={{ width: "70%", opacity: "80%", marginLeft: "5%" }}
          />
          <S.FlashText>Room in us</S.FlashText>
          <S.Neon>상상이 현실이 되는 밤</S.Neon>
          <S.FlashText>상상이 현실이 되는 방</S.FlashText>

          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ width: "50%", marginLeft: "20%" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.8 }}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "50%", marginLeft: "55%" }}
          />
          {/* <S.Image src="/img/main/ink.png" /> */}
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "40%", marginLeft: "0" }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2} style={{ opacity: 1 }}>
          <S.DoorWrapper>
            <S.DoorBox onClick={onClickDoor}>
              들어가기
              <S.Door></S.Door>
            </S.DoorBox>
          </S.DoorWrapper>
          <S.NeonWrapper>
            <S.NeonBottom>상상이 현실이 되는 방</S.NeonBottom>
          </S.NeonWrapper>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "50%", marginLeft: "10%" }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "40%", marginLeft: "55%" }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "30%", marginRight: "55%" }}
          />
        </ParallaxLayer>
      </S.MyParallax>
    </S.Container>
  );
}
