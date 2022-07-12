import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  margin: 2em 0em;
  font-size: 1.5em;
`;

const Title = styled.div`
  color: #ea8e16;
`;

const DELETE_CAFE = gql`
  mutation deleteCafe($cafeId: String!) {
    deleteCafe(cafeId: $cafeId)
  }
`;

// const FETCH_CAFES = gql`
//   query fetchCafes {
//     fetchCafes {
//       id
//       name
//       phone
//       address
//     }
//   }
// `;

const FETCH_CAFE = gql`
  query fetchCafe($cafeId: String!) {
    fetchCafe(cafeId: $cafeId) {
      id
      name
      phone
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
      <Title>매장 디테일(관리자)</Title>
      <div>매장 이름: {data?.fetchCafe.name}</div>
      <div>매장 전화번호: {data?.fetchCafe.phone}</div>
      <button onClick={onClickList}>목록으로</button>
      <button onClick={onClickDelete}>삭제하기</button>
    </Wrapper>
  );
}
