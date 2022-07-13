import { useRouter } from "next/router";
import MyPickUI from "./MyPick.presenter";

export default function MyPick() {
  const router = useRouter();
  const onClickMoveToDetail = () => {
    router.push("/theme/_id");
  };
  return <MyPickUI onClickMoveToDetail={onClickMoveToDetail} />;
}
