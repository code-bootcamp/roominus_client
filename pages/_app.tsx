import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { initializeApp } from "firebase/app";
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
  return (
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
