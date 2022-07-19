import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./CommunityList.styles";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ICommunityListProps, IFetchBoardsProps } from "./CommunityList.types";

export default function CommunityListUI(props: ICommunityListProps) {
  return (
    <S.Wrapper>
      <S.Title>전체글보기</S.Title>
      <S.Etc>
        {props.data?.fetchBoards.map((el: IFetchBoardsProps) => (
          <span key={el.id} id={el.id} onClick={props.onClickCard(el)}>
            {/* <S.ItemBox> */}
            <S.ItemBackground>
              <S.Picture src={el.mainImg} />
              <S.InfoBox>
                <S.NameDateBox>
                  <S.BoardName>{el.title}</S.BoardName>
                </S.NameDateBox>
                <S.DatePickBox>
                  <S.WriteName>{el.user?.name}</S.WriteName>
                  {/* <S.Date>2일전</S.Date> */}
                  {/* <Tooltip placement="topRight" title="52"> */}
                  <S.PickBox>
                    <S.RedHeart icon={faHeart} />
                    {/* <S.Pick src="/img/community/redheart.png" /> */}
                    <S.PickCount>{el.like}</S.PickCount>
                  </S.PickBox>
                  {/* </Tooltip> */}
                </S.DatePickBox>
              </S.InfoBox>
            </S.ItemBackground>
            {/* </S.ItemBox> */}
          </span>
        ))}
      </S.Etc>

      <S.ButtonBox>
        <WebPurpleButton title="작성하기" onClick={props.onClickWrite} />
      </S.ButtonBox>
      <S.Pagination>◀️ 1 2 3 4 5 6 7 8 9 10 ▶️</S.Pagination>
    </S.Wrapper>
  );
}
