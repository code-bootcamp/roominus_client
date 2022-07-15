export interface ICafeDetailUI {
  tabKey: string;
  onChangeKey: (key: string) => void;
  onClickList: () => void;
  data?: {
    fetchCafe: {
      mainImg: string;
      name: string;
      address: string;
      phone: string;
      intro_content: string;
      address_detail: string;
    };
  };
}
