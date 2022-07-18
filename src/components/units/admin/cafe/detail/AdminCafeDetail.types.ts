export interface IAdminCafeListUIProps {
  onClickList: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
  data: {
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
