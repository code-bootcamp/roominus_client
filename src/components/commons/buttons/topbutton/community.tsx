// import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { useRouter } from "next/router";

const ButtonBox = styled.div`
  @media ${breakPoints.mobile} {
    z-index: 999;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 0.1em;
    transform: translate(-20%, -20%);
    border: none;
    color: #ffffff;
    font-size: 23px;
    cursor: pointer;
    width: 2.5em;
    height: 8em;
    /* width: 5em;
    height: 1.8em; */
    right: 1.7em;
  }
`;

const Button = styled.button`
  width: 6em;
  height: 2.5em;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(142, 45, 226, 1) 30%,
      rgba(74, 0, 224, 1) 100%
    );
  }
  background-color: #4a00e0e7;
  color: #ffffff;
  font-weight: 500;
  padding: 0.2em 1em 0em 1em;
  font-size: 0.9em;
  /* font-size: 0.8em; */
`;

// const TopBtnActive = styled.button`
//   display: none;
// `;

export default function TopButton() {
  const router = useRouter();

  // const [ScrollY, setScrollY] = useState(0);
  // const [btnStatus, setBtnStatus] = useState(false); // 버튼 상태

  const onClickWrite = () => {
    router.push("/community/new");
  };

  // const handleFollow = () => {
  //   setScrollY(window.pageYOffset);
  //   if (ScrollY > 100) {
  //     // 100 이상이면 버튼이 보이게
  //     setBtnStatus(true);
  //   } else {
  //     // 100 이하면 버튼이 사라지게
  //     setBtnStatus(false);
  //   }
  // };

  // useEffect(() => {
  //   const watch = () => {
  //     window.addEventListener("scroll", handleFollow);
  //   };
  //   watch();
  //   return () => {
  //     window.removeEventListener("scroll", handleFollow);
  //   };
  // });

  return (
    <>
      {/* {btnStatus ? (
        <>
          <ButtonBox>
            <Button onClick={onClickWrite}>작성하기</Button>
          </ButtonBox>
        </>
      ) : (
        <>
          <TopBtnActive></TopBtnActive>
        </>
      )} */}

      <ButtonBox>
        <Button onClick={onClickWrite}>작성하기</Button>
      </ButtonBox>
    </>
  );
}
