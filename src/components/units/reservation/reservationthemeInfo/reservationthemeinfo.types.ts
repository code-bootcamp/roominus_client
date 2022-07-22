export interface IReservationThemeInfoProps {
  timeTable: any;
  data: {
    fetchThemeMenus: {
      map(arg0: (el: any) => any): import("react").ReactNode;
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
