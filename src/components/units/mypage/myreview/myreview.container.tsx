import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent } from "react";
import MyReviewUI from "./myreview.presenter";
import {
  FETCH_THEMES_REVIEWS_USER,
  FETCH_THEMES_REVIEWS_USER_COUNT,
} from "./myreview.query";

export default function MyReview() {
  const { data: reviews, refetch } = useQuery(FETCH_THEMES_REVIEWS_USER);
  const { data: count } = useQuery(FETCH_THEMES_REVIEWS_USER_COUNT);
  const router = useRouter();

  const onClickReview = (event: ChangeEvent) => {
    router.push(`/theme/${event.currentTarget.id}`);
  };
  return (
    <MyReviewUI
      reviews={reviews}
      count={count?.fetchThemeReviewsUserCount}
      refetch={refetch}
      onClickReview={onClickReview}
    />
  );
}
