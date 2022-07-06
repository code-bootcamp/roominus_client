import styled from "@emotion/styled";
import Button01 from "../../src/components/commons/buttons/buttonMobile/button1";
import Button02 from "../../src/components/commons/buttons/buttonMobile/button2";
import Button03 from "../../src/components/commons/buttons/buttonDesktop/button1";
import Button04 from "../../src/components/commons/buttons/buttonDesktop/button2";
import Button05 from "../../src/components/commons/buttons/buttonMini/button01";
import Button06 from "../../src/components/commons/buttons/buttonDesktop/loginbutton3";
import Button07 from "../../src/components/commons/buttons/buttonDesktop/smallbutton1";
import Button08 from "../../src/components/commons/buttons/buttonDesktop/smallbutton2";
import Input01 from "../../src/components/commons/inputs/inputsMobile/input1";
import Input02 from "../../src/components/commons/inputs/inputsMobile/input2";
import Input03 from "../../src/components/commons/inputs/inputsMobile/input3";
import Input04 from "../../src/components/commons/inputs/inputsMobile/input4";
import Input05 from "../../src/components/commons/inputs/inputsMobile/input5";
import Input06 from "../../src/components/commons/inputs/inputsMobile/input6";
import Input07 from "../../src/components/commons/inputs/inputDesktop/input1";
import Input08 from "../../src/components/commons/inputs/inputDesktop/input2";
import Input09 from "../../src/components/commons/inputs/inputDesktop/input3";
import Input10 from "../../src/components/commons/inputs/inputDesktop/input4";
import Input11 from "../../src/components/commons/inputs/inputDesktop/input5";
import Input12 from "../../src/components/commons/inputs/inputDesktop/input6";
import Input13 from "../../src/components/commons/inputs/inputDesktop/input7";
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
        <Button01 />
        <Button02 />
      </Box>
      <Box>
        <span>웹버튼</span>
        <Button03 />
        <Button04 />
        <Button06 />
        <Button07 />
        <Button08 />
      </Box>
      <Box>
        <span>웹버튼-미니사이즈</span>
        <Button05 />
      </Box>
      <Box>
        <span>모바일 인풋</span>
        <Input01 />
        <Input02 />
        <Input03 />
        <Input04 />
        <Input05 />
        <Input06 />
      </Box>
      <Box>
        <span>웹 인풋</span>
        <Input07 />
        <Input08 />
        <Input09 />
        <Input10 />
        <Input11 />
        <Input12 />
        <Input13 />
      </Box>
    </Wrapper>
  );
}
