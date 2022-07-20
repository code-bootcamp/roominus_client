import LoginUI from "./Login.presenter";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { LOGIN, FETCH_USER_LOGGEDIN } from "./Login.query";
import { useMutation, useApolloClient } from "@apollo/client";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  GoogleInfoState,
  KakaoInfoState,
  userInfoState,
} from "../../../commons/store";
import Swal from "sweetalert2";
import { IDataProps } from "./Login.types";

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const schema = yup.object({
  email: yup
    .string()
    .matches(
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
      "이메일 아이디를 @까지 정확하게 입력해주세요."
    )
    .required("이메일 아이디를 @까지 정확하게 입력해주세요."),
  password: yup
    .string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])[0-9a-z]{8,14}$/,
      "영문+숫자 조합 8~14자리의 비밀번호를 입력해주세요."
    )
    .required("영문+숫자 조합 8~14자리의 비밀번호를 입력해주세요."),
});

export default function LoginPage() {
  const { register, handleSubmit, setValue, formState, trigger } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const router = useRouter();
  const client = useApolloClient();
  const [logingql] = useMutation(LOGIN);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [openEye, setOpenEye] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const [googleInfo, setGoogleInfo] = useRecoilState(GoogleInfoState);
  const [kakaoInfo, setKakaoInfo] = useRecoilState(KakaoInfoState);

  useEffect(() => {
    register("email", { required: true });
    register("password");
  }, []);

  const onSubmitLogin = async (data: IDataProps) => {
    console.log("clicked");
    try {
      const result = await logingql({
        variables: {
          email: data.email,
          password: data.password,
        },
      });

      const Token = result.data?.Login;

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGEDIN,
        context: {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        },
      });

      const user = resultUserInfo.data?.fetchUserLoggedIn;
      setAccessToken(Token);
      setUserInfo(user);

      Swal.fire({
        title: "성공",
        icon: "success",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
      router.push("/mypage");
    } catch (error) {
      Swal.fire({
        title: error.message,
        icon: "error",
        confirmButtonText: "확인",
        confirmButtonColor: "#4a00e0e7",
      });
    }
  };
  const onClickMoveToSignUp = () => {
    router.push("/signup/choice");
  };
  const onClickMoveToFindIdPassword = () => {
    router.push("/findidpassword");
  };

  const onClickShowPassword = () => {
    passwordInputRef.current.type = "text";
    setOpenEye(true);
    setTimeout(() => {
      passwordInputRef.current.type = "password";
      setOpenEye(false);
    }, 1000);
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

        router.push(`/home`);
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
          success: function (response: {
            kakao_account: { email: any; has_email: any };
          }) {
            console.log(response);
            router.push(`/home`);
          },
          fail: function (error: any) {
            console.log(error);
          },
        });
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  };

  return (
    <>
      <LoginUI
        handleSubmit={handleSubmit}
        onClickGoogleLogin={onClickGoogleLogin}
        onClickLoginKakao={onClickLoginKakao}
        onSubmitLogin={onSubmitLogin}
        setValue={setValue}
        formState={formState}
        openEye={openEye}
        trigger={trigger}
        onClickMoveToSignUp={onClickMoveToSignUp}
        passwordInputRef={passwordInputRef}
        onClickShowPassword={onClickShowPassword}
        onClickMoveToFindIdPassword={onClickMoveToFindIdPassword}
      />
    </>
  );
}
