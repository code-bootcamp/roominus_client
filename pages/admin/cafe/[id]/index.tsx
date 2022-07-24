import useAdminAuth from "../../../../src/components/commons/hooks/useAdminAuth";
import AdminCafeDetail from "../../../../src/components/units/admin/cafe/detail/AdminCafeDetail.container";

export default function AdminCafeDetailPage() {
  useAdminAuth();
  return <AdminCafeDetail />;
}
