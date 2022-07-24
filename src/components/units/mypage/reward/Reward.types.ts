export interface IRewardUIProps {
  refetch: any;
  count: any;
  data: any;
}

export interface IFetchPayments {
  imp_uid: string;
  id: string;
  price: number;
  usepoint: number;
  reservation: {
    reservation_date: string;
  };
  user: {
    point: number;
  };
}
