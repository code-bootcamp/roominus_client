import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Container = styled.main`
  width: 30%;

  border-right: 1px solid darkgray;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const Wrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const UserNameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 8.13em;
  height: 8.13em;
  background: linear-gradient(
    90deg,
    #6ac0de -0.01%,
    #76bbe0 10.99%,
    #9eabe6 49.99%,
    #b6a2ea 81%,
    #bf9eeb 100%
  );
  margin: 2em 0em 2em 0em;
  color: white;
`;

export const UserData = styled.span`
  font-size: 1.5em;
  cursor: pointer;
`;

export const line = styled.div`
  border: 1px solid #d9d6d0;
  width: 100%;
`;

export const MenuBoxs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 0.8em;
`;

export const MenuItem = styled.li`
  font-weight: ${(props) => (props.isActive ? "500" : "normal")};
  cursor: ${(props) => (props.isActive ? "none" : "pointer")};
  color: ${(props) => (props.isActive ? "#BF9EEB" : "#26282C")};
  font-size: 1.5em;
`;

export const MenuFooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  gap: 0.5em;
  margin-top: 10em;
`;

export const FooterBox = styled.div`
  display: flex;
  gap: 0.3em;
  cursor: pointer;
`;
