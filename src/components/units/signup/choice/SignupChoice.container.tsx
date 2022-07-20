import { useRouter } from "next/router";
import SignupChoiceUI from "./SignupChoice.presenter";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Swal from "sweetalert2";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export default function SignupChoice() {
  const router = useRouter();
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
        router.push({
          pathname: `/signup/detail`,
          query: { email: user.email, emailVerified: user.emailVerified },
        });
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
            console.log(response);
            router.push({
              pathname: `/signup/detail`,
              query: {
                email2: response.kakao_account.email,
                has_email: response.kakao_account.has_email,
              },
            });
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
