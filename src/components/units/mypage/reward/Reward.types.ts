export interface IRewardUIProps {
  count: any;
  data: any;
}

export interface IFetchPayments {
  price: number;
  usepoint: number;
  reservation: {
    reservation_date: string;
  };
  user: {
    point: number;
  };
}
