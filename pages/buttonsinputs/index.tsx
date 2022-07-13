import styled from "@emotion/styled";
import MobileBlackButton from "../../src/components/commons/buttons/buttonMobile/MobileBlackButton";
import MobilePurpleButton from "../../src/components/commons/buttons/buttonMobile/MobilePurpleButton";
import WebBlackButton from "../../src/components/commons/buttons/buttonDesktop/WebBlackButton";
import WebPurpleButton from "../../src/components/commons/buttons/buttonDesktop/WebPurpleButton";
import WebMiniButton from "../../src/components/commons/buttons/buttonMini/WebMiniButton";
import WebPurpleLoginButton from "../../src/components/commons/buttons/buttonDesktop/WebPurpleLoginButton";
import WebSmallBlackButton from "../../src/components/commons/buttons/buttonDesktop/WebSmallBlackButton";
import WebSmallPurpleButton from "../../src/components/commons/buttons/buttonDesktop/WebSmallPurpleButton";
import MobileHighlightUnderlineInput from "../../src/components/commons/inputs/inputsMobile/MobileWhiteroundInput";
import MobilePurpleBorderHighlightInput from "../../src/components/commons/inputs/inputsMobile/MobilePurpleBorderHighlightInput";
import MobileSmallSquareInput from "../../src/components/commons/inputs/inputsMobile/MobileSquareInput";
import MobileSquareInput from "../../src/components/commons/inputs/inputsMobile/MobileHighlightUnderlineInput";
import MobileWhiteroundInput from "../../src/components/commons/inputs/inputsMobile/MobileSmallSquareInput";
import WebHighlightUndelineInput from "../../src/components/commons/inputs/inputDesktop/WebHighlightUndelineInput";
import WebHighlightUnderlineSquareInput from "../../src/components/commons/inputs/inputDesktop/WebSquareInput";
import WebLongestHighlightUnderlineInput from "../../src/components/commons/inputs/inputDesktop/WebHighlightUnderlineSquareInput";
import WebSquareInput from "../../src/components/commons/inputs/inputDesktop/WebLongestHighlightUnderlineInput";
const Wrapper = styled.section`
  background-color: #a1a1a1;
  padding: 1em 1em 1em 1em;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`;

export default function ButtonsPage() {
  return (
    <Wrapper>
      <Box>
        <span>모바일버튼</span>
        <MobileBlackButton />
        <MobilePurpleButton />
      </Box>
      <Box>
        <span>웹버튼</span>
        <WebBlackButton />
        <WebPurpleButton />
        <WebPurpleLoginButton />
        <WebSmallBlackButton />
        <WebSmallPurpleButton />
      </Box>
      <Box>
        <span>웹버튼-미니사이즈</span>
        <WebMiniButton />
      </Box>
      <Box>
        <span>모바일 인풋</span>
        <MobileHighlightUnderlineInput />
        <MobilePurpleBorderHighlightInput />
        <MobileSmallSquareInput />
        <MobileSquareInput />
        <MobileWhiteroundInput />
      </Box>
      <Box>
        <span>웹 인풋</span>
        <WebHighlightUndelineInput />
        <WebHighlightUnderlineSquareInput />
        <WebLongestHighlightUnderlineInput />
        <WebSquareInput />
      </Box>
    </Wrapper>
  );
}
