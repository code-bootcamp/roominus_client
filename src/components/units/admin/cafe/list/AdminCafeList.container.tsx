import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import AdminCafeListUI from "./AdminCafeList.presenter";
import { FETCH_CAFES } from "./AdminCafeList.query";
import { IFetchCafesProps } from "./AdminCafeList.types";

export default function AdminCafeList() {
  const router = useRouter();

  const { data } = useQuery(FETCH_CAFES);
  console.log(data);

  const onClickNew = () => {
    router.push("/admin/cafe/new");
  };

  const onClickCard =
    (el: IFetchCafesProps) => (event: MouseEvent<HTMLDivElement>) => {
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
