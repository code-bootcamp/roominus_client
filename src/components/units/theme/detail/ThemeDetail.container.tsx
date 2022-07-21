import ThemeDetailUI from "./ThemeDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_LIKE_THEME, FETCH_THEME } from "./ThemeDetail.queries";
import { useRouter } from "next/router";
import { useState } from "react";

export default function ThemeDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_THEME, {
    variables: {
      themeId: router.query.id,
    },
  });

  const [createLikeTheme] = useMutation(CREATE_LIKE_THEME);
  const [love, setLove] = useState(false);

  const onClickLove = async () => {
    const result = await createLikeTheme({
      variables: { themeId: router.query.id },
    });
    setLove(result.data?.createLikeTheme);
  };
  return <ThemeDetailUI love={love} data={data} onClickLove={onClickLove} />;
}
