import { ParallaxLayer } from "@react-spring/parallax";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as S from "./Main.styles";
import Typewriter from "typewriter-effect";
import OpenDoor from "./Door";
import Link from "next/link";

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
      <S.MyParallax pages={3}>
        <S.Layer1 speed={1}>
          <S.RuminousTitle>
            <S.TitleLogo
              src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990937/public/main/roominus_e2fdo8.png"
              onClick={onClickDoor}
            />
          </S.RuminousTitle>

          <S.ScrollDownBox>
            <S.ScrollDownLine />
            <S.ScrollDown>Scroll</S.ScrollDown>
          </S.ScrollDownBox>
          <S.PressEnter>Skip : Enter</S.PressEnter>
        </S.Layer1>
        <S.Layer2 offset={1} speed={0.3} factor={0.5}>
          <S.Lune src="https://res.cloudinary.com/dop5piuwp/image/upload/v1658990939/public/main/lune_iuvd8i.png" />

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
            style={{ width: "50%", marginLeft: "20%", opacity: "60%" }}
          />
        </S.Layer2>
        <ParallaxLayer offset={2} speed={0} style={{}} factor={0.5}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "50%", marginLeft: "55%" }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ display: "block", width: "40%", marginLeft: "0" }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.6}
          style={{
            opacity: 1,
          }}
          factor={0.5}
        >
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
          <S.DoorWrapper>
            <OpenDoor onClickDoor={onClickDoor} />
          </S.DoorWrapper>
        </ParallaxLayer>
      </S.MyParallax>
    </S.Container>
  );
}
