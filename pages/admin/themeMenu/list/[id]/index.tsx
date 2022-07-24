import useAdminAuth from "../../../../../src/components/commons/hooks/useAdminAuth";
import ThemeMenuList from "../../../../../src/components/units/admin/themeMenu/list/ThemeMenuList.container";

export default function ThemeMenuListPage() {
  useAdminAuth();
  return <ThemeMenuList />;
}
