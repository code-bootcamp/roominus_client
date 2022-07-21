import { useState } from "react";
import CommunityCommentEditUI from "./CommunityCommentEdit.presenter";
import { ICommunityCommentEdit } from "./CommunityCommentEdit.types";

export default function CommunityCommentEdit(props: ICommunityCommentEdit) {
  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState("");

  const [isAnswer, setIsAnswer] = useState(false);
  const [answerId, setAnswerId] = useState("");

  const onClickReComment = (event: any) => {
    setIsAnswer((prev) => !prev);
    setAnswerId(event.target.id);
  };

  const onClickEdit = (event: any) => {
    setIsEdit((prev) => !prev);
    setEditId(event.target.id);
  };

  return (
    <CommunityCommentEditUI
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      onClickEdit={onClickEdit}
      onClickDelete={props.onClickDelete}
      el={props.el}
      editId={editId}
      setEditId={setEditId}
      onClickReComment={onClickReComment}
      isAnswer={isAnswer}
      setIsAnswer={setIsAnswer}
      answerId={answerId}
    />
  );
}
