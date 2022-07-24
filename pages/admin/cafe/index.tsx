import useAdminAuth from "../../../src/components/commons/hooks/useAdminAuth";
import AdminCafeList from "../../../src/components/units/admin/cafe/list/AdminCafeList.container";

export default function AdminCafeListPage() {
  useAdminAuth();
  return <AdminCafeList />;
}
