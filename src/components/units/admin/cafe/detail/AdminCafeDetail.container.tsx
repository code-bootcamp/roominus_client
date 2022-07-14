import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
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
    <AdminCafeListUI
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      data={data}
    />
  );
}
