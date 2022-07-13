import styled from "@emotion/styled";
import { PlusCircleOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;

export const Title = styled.div`
  font-size: 2em;
  font-weight: 500;
  color: #bf9eeb;
  text-align: center;
`;

export const InputsTitle = styled.span`
  margin-top: 2em;
  font-size: 1.3em;
`;
export const ImgAddBtn = styled(PlusCircleOutlined)`
  font-size: 2em;
`;
export const ImgBox = styled.div`
  width: 10em;
  height: 10em;
  background-color: #4a00e098;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const RealImgInput = styled.input`
  visibility: hidden;
`;
export const PreviewBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
`;
export const PreviewImg = styled.img`
  width: 10em;
  height: 10em;
`;
export const PreviewEmpty = styled.div`
  width: 10em;
  height: 10em;
  background: url("/img/home/home.png") center/cover;
`;
export const Form2 = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`;
