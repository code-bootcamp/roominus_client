import { ParallaxLayer } from "@react-spring/parallax";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as S from "./Main.styles";
import Typewriter from "typewriter-effect";

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
      <S.MyParallax pages={4}>
        <S.Layer1 speed={1}>
          <S.Title>
            <S.RuminousTitleUs>
              <img src="/img/main/roomin.png" />
              <img src="/img/main/us.png" />
            </S.RuminousTitleUs>
          </S.Title>
          <S.ScrollDownBox>
            <S.ScrollDownLine />
            <S.ScrollDown>Scroll</S.ScrollDown>
          </S.ScrollDownBox>
          <S.PressEnter>Skip : Enter</S.PressEnter>
        </S.Layer1>
        <S.Layer2 offset={1} speed={0}>
          <img
            src="/img/main/lune.png"
            style={{
              width: "60vw",
              opacity: "80%",
              marginLeft: "40%",
            }}
          />
          {/* <S.FlashText>Room in us</S.FlashText> */}

          <S.Neon>
            상상이 현실이 되는{" "}
            <Typewriter
              options={{
                strings: ["밤", "방"],
                autoStart: true,
                loop: true,
              }}
            />
          </S.Neon>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ width: "50%", marginLeft: "20%" }}
          />
        </S.Layer2>
        <ParallaxLayer offset={2} speed={0.5} style={{}}>
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
        <ParallaxLayer
          offset={3}
          speed={0.6}
          style={{
            opacity: 1,
            backgroundImage: `url("/img/main/door.jpeg")`,
            backgroundSize: "cover",
          }}
        >
          <S.DoorWrapper>
            <S.RuminousTitle>
              {/* <Typewriter
                options={{
                  strings: ["방탈출 통합 예약 서비스"],
                  autoStart: true,
                  loop: true,
                }}
              /> */}
            </S.RuminousTitle>
            <S.DoorBox onClick={onClickDoor}>
              들어가기
              <div className="card-container">
                <div className="card-wrap">
                  <S.Door className="card"></S.Door>
                </div>
              </div>
            </S.DoorBox>
          </S.DoorWrapper>
          <S.NeonWrapper>
            <S.NeonBottom>들어가기</S.NeonBottom>
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
