import styled from "@emotion/styled";
import { GithubOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";
export const Container = styled.div`
  width: 100%;
  background-color: beige;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const MenuInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    font-size: 0.1em;
  }
`;

export const Menu = styled.li`
  margin-right: 1em;
  border-right: 1px solid black;
  padding-right: 1em;
  cursor: pointer;
  &:last-of-type {
    border: none;
  }
  font-weight: 600;
  font-size: 1.1em;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;
export const Info = styled.div`
  margin-top: 0.8em;
  font-weight: 400;
  font-size: 0.9rem;
  color: rgba(196, 196, 196, 1);
  @media ${breakPoints.mobile} {
    font-size: 0.1em;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
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
`;

export const Contact = styled.div`
  text-align: center;
  @media ${breakPoints.mobile} {
    font-size: 0.1em;
  }
`;

export const ContactIcon = styled(GithubOutlined)`
  margin-top: 0.5em;
  font-size: 2.5em;
  color: black;
  :hover {
    cursor: pointer;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

// 반응형 Info 수정필요
