import { useRouter } from "next/router";
import SignupChoiceUI from "./SignupChoice.presenter";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";
import { useRecoilState } from "recoil";
import { GoogleInfoState, KakaoInfoState } from "../../../../commons/store";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export default function SignupChoice() {
  const router = useRouter();
  const [googleInfo, setGoogleInfo] = useRecoilState(GoogleInfoState);
  const [kakaoInfo, setKakaoInfo] = useRecoilState(KakaoInfoState);
  const onClickMoveToSignUp = () => {
    router.push("/signup/new");
  };

  const onClickGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        setGoogleInfo(user);
        router.push(`/signup/socialDetail`);

        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const onClickLoginKakao = () => {
    Kakao.Auth.login({
      success: () => {
        window.Kakao.API.request({
          url: "/v2/user/me",
          data: {
            property_keys: ["kakao_account.email", "kakao_account.gender"],
          },
          success: function (response) {
            setKakaoInfo(response.kakao_account);
            router.push(`/signup/socialDetail`);
          },
          fail: function (error) {
            console.log(error);
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  const onClickMoveToOwner = () => {
    Swal.fire("서비스 준비중입니다!");
  };

  return (
    <SignupChoiceUI
      onClickMoveToSignUp={onClickMoveToSignUp}
      onClickGoogleLogin={onClickGoogleLogin}
      onClickLoginKakao={onClickLoginKakao}
      onClickMoveToOwner={onClickMoveToOwner}
    />
  );
}
