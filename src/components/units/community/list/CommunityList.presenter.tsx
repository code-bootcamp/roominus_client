import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./CommunityList.styles";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ICommunityListProps, IFetchBoardsProps } from "./CommunityList.types";
import Paginations02 from "../../../commons/pagination02/Paginations.container";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
export default function CommunityListUI(props: ICommunityListProps) {
  const error = /^.*[.(jpg | svg | png | jpeg | gif )]$/g;

  return (
    <S.Wrapper>
      <S.TitleBox>
        <AssignmentIndOutlinedIcon fontSize="large" />
        <h1>전체글보기</h1>
      </S.TitleBox>

      <S.CountBox>
        <span>총 {props.count?.fetchBoardsCount}건</span>
      </S.CountBox>
      <S.Etc>
        {props.data?.fetchBoards.map((el: IFetchBoardsProps) => (
          <span key={el.id} id={el.id} onClick={props.onClickCard(el)}>
            <S.ItemBackground>
              <S.Picture
                src={
                  new RegExp(error, "i").test(el.mainImg)
                    ? el.mainImg
                    : "/img/community/noImage.png"
                }
              />
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

      <S.ButtonBox>
        <WebPurpleButton title="작성하기" onClick={props.onClickWrite} />
      </S.ButtonBox>
      <S.PaginationsWrapper>
        <Paginations02
          count={props.count?.fetchBoardsCount}
          refetch={props.refetch}
        />
      </S.PaginationsWrapper>
    </S.Wrapper>
  );
}
