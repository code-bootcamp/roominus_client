import { useState } from "react";
import CommunityCommentEditUI from "./CommunityCommentEdit.presenter";
import { ICommunityCommentEdit } from "./CommunityCommentEdit.types";

export default function CommunityCommentEdit(props: ICommunityCommentEdit) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit((prev) => !prev);
  };

  return (
    <CommunityCommentEditUI
      isEdit={isEdit}
      onClickEdit={onClickEdit}
      onClickDelete={props.onClickDelete}
      el={props.el}
    />
  );
}
