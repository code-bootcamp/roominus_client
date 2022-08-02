import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../src/commons/store";
import ThemeCommentList from "../../../src/components/units/theme/comment/list/ThemeCommentList.container";
import ThemeCommentWrite from "../../../src/components/units/theme/comment/write/ThemeCommentWrite.container";
import ThemeDetail from "../../../src/components/units/theme/detail/ThemeDetail.container";

const FETCH_THEME_REVIEWS = gql`
  query fetchThemeReviews($themeId: String!) {
    fetchThemeReviews(themeId: $themeId) {
      id
      clear
      rank
      content
      createdAt
      star
      user {
        id
      }
    }
  }
`;

const FETCH_RESERVATIONS_USER = gql`
  query fetchReservationsUser($page: Float) {
    fetchReservationsUser(page: $page) {
      id
      reservation_date
      theme_menu {
        reservation_time
        theme {
          id
          title
        }
      }
    }
  }
`;

interface IFetchReservationData {
  theme_menu: {
    theme: {
      id: string;
    };
  };
}

interface IFetchThemeReviewsData {
  id: string;
  user: {
    id: string;
  };
}

export default function ThemeDetailPage() {
  const router = useRouter();

  const [isReviewer, setIsReviewer] = useState(true);

  const [userInfo] = useRecoilState(userInfoState);

  const { data } = useQuery(FETCH_RESERVATIONS_USER, {
    variables: {
      page: 1,
    },
  });

  const { data: fetchThemeReviews } = useQuery(FETCH_THEME_REVIEWS, {
    variables: {
      themeId: router.query.id,
    },
  });

  useEffect(() => {
    fetchThemeReviews?.fetchThemeReviews.filter(
      (el: IFetchThemeReviewsData) => el.user.id === userInfo.id
    ).length >= 1
      ? setIsReviewer(false)
      : setIsReviewer(true);

    // 댓글 작성한 적이 있으면 댓글 다는 권한 false로 변경

    if (
      data?.fetchReservationsUser.filter(
        (ele: IFetchReservationData) =>
          ele.theme_menu.theme?.id === router.query.id
      ).length === 0
    ) {
      setIsReviewer(false);
    }

    // 예약한 내역이 없으면 댓글 다는 권한 false로 변경

    if (!userInfo.id) setIsReviewer(false);

    // 비로그인 회원이면 권한 false로 변경
  }, [fetchThemeReviews?.fetchThemeReviews]);

  return (
    <>
      <ThemeDetail />
      {isReviewer && <ThemeCommentWrite />}
      <ThemeCommentList />
    </>
  );
}
