import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ThemeCommentListUI from "./ThemeCommentList.presenter";
import { FETCH_THEME_REVIEWS } from "./ThemeCommentList.queries";

export default function ThemeCommentList() {
  const router = useRouter();

  const { data, fetchMore, refetch } = useQuery(FETCH_THEME_REVIEWS, {
    variables: {
      themeId: router.query.id,
    },
  });

  console.log(data);
  return <ThemeCommentListUI data={data} />;
}
