import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
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

  const onClickEdit = () => {
    router.push(`/community/${router.query.id}/edit`);
  };

  const onClickDelete = async () => {
    Swal.fire({
      icon: "question",
      title: "정말 삭제하시겠습니까?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        onClickDeleteModal();
        Swal.fire({
          icon: "success",
          title: "삭제되었습니다!",
        });
      }
    });
  };

  const onClickDeleteModal = async () => {
    try {
      await deleteBoard({
        variables: { boardId: router.query.id },
      });
      router.push("/community");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: (error as Error).message,
      });
    }
  };

  return (
    <CommunityDetailUI
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      data={data}
    />
  );
}
