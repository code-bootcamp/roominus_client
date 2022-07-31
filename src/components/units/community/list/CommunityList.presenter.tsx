import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./CommunityList.styles";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ICommunityListProps, IFetchBoardsProps } from "./CommunityList.types";
import Paginations02 from "../../../commons/pagination02/Paginations.container";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import TopButton from "../../../commons/buttons/topbutton/community";
import React, { useEffect, useState } from "react";
export default function CommunityListUI(props: ICommunityListProps) {
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

  return (
    <S.Wrapper>
      <S.TitleBox>
        {!windowSize && <ChatOutlinedIcon fontSize="large" />}
        {windowSize && <ChatOutlinedIcon />}
        <h1>전체글보기</h1>
      </S.TitleBox>

      <S.CountBox>
        <span>총 {props.count?.fetchBoardsCount}건</span>
      </S.CountBox>
      <S.Etc>
        {props.data?.fetchBoards.map((el: IFetchBoardsProps) => (
          <span key={el.id} id={el.id} onClick={props.onClickCard(el)}>
            <S.ItemBackground>
              <S.Picture src={el.mainImg} onError={props.handleImgError} />
              <S.InfoBox>
                <S.NameDateBox>
                  <S.BoardName>{el.title}</S.BoardName>
                </S.NameDateBox>
                <S.DatePickBox>
                  <S.WriteName>{el.user?.name}</S.WriteName>
                  <S.PickBox>
                    <S.RedHeart icon={faHeart} />
                    <S.PickCount>{el.like}</S.PickCount>
                  </S.PickBox>
                </S.DatePickBox>
              </S.InfoBox>
            </S.ItemBackground>
          </span>
        ))}
      </S.Etc>

      {!windowSize && (
        <S.ButtonBox>
          <WebPurpleButton title="작성하기" onClick={props.onClickWrite} />
        </S.ButtonBox>
      )}

      {windowSize && <TopButton />}

      <S.PaginationsWrapper>
        <Paginations02
          count={props.count?.fetchBoardsCount}
          refetch={props.refetch}
        />
      </S.PaginationsWrapper>
    </S.Wrapper>
  );
}
