import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ThemeDetailUI from "./ThemeDetail.presenter";
import { DELETE_THEME, FETCH_THEME } from "./ThemeDetail.query";

export default function ThemeDetail() {
  const router = useRouter();

  const [deleteTheme] = useMutation(DELETE_THEME);

  const { data } = useQuery(FETCH_THEME, {
    variables: {
      themeId: router.query.id,
    },
  });
  const themeId = router.query.id;

  const onClickList = () => {
    router.push("/admin/theme/list");
  };

  const onClickEdit = (themeId: string) => () => {
    router.push(`/admin/theme/${themeId}/edit`);
  };

  const onClickDelete = async () => {
    try {
      await deleteTheme({
        variables: { themeId: router.query.id },
      });
      alert("삭제가 완료되었습니다!!");
      router.push("/admin/theme/list");
    } catch (error) {
      alert((error as Error).message);
    }
  };
  const onClickMoveToCreateThemeMenu = () => {
    router.push(`/admin/themeMenu/new/${themeId}`);
  };
  return (
    <ThemeDetailUI
      ThemeDetail={data}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
      onClickDelete={onClickDelete}
      onClickMoveToCreateThemeMenu={onClickMoveToCreateThemeMenu}
    />
  );
}
