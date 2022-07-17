import { Dispatch, SetStateAction } from "react";

export interface IThemeCommentListUIProps {
  loadMore: (page: number) => void;
  data: any;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
}

export interface IThemeCommentListUIItemProps {
  el?: any;
}
