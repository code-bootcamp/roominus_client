import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CommunityDetailUI from "./CommunityDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./CommunityDetail.queries";

export default function CommunityDetail() {
  const router = useRouter();

  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      id: router.query.id,
    },
  });
  console.log(data);

  const onClickList = () => {
    router.push("/community");
  };

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { title: data?.fetchBoard.title },
      });
      alert("삭제가 완료되었습니다!!");
      router.push("/community");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <CommunityDetailUI
      onClickList={onClickList}
      onClickDelete={onClickDelete}
      data={data}
    />
  );
}
