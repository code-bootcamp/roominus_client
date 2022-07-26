import styled from "@emotion/styled";
import Head from "next/head";
import { useEffect } from "react";
import { breakPoints } from "../../../../commons/styles/media";

declare const window: typeof globalThis & {
  Kakao: any;
};

const KaKaoChat = styled.div`
  position: fixed;
  right: 4.5em;
  bottom: 1em;
  transform: translate(-20%, -20%);

  @media ${breakPoints.tablet} {
    right: 2.5em;
    bottom: 0;
  }

  @media ${breakPoints.mobile} {
    right: 2.5em;
    bottom: 0;
  }
`;

export default function KakaoChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    try {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init("1988a9a8f46853586b98dd3981a6b87e");
        }
      }

      window.Kakao.Channel.createChatButton({
        container: "#kakao-talk-channel-chat-button",
        channelPublicId: "_tDNRxj",
        title: "consult",
        size: "small",
        color: "yellow",
        shape: "pc",
        supportMultipleDensities: true,
      });
      document.body.appendChild(script);
      document.body.removeChild(script);
    } catch (err) {}
  }, []);

  return (
    <div>
      <Head>
        <script
          type="text/javascript"
          src="https://developers.kakao.com/sdk/js/kakao.js"
        ></script>
      </Head>

      <KaKaoChat id="kakao-talk-channel-chat-button"></KaKaoChat>
    </div>
  );
}
