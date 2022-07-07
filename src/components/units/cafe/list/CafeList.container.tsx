import { useRouter } from "next/router";
import CafeListUIPage from "./CafeList.presenter";

export default function CafeListPage() {
  const router = useRouter();

  const onClickCard = () => {
    router.push("/cafe/_id");
  };

  return <CafeListUIPage onClickCard={onClickCard} />;
}
