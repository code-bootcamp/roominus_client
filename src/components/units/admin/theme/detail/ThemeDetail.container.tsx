import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ThemeDetailUI from "./ThemeDetail.presenter";
import { FETCH_THEME } from "./ThemeDetail.query";

export default function ThemeDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_THEME, {
    variables: {
      title: router.query.title,
    },
  });

  return <ThemeDetailUI ThemeDetail={data} />;
}
