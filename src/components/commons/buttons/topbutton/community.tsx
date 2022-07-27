import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
import { useRouter } from "next/router";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";

const ButtonBox = styled.div`
  @media ${breakPoints.mobile} {
    z-index: 999;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: 3em;
    transform: translate(-20%, -20%);
    border: none;
    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
    right: 0.2em;
  }
`;

export default function TopButton() {
  const router = useRouter();

  const onClickWrite = () => {
    router.push("/community/new");
  };

  return (
    <>
      <ButtonBox>
        <Fab
          aria-label="edit"
          style={{ backgroundColor: "#4a00e0e7", color: "white" }}
        >
          <EditIcon onClick={onClickWrite} />
        </Fab>
      </ButtonBox>
    </>
  );
}
