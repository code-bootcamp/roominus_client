import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import CafeDetailUI from "./CafeDetail.presenter";
import { FETCH_CAFE } from "./CafeDetail.queries";

export default function CafeDetail() {
  const router = useRouter();

  const [tabKey, setTabKey] = useState("1");

  const { data } = useQuery(FETCH_CAFE, {
    variables: {
      cafeId: router.query.id,
    },
  });
  console.log(data);

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
      data={data}
    />
  );
}
