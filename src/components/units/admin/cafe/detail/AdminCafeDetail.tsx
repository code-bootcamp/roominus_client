import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import WebSmallBlackButton from "../../../../commons/buttons/buttonDesktop/WebSmallBlackButton";
import WebSmallPurpleButton from "../../../../commons/buttons/buttonDesktop/WebSmallPurpleButton";

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

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2em 0em;
`;

const Img = styled.img`
  width: 15em;
  height: 15em;
  margin-right: 1em;
  background-color: gray;
`;

const Info = styled.div`
  font-size: 1em;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
`;

const DELETE_CAFE = gql`
  mutation deleteCafe($cafeId: String!) {
    deleteCafe(cafeId: $cafeId)
  }
`;

const FETCH_CAFE = gql`
  query fetchCafe($cafeId: String!) {
    fetchCafe(cafeId: $cafeId) {
      id
      name
      phone
      intro_content
      address
      address_detail
      mainImg
    }
  }
`;

export default function AdminCafeDetail() {
  const router = useRouter();

  const [deleteCafe] = useMutation(DELETE_CAFE);

  const { data } = useQuery(FETCH_CAFE, {
    variables: {
      cafeId: router.query.id,
    },
  });
  console.log(data);

  const onClickList = () => {
    router.push("/admin/cafe");
  };

  const onClickEdit = () => {};

  const onClickDelete = async () => {
    try {
      await deleteCafe({
        variables: { cafeId: router.query.id },
        // refetchQueries: [{ query: FETCH_CAFES }],
      });
      alert("삭제가 완료되었습니다!!");
      router.push("/admin/cafe");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Wrapper>
      <Title>매장 상세페이지(관리자)</Title>
      <InfoBox>
        <Img src={data?.fetchCafe.mainImg} />
        <Info>
          <div>이름: {data?.fetchCafe.name}</div>
          <div>지역: {data?.fetchCafe.address}</div>
          <div>전화번호: {data?.fetchCafe.phone}</div>
          <div>소개: {data?.fetchCafe.intro_content}</div>
          <div>주소: {data?.fetchCafe.address_detail}</div>
        </Info>
      </InfoBox>
      <ButtonBox>
        <WebSmallBlackButton onClick={onClickList} title="목록으로" />
        <WebSmallPurpleButton onClick={onClickEdit} title="수정하기" />
        <WebSmallPurpleButton onClick={onClickDelete} title="삭제하기" />
      </ButtonBox>
    </Wrapper>
  );
}
