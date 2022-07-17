import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import AdminCafeListUI from "./AdminCafeDetail.presenter";
import { DELETE_CAFE, FETCH_CAFE } from "./AdminCafeDetail.query";

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

  const onClickEdit = () => {
    router.push(`/admin/cafe/${router.query.id}/edit`);
  };

  const onClickDelete = () => {
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
      await deleteCafe({
        variables: { cafeId: router.query.id },
        // refetchQueries: [{ query: FETCH_CAFES }],
      });
      router.push("/admin/cafe");
    } catch (error) {
      Swal.fire({
        icon: "error",
        text: error.message,
      });
    }
  };

  return (
    <AdminCafeListUI
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      data={data}
    />
  );
}
