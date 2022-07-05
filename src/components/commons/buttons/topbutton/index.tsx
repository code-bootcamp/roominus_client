import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { CaretUpOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";

const TopBtn = styled(CaretUpOutlined)`
  z-index: 999;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  right: 0;
  bottom: 0;
  transform: translate(-20%, -20%);
  width: 4rem;
  height: 4rem;
  background: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  border-radius: 50%;
  border: none;
  color: #ffffff;
  font-weight: 600;
  font-size: 35px;
  letter-spacing: 0.1em;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 1.5em;
    height: 1.5em;
  }
  @media ${breakPoints.mobile} {
    width: 1.5em;
    height: 1.5em;
  }
`;

const TopBtnActive = styled.button`
  display: none;
`;

export default function TopButton() {
  const [ScrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false); // 버튼 상태

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
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
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

  return (
    <>
      {btnStatus ? (
        <TopBtn onClick={handleTop}></TopBtn>
      ) : (
        <TopBtnActive></TopBtnActive>
      )}
    </>
  );
}
