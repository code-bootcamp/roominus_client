import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import { RecoilRoot } from "recoil";
import Head from "next/head";
import ApolloSetting from "../src/components/commons/apollo";

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
initializeApp(firebaseConfig);
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src = "https://developers.kakao.com/sdk/js/kakao.js";
    document.head.appendChild(script);

    script.onload = () => {
      window.Kakao.init("675cd5356e97bab7c2fafe02e722f558");
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
        <script
          type="text/javascript"
          src="https://static.nid.naver.com/js/naverLogin_implicit-1.0.3.js"
        ></script>
        <script
          type="text/javascript"
          src="http://code.jquery.com/jquery-1.11.3.min.js"
        ></script>
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
