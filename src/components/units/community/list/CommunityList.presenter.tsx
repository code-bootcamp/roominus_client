import { Tooltip } from "antd";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./CommunityList.styles";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function CommunityListUI(props) {
  return (
    <S.Wrapper>
      <S.Title>전체글보기</S.Title>
      <S.Etc>
        {new Array(8).fill(1).map((el) => (
          <span key={el}>
            {/* <S.ItemBox> */}
            <S.ItemBackground>
              <S.Picture
                src="/img/community/board.png"
                onClick={props.onClickCard}
              />
              <S.InfoBox>
                <S.NameDateBox>
                  <S.BoardName>유토피아 양도해요</S.BoardName>
                </S.NameDateBox>
                <S.DatePickBox>
                  <S.WriteName>짱구</S.WriteName>
                  {/* <S.Date>2일전</S.Date> */}
                  {/* <Tooltip placement="topRight" title="52"> */}
                  <S.PickBox>
                    <S.RedHeart icon={faHeart} />
                    {/* <S.Pick src="/img/community/redheart.png" /> */}
                    <S.PickCount>52</S.PickCount>
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
