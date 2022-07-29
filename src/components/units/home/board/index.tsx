import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { breakPoints } from "../../../../commons/styles/media";
import { FETCH_BOARDS } from "../../community/list/CommunityList.queries";
import { uuidv4 } from "@firebase/util";
import { IFetchBoards } from "../Home.type";
import { useEffect, useState } from "react";
const Container = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  height: 45vh;
  gap: 0.5em;

  @media ${breakPoints.mobile} {
    height: 30vh;
  }
`;

const Box = styled.div`
  overflow: hidden;
  transition: 1s;
  flex: 1;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);
  line-height: 0;

  :hover {
    flex: 1 1 20%;
    cursor: pointer;
  }

  & span {
    display: block;
    font-size: 1.3em;
    text-align: center;
    /* height: 10vh; */
    line-height: 5;
    font-family: "GowunDodum-Regular";

    @media ${breakPoints.tablet} {
      font-size: 1.2em;
      line-height: 6;
    }

    @media ${breakPoints.mobile} {
      line-height: 6;
      font-size: 1em;
    }
  }

  & img {
    width: 100%;
    height: calc(100% - 10vh);
    object-fit: cover;
    transition: 1.8s;

    :hover {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export default function BestBoard() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const [windowSize, setWindowSize] = useState(false);

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

  const onClickBoard = (event: { currentTarget: { id: any } }) => {
    router.push(`/community/${event?.currentTarget.id}`);
  };

  const hotBoards = data?.fetchBoards
    .slice()
    .sort((a: IFetchBoards, b: IFetchBoards) => {
      return b.like - a.like;
    })
    .slice(0, 4);

  const mobileHotBoards = data?.fetchBoards
    .slice()
    .sort((a: IFetchBoards, b: IFetchBoards) => {
      return b.like - a.like;
    })
    .slice(0, 2);

  return (
    <div>
      {!windowSize && (
        <Container>
          {hotBoards?.map(
            (el: { id: string; mainImg: string; title: string }) => (
              <Box key={uuidv4()} id={el.id} onClick={onClickBoard}>
                <img src={el.mainImg} />
                <span>{el.title}</span>
              </Box>
            )
          )}
        </Container>
      )}
      {windowSize && (
        <Container>
          {mobileHotBoards?.map(
            (el: { id: string; mainImg: string; title: string }) => (
              <Box key={uuidv4()} id={el.id} onClick={onClickBoard}>
                <img src={el.mainImg} />
                <span>{el.title}</span>
              </Box>
            )
          )}
        </Container>
      )}
    </div>
  );
}
