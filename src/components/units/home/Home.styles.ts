import styled from "@emotion/styled";
import { EnvironmentOutlined } from "@ant-design/icons";
export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackGroundImg = styled.div`
  width: 100%;
  height: 45em;
  background: url("/img/home/home.png");
`;

export const StoreBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StoreTitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const StoreImgbox = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StoreImgs = styled.img`
  width: 18em;
  height: 14.6em;
`;
export const Location = styled(EnvironmentOutlined)``;
