import useAdminAuth from "../../../../src/components/commons/hooks/useAdminAuth";
import AdminCafeNew from "../../../../src/components/units/admin/cafe/new/AdminCafeNew.container";

export default function AdminCafeNewPage() {
  useAdminAuth();
  return <AdminCafeNew isEdit={false} />;
}
