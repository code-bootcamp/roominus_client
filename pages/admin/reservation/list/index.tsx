import useAdminAuth from "../../../../src/components/commons/hooks/useAdminAuth";
import AdminReservationList from "../../../../src/components/units/admin/reservation/list/AdminReservationList";

export default function AdminReservationListPage() {
  useAdminAuth();
  return <AdminReservationList />;
}
