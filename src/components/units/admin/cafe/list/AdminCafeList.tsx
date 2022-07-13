import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import WebSmallPurpleButton from "../../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";
import ListCards from "../../../cafe/list/card/ListCards";

export const FETCH_CAFES = gql`
  query fetchCafes {
    fetchCafes {
      id
      name
      phone
      address
      mainImg
    }
  }
`;

const Wrapper = styled.div`
  margin: 2em 0em;
  font-size: 1.5em;
`;

const Title = styled.div`
  color: #bf9eeb;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 1em 0em;
  /* background-color: yellow; */
`;

const Etc = styled.div`
  width: 100%;
  /* background-color: lightgreen; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export default function AdminCafeList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_CAFES);
  console.log(data);

  const onClickNew = () => {
    router.push("/admin/cafe/new");
  };

  const onClickCard = (el) => (event) => {
    router.push(`/admin/cafe/${event?.currentTarget.id}`);
  };

  return (
    <Wrapper>
      <Title>매장리스트(관리자)</Title>
      <ButtonBox>
        <WebSmallPurpleButton onClick={onClickNew} title="매장등록" />
      </ButtonBox>
      <Etc>
        {data?.fetchCafes.map((el) => (
          <span key={el.id} id={el.id} onClick={onClickCard(el)}>
            <ListCards el={el} />
          </span>
        ))}
      </Etc>
    </Wrapper>
  );
}
