import { useQuery } from "@apollo/client";
import MyReviewUI from "./myreview.presenter";
import { FETCH_THEMES_USER } from "./myreview.query";

export default function MyReview() {
  const { data } = useQuery(FETCH_THEMES_USER);

  return <MyReviewUI data={data} />;
}
