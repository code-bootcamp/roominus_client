import { useState } from "react";
import CafeDetailUI from "./CafeDetail.presenter";

export default function CafeDetail() {
  const [tabKey, setTabKey] = useState("1");

  const onChangeKey = (key: string) => {
    setTabKey(key);
  };

  return <CafeDetailUI tabKey={tabKey} onChangeKey={onChangeKey} />;
}
