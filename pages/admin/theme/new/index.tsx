import useAdminAuth from "../../../../src/components/commons/hooks/useAdminAuth";
import ThemeCreate from "../../../../src/components/units/admin/theme/new/ThemeCreate.container";

export default function AdminThemePage() {
  useAdminAuth();
  return <ThemeCreate isEdit={false} />;
}
