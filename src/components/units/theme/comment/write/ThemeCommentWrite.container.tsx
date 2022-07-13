import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ThemeCommentWriteUI from "./ThemeCommentWrite.presenter";
import {
  CREATE_THEME_REVIEW,
  FETCH_THEME_REVIEWS,
} from "./ThemeCommentWrite.queries";

export default function ThemeCommentWrite() {
  const router = useRouter();

  const [createThemeReview] = useMutation(CREATE_THEME_REVIEW);
  const [isEscape, setIsEscape] = useState("");

  const onClickSubmit = async (data) => {
    console.log(data);
    try {
      const result = await createThemeReview({
        variables: {
          createThemeReviewInput: {
            writerName: "신만두",
            ...data,
          },
          themeId: router.query.id,
        },
        refetchQueries: [
          {
            query: FETCH_THEME_REVIEWS,
            variables: { themeId: router.query.id },
          },
        ],
      });
      // setData(result?.data.createBoardComment._id);
      console.log(result?.data);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <ThemeCommentWriteUI onClickSubmit={onClickSubmit} isEscape={isEscape} />
  );
}
