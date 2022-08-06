import Link from "next/link";
import WebBlackButton from "../../../commons/buttons/buttonDesktop/WebBlackButton";
import * as S from "../notice/styles";

export default function Notice02() {
  return (
    <>
      <S.Container>
        <S.TitleBox>
          <S.Title>8월 하계 휴무 안내</S.Title>
          <S.HighLighting></S.HighLighting>
        </S.TitleBox>

        <S.ContentsBox>
          <S.NoticeImage
            src={
              "https://res.cloudinary.com/dop5piuwp/image/upload/v1659681800/public/mypage/8%E1%84%8B%E1%85%AF%E1%86%AF_%E1%84%92%E1%85%B2%E1%84%80%E1%85%A1_z5v5k8.png"
            }
          />
        </S.ContentsBox>
        <S.ButtonBox>
          <Link href={"/home"}>
            <a>
              <WebBlackButton type="button" title="돌아가기" />
            </a>
          </Link>
        </S.ButtonBox>
      </S.Container>
    </>
  );
}
