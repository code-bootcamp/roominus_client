import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { breakPoints } from "../../../../commons/styles/media";

const Container = styled.ul`
  padding: 0px 30px;
  /* padding: 0 3em; */
  height: 50px;
  height: 3.13em;
  overflow: hidden;
  border-top: 1px solid #4a00e0e7;
  border-bottom: 1px solid #4a00e0e7;
  font-size: 1.1em;

  @media ${breakPoints.mobile} {
    font-size: 0.9em;
    padding: 0px 0.2em;
  }
`;

const Content = styled.li`
  height: 30px;
  /* height: 1.88em; */
  padding: 10px 0px 60px 0px;
  /* padding: 0.63em 0em 3.75em 0em; */
  line-height: 30px;
  line-height: 1.88em;
`;

const Wrapper = styled.div`
  transition: transform 2s;
`;

const NoticeBox = styled.div`
  display: flex;
  gap: 10em;

  @media ${breakPoints.mobile} {
    gap: 1em;
  }
`;

const Title = styled.span`
  width: 60%;
`;

export default function Notice() {
  const [idx, setIdx] = useState(0);
  const idxRef = useRef(0);

  const notice = [
    {
      no: 1,
      header: "[안내]",
      title: "7월 신용카드 무이자 할부 안내",
      date: "2022-07-01",
    },
    {
      no: 2,
      header: "[점검]",
      title: "7/20 시스템 점검 안내",
      date: "2022-07-13",
    },
    {
      no: 3,
      header: "[안내]",
      title: "7월 정기 휴무 안내",
      date: "2022-07-19",
    },
    {
      no: 4,
      header: "[수정]",
      title: "개인정보 처리방침, 청소년 보호정책 개정안 공지",
      date: "2022-07-22",
    },
    {
      no: 5,
      header: "[안내]",
      title: "roominus 제휴 문의 안내",
      date: "2022-07-24",
    },
  ];

  useEffect(() => {
    setInterval(() => {
      idxRef.current = (idxRef.current + 1) % notice.length;
      setIdx(idxRef.current);
    }, 4000);
  }, [notice.length]);

  return (
    <Container>
      <Wrapper style={{ transform: `translateY(-${70 * idx}px)` }}>
        {notice.map((el, idx) => {
          return (
            <Content key={idx}>
              <NoticeBox>
                <span>{el.header}</span>
                <Title>{el.title}</Title>
                <span>{el.date}</span>
              </NoticeBox>
            </Content>
          );
        })}
      </Wrapper>
    </Container>
  );
}
