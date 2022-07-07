import { Tooltip } from "antd";
import WebPurpleButton from "../../../commons/buttons/buttonDesktop/WebPurpleButton";
import * as S from "./CommunityList.styles";

export default function CommunityListUI(props) {
  return (
    // <S.Container>
    <S.Wrapper>
      <S.Title>탈출인증게시판</S.Title>
      <S.Etc>
        {new Array(6).fill(1).map((el) => (
          <span key={el}>
            <S.ItemBox>
              <S.ItemBackground>
                <S.Picture
                  src="/img/community/board.png"
                  onClick={props.onClickCard}
                />
                <S.NamePickBox>
                  <S.BoardName>유토피아 탈출 성공 보드!</S.BoardName>
                  <Tooltip placement="left" title="52">
                    <S.Pick>❤️</S.Pick>
                  </Tooltip>
                </S.NamePickBox>
              </S.ItemBackground>
            </S.ItemBox>
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
