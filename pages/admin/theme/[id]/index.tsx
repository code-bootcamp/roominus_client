import useAdminAuth from "../../../../src/components/commons/hooks/useAdminAuth";
import ThemeDetail from "../../../../src/components/units/admin/theme/detail/ThemeDetail.container";

export default function ThemeDetailPage() {
  useAdminAuth();
  return <ThemeDetail />;
}
