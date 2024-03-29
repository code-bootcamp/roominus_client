import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
// import Head from "next/head";
import ApolloSetting from "../src/components/commons/apollo";
import Head from "next/head";

declare const window: typeof globalThis & {
  Kakao: any;
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    document.head.appendChild(script);

    script.onload = () => {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
      window.Kakao.isInitialized();
    };
  }, []);
  return (
    <>
      <Head>
        <title>room:in us</title>
        <meta
          property="og:roominus"
          content="방탈출 까페 통합 예약 플랫폼 룸인어스"
        ></meta>
        <meta
          property="og:description"
          content="세상의 모든 방탈출 카페로 IN하다. 우리들의 방탈출 공간 room:in us에서 새로운 세상으로 입장하세요."
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dop5piuwp/image/upload/v1659332034/public/layout/ogLogo_on7nht.jpg"
        ></meta>
      </Head>
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
