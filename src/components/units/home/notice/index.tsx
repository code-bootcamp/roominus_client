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
  padding: 10px 0px 60px 0px;
  line-height: 30px;
  line-height: 1.88em;
`;

const Wrapper = styled.div`
  transition: transform 2s;
`;

const NoticeBox = styled.div`
  display: flex;
  gap: 10em;

  & span {
    font-size: 1.1em;
  }

  @media ${breakPoints.tablet} {
    gap: 3em;
  }

  @media ${breakPoints.mobile} {
    gap: 1.5em;
  }
`;

const Title = styled.div`
  width: 55%;
  font-size: 1.1em;
  font-weight: 500;

  @media ${breakPoints.tablet} {
    width: 60%;
  }

  @media ${breakPoints.mobile} {
    padding-left: 1.5em;
  }
`;

export default function Notice() {
  const [idx, setIdx] = useState(0);
  const idxRef = useRef(0);

  const notice = [
    {
      no: 1,
      header: "[안내]",
      title: "8월 신용카드 무이자 할부 안내",
      date: "2022-07-30",
    },
    {
      no: 2,
      header: "[점검]",
      title: "8월 3일 시스템 점검 안내",
      date: "2022-08-01",
    },
    {
      no: 3,
      header: "[안내]",
      title: "8월 휴무 안내",
      date: "2022-08-02",
    },
    {
      no: 4,
      header: "[수정]",
      title: "개인정보 처리방침, 청소년 보호정책 개정안 공지",
      date: "2022-08-03",
    },
    {
      no: 5,
      header: "[안내]",
      title: "roominus 신규 제휴 문의 안내",
      date: "2022-08-04",
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
