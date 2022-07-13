import { useRouter } from "next/router";
import SignUpDetailUI from "./SignUpDetail.presenter";
import {
  getAuth,
  signOut,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { CREATE_USER } from "./SignUpDetail.query";
import { useMutation } from "@apollo/client";
import { Modal } from "antd";

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
      /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,14}$/,
      "영문+숫자 조합 8~14자리의 비밀번호를 입력해주세요."
    )
    .required("영문+숫자 조합 8~14자리의 비밀번호를 입력해주세요."),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다.")
    .required("영문+숫자 조합 8~16자리의 비밀번호를 입력해주세요."),
  name: yup.string().required("필수 입력 사항입니다."),
});
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export default function SignUpDetail() {
  const router = useRouter();
  const googleEmail = router.query.email;
  const kakaoEmail = router.query.email2;
  const googleLoggedIn = router.query.emailVerified;
  const kakaologgedIn = router.query.has_email;

  const passwordInputRef = useRef();
  const password2InputRef = useRef();
  const [openEye1, setOpenEye1] = useState(false);
  const [openEye2, setOpenEye2] = useState(false);
  const [phone, setPhone] = useState("");
  const { register, handleSubmit, setValue, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [createUsergql] = useMutation(CREATE_USER);

  useEffect(() => {
    register("email", { required: true });
    register("password", { required: true });
    register("password2", { required: true });
    register("name", { required: true });
  }, []);

  const onClickMoveToPasswordRef = () => {
    passwordInputRef.current.focus();
  };
  const onChangeGetPhoneNo = (event) => {
    setPhone(event?.target.value);
  };
  const onClickVerifyMySelfByNo = () => {};

  const onSubmitSignup = async (data) => {
    console.log(data);
    try {
      const result = await createUsergql({
        variables: {
          email: data.email,
          password: data.password,
          name: data.name,
          phone: "01012345678",
        },
      });
      Modal.success({ content: `${result.data.createUser.name}` });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickMoveToLogin = () => {
    router.push("/login");
  };

  const onClickShowPassword = () => {
    passwordInputRef.current.type = "text";
    setOpenEye1(true);
    setTimeout(() => {
      passwordInputRef.current.type = "password";
      setOpenEye1(false);
    }, 1000);
  };
  const onClickShowPassword2 = () => {
    password2InputRef.current.type = "text";
    setOpenEye2(true);
    setTimeout(() => {
      password2InputRef.current.type = "password";
      setOpenEye2(false);
    }, 1000);
  };

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
        googleEmail={googleEmail}
        kakaoEmail={kakaoEmail}
        googleLoggedIn={googleLoggedIn}
        kakaologgedIn={kakaologgedIn}
        onClickSocialIDLogout={onClickSocialIDLogout}
        onClickLogoutkakao={onClickLogoutkakao}
        handleSubmit={handleSubmit}
        setValue={setValue}
        formState={formState}
        onClickShowPassword={onClickShowPassword}
        onClickShowPassword2={onClickShowPassword2}
        passwordInputRef={passwordInputRef}
        password2InputRef={password2InputRef}
        openEye1={openEye1}
        openEye2={openEye2}
        onClickMoveToLogin={onClickMoveToLogin}
        onSubmitSignup={onSubmitSignup}
        onClickVerifyMySelfByNo={onClickVerifyMySelfByNo}
        onChangeGetPhoneNo={onChangeGetPhoneNo}
        onClickMoveToPasswordRef={onClickMoveToPasswordRef}
      />
    </>
  );
}
