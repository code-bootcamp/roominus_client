import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import Swal from "sweetalert2";
import AdminCafeListUI from "./AdminCafeList.presenter";
import { FETCH_CAFES } from "./AdminCafeList.query";
import { IFetchCafesProps } from "./AdminCafeList.types";

export default function AdminCafeList() {
  const router = useRouter();

  const { data, fetchMore } = useQuery(FETCH_CAFES);

  const onClickNew = () => {
    router.push("/admin/cafe/new");
  };

  const onClickCard =
    (el: IFetchCafesProps) => (event: MouseEvent<HTMLDivElement>) => {
      router.push(`/admin/cafe/${event?.currentTarget.id}`);
    };

  const loadFunc = async () => {
    if (!data) return;

    try {
      await fetchMore({
        variables: { page: Math.ceil(data.fetchCafes.length / 8) + 1 },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult.fetchCafes)
            return {
              fetchCafes: [...prev.fetchCafes],
            };

          return {
            fetchCafes: [...prev.fetchCafes, ...fetchMoreResult.fetchCafes],
          };
        },
      });
    } catch (error) {
      Swal.fire({
        icon: "warning",
        title: (error as Error).message,
        backdrop: false,
      });
    }
  };

  return (
    <AdminCafeListUI
      onClickNew={onClickNew}
      onClickCard={onClickCard}
      data={data}
      loadFunc={loadFunc}
    />
  );
}
