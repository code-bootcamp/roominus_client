export interface IMyPageInfoUIProps {
  reservation: {
    fetchReservationsUser: any;
  };
  payments: {
    fetchPayments: any;
  };
}

export interface IFetchReservationUser {
  status: string;
  reservation_date: string;
}

export interface IFetchPayments {
  id: string;
  title: string;
  writer: string;
  createdAt: string;
}
