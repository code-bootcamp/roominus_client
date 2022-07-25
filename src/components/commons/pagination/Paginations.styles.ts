import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.button`
  margin: 0px 10px;
  border: none;
  border-radius: 50%;
  width: 1.4em;
  height: 1.4em;
  font-size: 1.1em;

  color: ${(props: IPageProps) => (props.isActive ? "white" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
  background-color: ${(props: IPageProps) =>
    props.isActive ? "#4A00E0e7" : "white"};

  @media ${breakPoints.mobile} {
    font-size: 1.1em;
    margin: 0px 5px;
  }
`;
