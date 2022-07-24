import useAdminAuth from "../../../../src/components/commons/hooks/useAdminAuth";
import AdminReservationNew from "../../../../src/components/units/admin/reservation/new/AdminReservationNew";

export default function AdminReservationMenuNewPage() {
  useAdminAuth();
  return <AdminReservationNew />;
}
