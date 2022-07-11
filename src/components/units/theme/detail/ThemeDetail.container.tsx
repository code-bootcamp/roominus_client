import ThemeDetailUI from "./ThemeDetail.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_THEME } from "./ThemeDetail.queries";

export default function ThemeDetail() {
  const { data } = useQuery(FETCH_THEME, {
    variables: {
      themeId: "748b7dda-5b1e-49f7-ab87-f34c6c9697da",
    },
  });

  return <ThemeDetailUI data={data} />;
}
