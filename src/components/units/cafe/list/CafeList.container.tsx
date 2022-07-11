import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import CafeListUIPage from "./CafeList.presenter";
import { FETCH_CAFES } from "./CafeList.queries";

export default function CafeListPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_CAFES);
  console.log(data);

  const onClickCard = (el) => (event) => {
    router.push(`/cafe/${event?.currentTarget.id}`);
  };

  return <CafeListUIPage onClickCard={onClickCard} data={data} />;
}
