import ThemeDetailUI from "./ThemeDetail.presenter";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_LIKE_THEME, FETCH_THEME } from "./ThemeDetail.queries";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userInfoState, userPickThemeState } from "../../../../commons/store";
import { IFetchThemeData } from "./ThemeDetail.types";
import _ from "lodash";
import Swal from "sweetalert2";

export default function ThemeDetail() {
  const [userInfo] = useRecoilState(userInfoState);
  const [, setPickTheme] = useRecoilState(userPickThemeState);

  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_THEME, {
    variables: {
      themeId: router.query.id,
    },
  });

  const [createLikeTheme] = useMutation(CREATE_LIKE_THEME);
  const [love, setLove] = useState(false);

  const getDebounce = _.debounce(async () => {
    try {
      const result = await createLikeTheme({
        variables: { themeId: router.query.id },
      });
      refetch();
      setLove(result.data?.createLikeTheme);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "로그인 후 이용해주세요!",
      });
    }
  }, 500);

  const onClickLove = async () => {
    getDebounce();
  };

  const onClickReservation = () => {
    setPickTheme(data.fetchTheme.id);
    router.push("/reservation");
  };

  const onClickMoveToList = () => {
    router.push("/theme");
  };

  useEffect(() => {
    data?.fetchTheme.likeUsers.filter(
      (el: IFetchThemeData) => el.userId === userInfo.id
    ).length === 1
      ? setLove(true)
      : setLove(false);
  }, [data?.fetchTheme.likeUsers]);

  return (
    <ThemeDetailUI
      love={love}
      data={data}
      onClickLove={onClickLove}
      onClickReservation={onClickReservation}
      onClickMoveToList={onClickMoveToList}
    />
  );
}
