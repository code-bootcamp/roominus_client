import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { ArrowUpOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";
import { useRouter } from "next/router";

const TopBtnBox = styled.div`
  z-index: 999;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 0.1em;
  bottom: 0.1em;
  transform: translate(-20%, -20%);
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(90deg, #7c21e1 0%, #4a00e0 100%);
  border-radius: 50%;
  border: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 30px;
  letter-spacing: 0.1em;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 2em;
    height: 2em;
    right: 0.2em;
    bottom: 3em;
  }
  @media ${breakPoints.mobile} {
    z-index: 999;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 3em;
    transform: translate(-20%, -20%);
    border: none;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
    right: 0.2em;
  }
`;

const TopBtn = styled(ArrowUpOutlined)``;

const TopBtnActive = styled.button`
  display: none;
`;

const HIDDEN_TOP_BUTTON = ["/community"];

export default function TopButton() {
  const router = useRouter();
  const [windowSize, setWindowSize] = useState(false);
  const [ScrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const isHiddenTopButton = HIDDEN_TOP_BUTTON.includes(router.asPath);

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // setScrollY(0); // ScrollY 의 값을 초기화
    // setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <>
      {windowSize ? (
        <>
          {" "}
          {!isHiddenTopButton && btnStatus ? (
            <>
              <TopBtnBox onClick={handleTop}>
                <TopBtn />
              </TopBtnBox>
            </>
          ) : (
            <>
              <TopBtnActive></TopBtnActive>
            </>
          )}
        </>
      ) : (
        <>
          {btnStatus ? (
            <>
              <TopBtnBox onClick={handleTop}>
                <TopBtn />
              </TopBtnBox>
            </>
          ) : (
            <>
              <TopBtnActive></TopBtnActive>
            </>
          )}
        </>
      )}
    </>
  );
}
