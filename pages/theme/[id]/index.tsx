import useAuth from "../../../src/components/commons/hooks/useAuth";
import ThemeCommentList from "../../../src/components/units/theme/comment/list/ThemeCommentList.container";
import ThemeCommentWrite from "../../../src/components/units/theme/comment/write/ThemeCommentWrite.container";
import ThemeDetail from "../../../src/components/units/theme/detail/ThemeDetail.container";

export default function ThemeDetailPage() {
  useAuth();
  return (
    <>
      <ThemeDetail />
      <ThemeCommentWrite />
      <ThemeCommentList />
    </>
  );
}
