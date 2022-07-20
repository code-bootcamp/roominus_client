import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import * as S from "../contactus/contactus.styles";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import Swal from "sweetalert2";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ContactUs() {
  const [userInfo] = useRecoilState(userInfoState);
  const form = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "roominus_dev",
        "template_gisqmpi",
        form.current,
        "KcSmYCkrod3LluoNy"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "소중한 의견 감사합니다.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(result);
          router.push("/home");
        },
        (error) => {
          Swal.fire({
            title: "이메일 전송에 실패하였습니다.",
            icon: "error",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(error.text);
        }
      );
  };

  return (
    <S.Container>
      <S.Title>CONTACT US</S.Title>
      <S.HighLighting></S.HighLighting>
      <p>고객님 의견에 귀 기울이는 룸인어스가 되겠습니다</p>
      <S.Form ref={form} onSubmit={sendEmail} autoComplete="off">
        <label>
          이름 <span>*</span>
        </label>

        <input
          type="text"
          name="user_name"
          defaultValue={userInfo?.name}
          placeholder="이름을 작성해주세요"
          required
        />
        <label>
          이메일 <span>*</span>
        </label>
        <input
          type="email"
          name="user_email"
          defaultValue={userInfo?.email}
          placeholder="이메일을 작성해주세요"
          required
        />
        <label>
          피드백 <span>*</span>
        </label>
        <textarea name="message" placeholder="내용을 작성해주세요" required />

        <S.ButtonBox>
          <Link href="/home">
            <WebBlackButton type="button" title="돌아가기"></WebBlackButton>
          </Link>
          <WebPurpleButton
            title="제출하기"
            type="submit"
            value="Send"
          ></WebPurpleButton>
        </S.ButtonBox>
      </S.Form>
    </S.Container>
  );
}
