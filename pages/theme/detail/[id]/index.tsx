import ThemeCommentList from "../../../../src/components/units/theme/comment/list/ThemeCommentList.container";
import ThemeCommentWrite from "../../../../src/components/units/theme/comment/write/ThemeCommentWrite.container";
import ThemeDetail from "../../../../src/components/units/theme/detail/ThemeDetail.container";

export default function ThemeDetailPage() {
  return (
    <>
      <ThemeDetail />
      <ThemeCommentWrite />
      <ThemeCommentList />
    </>
  );
}
