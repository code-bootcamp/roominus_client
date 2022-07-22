import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState, MouseEvent } from "react";
import Swal from "sweetalert2";
import ThemeUI from "./ThemeList.presenter";
import { FETCH_GENRES, FETCH_THEMES } from "./ThemeList.queries";
import { IFetchThemes } from "./ThemeList.types";

export default function ThemeList() {
  const [genre, setGenre] = useState("");
  const [selectAll, setSelectAll] = useState(true);
  const [more, setMore] = useState(true);

  const { data, fetchMore } = useQuery(FETCH_THEMES, {
    variables: {
      genreId: genre,
    },
  });

  const { data: hotThemes } = useQuery(FETCH_THEMES, {
    variables: {
      page: 2,
    },
  });

  const { data: fetchGenres } = useQuery(FETCH_GENRES);

  const router = useRouter();
  const [isToggled, setIsToggled] = useState(false);
  const onClickToggled = () => {
    setIsToggled(!isToggled);
  };

  const onClickTheme = (el: IFetchThemes) => () => {
    router.push(`/theme/${el.id}`);
  };

  const onClickMoreButton = async () => {
    if (!data) return;

    try {
      await fetchMore({
        variables: { page: Math.ceil(data?.fetchThemes.length) / 12 + 1 },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult.fetchThemes) {
            setMore(false);
            return {
              fetchThemes: [...prev.fetchThemes],
            };
          }

          return {
            fetchThemes: [...prev.fetchThemes, ...fetchMoreResult?.fetchThemes],
          };
        },
      });
    } catch (error) {
      setMore(false);

      Swal.fire({
        icon: "warning",
        title: "더이상 등록된 테마가 없습니다.",
      });
    }
  };
  const [myIndex, setMyIndex] = useState(
    Array(fetchGenres?.fetchGenres.length).fill(false)
  );

  const onClickGenre =
    (id: string, i: number) => (event: MouseEvent<HTMLButtonElement>) => {
      const temp = Array(fetchGenres?.fetchGenres.length).fill(false);
      temp[i] = true;
      setMyIndex(temp);
      setSelectAll(false);
      setGenre(id);
    };

  const onClickAllGenre = () => {
    setGenre("");
    const temp = Array(fetchGenres?.fetchGenres.length).fill(false);
    setMyIndex(temp);
    setSelectAll(true);
  };
  return (
    <ThemeUI
      data={data}
      more={more}
      hotThemes={hotThemes}
      myIndex={myIndex}
      fetchGenres={fetchGenres}
      selectAll={selectAll}
      setSelectAll={setSelectAll}
      onClickGenre={onClickGenre}
      onClickToggled={onClickToggled}
      onClickTheme={onClickTheme}
      onClickMoreButton={onClickMoreButton}
      onClickAllGenre={onClickAllGenre}
    />
  );
}
