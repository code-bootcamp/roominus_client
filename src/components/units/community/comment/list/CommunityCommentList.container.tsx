import { useState } from "react";
import CommunityCommentListUI from "./CommunityCommentList.presenter";

export default function CommunityCommentList() {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return <CommunityCommentListUI isEdit={isEdit} onClickEdit={onClickEdit} />;
}
