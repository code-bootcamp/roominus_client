import { useRouter } from "next/router";
import { useState } from "react";
import CafeDetailUI from "./CafeDetail.presenter";

export default function CafeDetail() {
  const router = useRouter();

  const [tabKey, setTabKey] = useState("1");

  const onChangeKey = (key: string) => {
    setTabKey(key);
  };

  const onClickList = () => {
    router.push("/cafe");
  };

  return (
    <CafeDetailUI
      tabKey={tabKey}
      onChangeKey={onChangeKey}
      onClickList={onClickList}
    />
  );
}
