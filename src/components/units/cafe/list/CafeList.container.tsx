import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import Swal from "sweetalert2";
import CafeListUIPage from "./CafeList.presenter";
import { FETCH_CAFES } from "./CafeList.queries";
import { IFetchCafesProps } from "./CafeList.types";

export default function CafeListPage() {
  const router = useRouter();

  const [total, setTotal] = useState(true);
  const [gangnam, setGangnam] = useState(false);
  const [hongdae, setHongdae] = useState(false);
  const [kondae, setKondae] = useState(false);

  const { data, fetchMore } = useQuery(FETCH_CAFES);

  const onClickTotal = () => {
    setTotal(true);
    setGangnam(false);
    setHongdae(false);
    setKondae(false);
  };

  const onClickGangnam = () => {
    setTotal(false);
    setGangnam(true);
    setHongdae(false);
    setKondae(false);
  };

  const onClickHongdae = () => {
    setTotal(false);
    setGangnam(false);
    setHongdae(true);
    setKondae(false);
  };

  const onClickKondae = () => {
    setTotal(false);
    setGangnam(false);
    setHongdae(false);
    setKondae(true);
  };

  const onClickCard =
    (el: IFetchCafesProps) => (event: MouseEvent<HTMLDivElement>) => {
      router.push(`/cafe/${event?.currentTarget.id}`);
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
      });
    }
  };

  return (
    <CafeListUIPage
      onClickCard={onClickCard}
      data={data}
      total={total}
      gangnam={gangnam}
      hongdae={hongdae}
      kondae={kondae}
      onClickTotal={onClickTotal}
      onClickGangnam={onClickGangnam}
      onClickHongdae={onClickHongdae}
      onClickKondae={onClickKondae}
      loadFunc={loadFunc}
    />
  );
}
