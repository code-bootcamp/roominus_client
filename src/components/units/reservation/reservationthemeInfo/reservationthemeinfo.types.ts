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
          peoplelimit: number;
          agelimit: number;
        };
        cafe: {
          address: string;
          name: string;
        };
      };
    };
  };
}
