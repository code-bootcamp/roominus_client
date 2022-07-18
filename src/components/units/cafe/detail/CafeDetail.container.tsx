import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import CafeDetailUI from "./CafeDetail.presenter";
import { FETCH_CAFE, FETCH_THEMES_ON_THEME } from "./CafeDetail.queries";
import { IFetchThemesOnTheme } from "./CafeDetail.types";

export default function CafeDetail() {
  const router = useRouter();

  const [tabKey, setTabKey] = useState("1");

  const { data } = useQuery(FETCH_CAFE, {
    variables: {
      cafeId: router.query.id,
    },
  });
  console.log(data);

  const { data: fetchThemesOnTheme } = useQuery(FETCH_THEMES_ON_THEME, {
    variables: {
      cafeId: router.query.id,
    },
  });
  console.log(fetchThemesOnTheme);

  const onChangeKey = (key: string) => {
    setTabKey(key);
  };

  const onClickTheme =
    (el: IFetchThemesOnTheme) => (event: MouseEvent<HTMLDivElement>) => {
      router.push(`/theme/${event?.currentTarget.id}`);
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
      themeData={fetchThemesOnTheme}
      onClickTheme={onClickTheme}
    />
  );
}
