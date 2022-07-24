import useAdminAuth from "../../../../src/components/commons/hooks/useAdminAuth";
import ThemeList from "../../../../src/components/units/admin/theme/list/ThemeList.container";

export default function AdminThemeListPage() {
  useAdminAuth();
  return <ThemeList />;
}
