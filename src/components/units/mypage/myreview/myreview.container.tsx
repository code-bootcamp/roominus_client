import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import MyReviewUI from "./myreview.presenter";
import {
  FETCH_THEMES_REVIEWS_USER,
  FETCH_THEMES_REVIEWS_USER_COUNT,
} from "./myreview.query";

export default function MyReview() {
  const { data } = useQuery(FETCH_THEMES_REVIEWS_USER);
  const { data: count } = useQuery(FETCH_THEMES_REVIEWS_USER_COUNT);
  const router = useRouter();

  const onClickReview = (event: MouseEvent<HTMLSpanElement>) => {
    router.push(`/community/${event.currentTarget.id}`);
  };
  return <MyReviewUI data={data} count={count} onClickReview={onClickReview} />;
}
