import styled from "@emotion/styled";

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.button`
  margin: 0px 10px;
  background-color: white;
  border: 0px;
  border-radius: 30px;
  font-size: 1.2em;

  color: ${(props: IPageProps) => (props.isActive ? "#4A00E0e7" : "black")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
