export interface IPaymentProps {
  totalPrice: number;
  ThemeMenuId: string;
  cafeId: string;
  reservationDate: string;
  memo: string;
  peopleNumber: number;
  usePoint: number;
  title: string;
  type: string;
}

export interface IRsp {
  success: boolean;
  imp_uid: string;
}
