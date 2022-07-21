import { gql } from "@apollo/client";

export const FETCH_USER_LIKE_THEMES = gql`
  query fetchUserLikeThemes {
    fetchUserLikeThemes {
      theme {
        title
        like
      }
    }
  }
`;

// export const FETCH_THEMES_REVIEWS_USER_COUNT = gql`
//   query fetchThemeReviewsUserCount {
//     fetchThemeReviewsUserCount
//   }
// `;
