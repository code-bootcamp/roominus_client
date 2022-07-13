import styled from "@emotion/styled";

export const Column = styled.span`
  margin: 0px 50px;
`;

interface IPageProps {
  isActive?: boolean;
}
export const Page = styled.button`
  margin: 0px 10px;
  background-color: white;
  border: 0px;
  border-radius: 30px;

  color: ${(props: IPageProps) => (props.isActive ? "#4A00E0" : "#26282C")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
