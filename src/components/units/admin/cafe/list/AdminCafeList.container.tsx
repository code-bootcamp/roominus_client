import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import AdminCafeListUI from "./AdminCafeList.presenter";
import { FETCH_CAFES } from "./AdminCafeList.query";

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
    <AdminCafeListUI
      onClickNew={onClickNew}
      onClickCard={onClickCard}
      data={data}
    />
  );
}
