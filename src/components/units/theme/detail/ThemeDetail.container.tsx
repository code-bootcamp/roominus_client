import ThemeDetailUI from "./ThemeDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_LIKE_THEME, FETCH_THEME } from "./ThemeDetail.queries";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../../../commons/store";
import { IFetchThemeData } from "./ThemeDetail.types";
import _ from "lodash";

export default function ThemeDetail() {
  const [userInfo] = useRecoilState(userInfoState);

  const router = useRouter();
  const { data } = useQuery(FETCH_THEME, {
    variables: {
      themeId: router.query.id,
    },
  });

  const [createLikeTheme] = useMutation(CREATE_LIKE_THEME);
  const [love, setLove] = useState(false);

  const getDebounce = _.debounce(async () => {
    const result = await createLikeTheme({
      variables: { themeId: router.query.id },
    });
    setLove(result.data?.createLikeTheme);
  }, 500);
  const onClickLove = async () => {
    getDebounce();
  };

  useEffect(() => {
    data?.fetchTheme.likeUsers.filter(
      (el: IFetchThemeData) => el.userId === userInfo.id
    ).length === 1
      ? setLove(true)
      : setLove(false);
  }, [data?.fetchTheme.likeUsers]);

  return <ThemeDetailUI love={love} data={data} onClickLove={onClickLove} />;
}
