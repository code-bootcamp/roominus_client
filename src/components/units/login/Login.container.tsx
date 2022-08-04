/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
import LoginUI from "./Login.presenter";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { LOGIN, FETCH_USER_LOGGEDIN, SOCIAL_LOGIN } from "./Login.query";
import { useMutation, useApolloClient } from "@apollo/client";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  GoogleInfoState,
  KakaoInfoState,
  userInfoState,
  visitedPageState,
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
declare const window: typeof globalThis & {
  Kakao: any;
};
export default function Login() {
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

  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  const [googleInfo, setGoogleInfo] = useRecoilState(GoogleInfoState);
  const [kakaoInfo, setKakaoInfo] = useRecoilState(KakaoInfoState);
  const [socialLogingql] = useMutation(SOCIAL_LOGIN);

  useEffect(() => {
    register("email", { required: true });
    register("password");
  }, []);

  const onSubmitLogin = async (data: IDataProps) => {
    try {
      const result = await logingql({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      sessionStorage.setItem("#NL", "NL");
      sessionStorage.setItem("#LL", "LL");
      localStorage.setItem("#LL", "LL");
      const Token = result.data?.Login;

      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGEDIN,
        context: {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
          credentials: "include",
        },
      });

      const user = resultUserInfo.data?.fetchUserLoggedIn;
      setAccessToken(Token);
      setUserInfo(user);

      Swal.fire({
        title: "반갑습니다",
        icon: "success",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
      });
      if (visitedPage) {
        router.push(visitedPage);
      } else if (!visitedPage) {
        router.push(`/home`);
      }
    } catch (error) {
      Swal.fire({
        title: "로그인에 실패하였습니다",
        icon: "error",
        showConfirmButton: false,
        timer: 1000,
        backdrop: false,
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
        sessionStorage.setItem("#SL", "SL");
        sessionStorage.setItem("#LL", "LL");
        localStorage.setItem("#LL", "LL");
        socialLogingql({
          variables: {
            email: user.email,
          },
        })
          .then((result) => {
            setAccessToken(result.data.SocialLogin);
            client
              .query({
                query: FETCH_USER_LOGGEDIN,
                context: {
                  headers: {
                    Authorization: `Bearer ${result.data.SocialLogin}`,
                  },
                  credentials: "include",
                },
              })
              .then((result) => {
                setUserInfo(result.data.fetchUserLoggedIn);
                Swal.fire({
                  title: "반갑습니다",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1000,
                  backdrop: false,
                });
              })
              .catch((error) =>
                Swal.fire({
                  title: error,
                  icon: "error",
                  showConfirmButton: false,
                  timer: 1000,
                  backdrop: false,
                })
              );
          })
          .catch(() =>
            Swal.fire({
              title: "회원가입을 먼저 해주세요!",
              icon: "error",
              showConfirmButton: false,
              timer: 1000,
              backdrop: false,
            })
          );
        if (visitedPage) {
          router.push(visitedPage);
        } else if (!visitedPage) {
          router.push(`/home`);
        }
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
    window.Kakao.Auth.login({
      success: () => {
        window.Kakao.API.request({
          url: "/v2/user/me",
          data: {
            property_keys: ["kakao_account.email", "kakao_account.gender"],
          },
          success: function (response: {
            kakao_account: { email: any; has_email: any };
          }) {
            sessionStorage.setItem("#SL", "SL");
            sessionStorage.setItem("#LL", "LL");
            localStorage.setItem("#LL", "LL");
            socialLogingql({
              variables: {
                email: response.kakao_account.email,
              },
            })
              .then((result) => {
                setAccessToken(result.data.SocialLogin);
                client
                  .query({
                    query: FETCH_USER_LOGGEDIN,
                    context: {
                      headers: {
                        Authorization: `Bearer ${result.data.SocialLogin}`,
                      },
                      credentials: "include",
                    },
                  })
                  .then((result) => {
                    setUserInfo(result.data.fetchUserLoggedIn);
                    Swal.fire({
                      title: "반갑습니다",
                      icon: "success",
                      showConfirmButton: false,
                      timer: 1000,
                      backdrop: false,
                    });
                  })
                  .catch((error) =>
                    Swal.fire({
                      title: error,
                      icon: "error",
                      showConfirmButton: false,
                      timer: 1000,
                      backdrop: false,
                    })
                  );
              })
              .catch(() =>
                Swal.fire({
                  title: "회원가입을 먼저 해주세요!",
                  icon: "error",
                  showConfirmButton: false,
                  timer: 1000,
                  backdrop: false,
                })
              );

            if (visitedPage) {
              router.push(visitedPage);
            } else if (!visitedPage) {
              router.push(`/home`);
            }
          },
          fail: function (error: Error) {
            alert((error as Error).message);
          },
        });
      },
      fail: function (error: Error) {
        alert((error as Error).message);
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
