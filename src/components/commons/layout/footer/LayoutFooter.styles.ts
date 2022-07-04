import styled from "@emotion/styled";
import { GithubOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media ${breakPoints.mobile} {
    padding: 20px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 95%;
  max-width: 1440px;
  height: auto;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;

  @media ${breakPoints.mobile} {
  }
`;

export const MenuInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  word-break: word;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const MenuWrapper = styled.ul`
  display: flex;
`;

export const Menu = styled.li`
  margin-right: 15px;
  border-right: 1px solid black;
  padding-right: 15px;
  cursor: pointer;
  &:last-of-type {
    border: none;
  }
  font-weight: 600;
  font-size: 1.1rem;

  @media (max-width: 991px) {
    flex: 0 0 40%;
    padding-right: 0;
    margin-bottom: 0.5rem;
    text-align: center;
    &:nth-of-type(2) {
      border: none;
    }
  }
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const InfoWrapper = styled.div`
  word-break: word;

  @media ${breakPoints.mobile} {
    word-break: keep-all;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Info = styled.div`
  margin-top: 10px;
  font-weight: 400;
  font-size: 0.9rem;
  color: rgba(196, 196, 196, 1);
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ContactWrapperMobile = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  & > div {
    margin: 0;
    padding-right: 10px;
  }
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const Contact = styled.div`
  margin-bottom: 10px;
  text-align: center;
  @media ${breakPoints.mobile} {
    font-size: 20px;
  }
`;

export const ContactIcon = styled(GithubOutlined)`
  font-size: 2.5rem;
  color: black;
  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.mobile} {
    font-size: 30px;
  }
`;

// 반응형 Info 수정필요
