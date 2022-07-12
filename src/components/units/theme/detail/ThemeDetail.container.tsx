import ThemeDetailUI from "./ThemeDetail.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_THEME } from "./ThemeDetail.queries";
import { useRouter } from "next/router";

export default function ThemeDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_THEME, {
    variables: {
      themeId: router.query.id,
    },
  });

  return <ThemeDetailUI data={data} />;
}
