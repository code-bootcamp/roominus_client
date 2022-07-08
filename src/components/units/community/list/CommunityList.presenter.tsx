import { Tooltip } from "antd";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./CommunityList.styles";

export default function CommunityListUI(props) {
  return (
    // <S.Container>
    <S.Wrapper>
      {/* <S.Title>탈출인증게시판</S.Title> */}
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
                <S.BoardName>유토피아 양도해요</S.BoardName>
                <S.DatePickBox>
                  <S.Date>2일전</S.Date>
                  {/* <Tooltip placement="topRight" title="52"> */}
                  <S.PickBox>
                    <S.Pick>❤️</S.Pick>
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
    // </S.Container    >
  );
}
