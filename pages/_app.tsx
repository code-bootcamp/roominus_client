import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import Head from "next/head";

declare const window: typeof globalThis & {
  Kakao: any;
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKl9WkEzuKhSQmKO2QmRzSiZHpUk4qbls",
  authDomain: "roominus-85954.firebaseapp.com",
  projectId: "roominus-85954",
  storageBucket: "roominus-85954.appspot.com",
  messagingSenderId: "182361182904",
  appId: "1:182361182904:web:9ab057d21eaee39e359a4d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    document.head.appendChild(script);

    script.onload = () => {
      window.Kakao.init("d5cc36e815debd3853b9a59ec62d144b");
      window.Kakao.isInitialized();
    };
  }, []);
  return (
    <>
      <Head>
        <title>Roominus</title>
        <meta
          property="og:Roominus"
          content="안녕하세요, 방탈출 예약 플랫폼 룸인어스입니다."
        ></meta>
        <meta
          property="og:description"
          content="안녕하세요, 방탈출 예약 플랫폼 룸인어스입니다."
        ></meta>
      </Head>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
