import { useRouter } from "next/router";
import SignUpDetailUI from "./SignUpDetail.presenter";
import {
  getAuth,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect } from "react";
import Head from "next/head";
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
export default function SignUpDetail() {
  const router = useRouter();
  const email = router.query.email;
  const email2 = router.query.email2;
  const emailVerified = router.query.emailVerified;
  const kakaoid = router.query.has_email;
  const onClickSocialIDLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (!user) {
  //       router.push("/login");
  //     }
  //   });
  // }, [auth]);

  const onClickLogoutkakao = () => {
    // window.Kakao.Auth.logout();

    if (!Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    Kakao.API.request({
      url: "/v1/user/unlink",
      success: function (response) {
        console.log(response);
      },
      fail: function (error) {
        console.log(error);
      },
    });
    Kakao.Auth.logout(function () {
      console.log(Kakao.Auth.getAccessToken());

      router.push("/login");
    });
  };
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
      <Head></Head>
      <SignUpDetailUI
        email={email}
        email2={email2}
        emailVerified={emailVerified}
        kakaoid={kakaoid}
        onClickSocialIDLogout={onClickSocialIDLogout}
        onClickLogoutkakao={onClickLogoutkakao}
      />
    </>
  );
}
