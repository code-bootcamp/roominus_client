import Head from "next/head";
import Main from "../src/components/units/main/Main.container";

export default function MainPage() {
  return (
    <>
      {" "}
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
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
      </Head>
      <Main />
    </>
  );
}
