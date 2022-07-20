import { useState } from "react";
import CommunityCommentEditUI from "./CommunityCommentEdit.presenter";

export default function CommunityCommentEdit(props) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  console.log(props.el);
  return (
    <CommunityCommentEditUI
      isEdit={isEdit}
      onClickEdit={onClickEdit}
      onClickDelete={props.onClickDelete}
      el={props.el}
    />
  );
}
