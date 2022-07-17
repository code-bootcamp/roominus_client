export interface IReservationThemeInfoProps {
  data: {
    fetchThemeMenus: {
      [0]: {
        theme: {
          mainImg: string;
          title: string;
          intro_title: string;
          intro_content: string;
          rank: number;
          clearTime: string;
        };
        cafe: {
          address: string;
          name: string;
        };
      };
    };
  };
}
