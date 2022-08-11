import styled from "@emotion/styled";
import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  Kakao: any;
};

const KaKaoChat = styled.div``;
const KaKaoChannel = styled.div``;

export default function KakaoChat() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    try {
      if (window.Kakao) {
        const kakao = window.Kakao;
        if (!kakao.isInitialized()) {
          kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
        }
      }

      window.Kakao.Channel.createAddChannelButton({
        container: "#kakao-talk-channel-add-button",
        channelPublicId: "_tDNRxj",
        size: "large",
        // size: "small",

        supportMultipleDensities: true,
      });

      window.Kakao.Channel.createChatButton({
        container: "#kakao-talk-channel-chat-button",
        channelPublicId: "_tDNRxj",
        title: "question",
        size: "small",
        color: "mono",
        shape: "pc",
        supportMultipleDensities: true,
      });
      document.body.appendChild(script);
      document.body.removeChild(script);
    } catch (err) {}
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://developers.kakao.com/sdk/js/kakao.js"
        ></script>
      </Head>
      <KaKaoChannel id="kakao-talk-channel-add-button"></KaKaoChannel>
      <KaKaoChat id="kakao-talk-channel-chat-button"></KaKaoChat>
    </>
  );
}
