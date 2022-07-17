import useAuth from "../../src/components/commons/hooks/useAuth";
import Reservation from "../../src/components/units/reservation/reservation.container";

export default function ReservationPage() {
  useAuth();
  return <Reservation />;
}
