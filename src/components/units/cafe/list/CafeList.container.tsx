import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CafeListUIPage from "./CafeList.presenter";
import { FETCH_CAFES } from "./CafeList.queries";

export default function CafeListPage() {
  const router = useRouter();

  const [total, setTotal] = useState(true);
  const [gangnam, setGangnam] = useState(false);
  const [hongdae, setHongdae] = useState(false);
  const [kondae, setKondae] = useState(false);

  const { data } = useQuery(FETCH_CAFES);
  console.log(data);

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

  const onClickCard = (el) => (event) => {
    router.push(`/cafe/${event?.currentTarget.id}`);
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
    />
  );
}
