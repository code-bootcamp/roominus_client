import { MouseEventHandler } from "react";

export interface IHomeUIProps {
  onClickMore: MouseEventHandler<HTMLSpanElement>;
  data: { fetchCafes: any[] };
  onClickCard: any;
  fetchThemes: { fetchThemes: any[] };
}
