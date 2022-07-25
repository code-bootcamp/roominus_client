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
    font-size: 20px;
    cursor: pointer;
    width: 1rem;
    height: 10rem;
    right: 0.9em;
  }
`;

const Button = styled.button`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
  border: none;
  :hover {
    background: linear-gradient(
      90deg,
      rgba(142, 45, 226, 1) 30%,
      rgba(74, 0, 224, 1) 100%
    );
    cursor: pointer;
  }
  background-color: #4a00e0e7;
  color: #ffffff;
  font-weight: 500;
  padding: 0.2em 1em 0em 1em;
  font-size: 0.9em;
`;

export default function TopButton() {
  const router = useRouter();

  const onClickWrite = () => {
    router.push("/community/new");
  };

  return (
    <>
      <ButtonBox>
        <Button onClick={onClickWrite}>+</Button>
      </ButtonBox>
    </>
  );
}
