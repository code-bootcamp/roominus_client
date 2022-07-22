import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import Swal from "sweetalert2";
import useScript from "../../hooks/useScript";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3em;
`;

const URLShareButton = styled.button`
  width: 2.3em;
  height: 2.3em;
  color: white;
  border-radius: 24px;
  border: none;
  /* font-size: 0.8em; */
  margin-top: 0.1em;
  cursor: pointer;
  background: linear-gradient(90deg, #7c21e1 0%, #4a00e0 100%);
`;

const KakaoShareButton = styled.a`
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 2.4em;
  height: 2.5em;
  border-radius: 50%;
`;

declare const window: typeof globalThis & {
  Kakao: any;
};

export default function ShareButton() {
  const [currentUrl, setCurrentUrl] = useState("");
  // window 객체에서 현재 url 가져오기
  useEffect(() => {
    const currentUrl = window.location.href;
    setCurrentUrl(currentUrl);
  }, []);

  // kakao SDK import하기
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init("1988a9a8f46853586b98dd3981a6b87e");
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  const onClickURL = () => {
    Swal.fire({
      icon: "success",
      title: "링크가 복사되었습니다!",
      timer: 1300,
      showConfirmButton: false,
    });
  };

  return (
    <Container>
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon
          size={35}
          round={true}
          borderRadius={24}
          style={{ marginTop: "0.6em" }}
        ></FacebookIcon>
      </FacebookShareButton>
      <TwitterShareButton url={currentUrl}>
        <TwitterIcon
          size={35}
          round={true}
          borderRadius={24}
          style={{ marginTop: "0.6em" }}
        ></TwitterIcon>
      </TwitterShareButton>
      <CopyToClipboard text={currentUrl}>
        <URLShareButton onClick={onClickURL}>URL</URLShareButton>
      </CopyToClipboard>
      <KakaoShareButton onClick={handleKakaoButton}>
        <KakaoIcon src="/img/login/kakaoLogo.png" />
      </KakaoShareButton>
    </Container>
  );
}
