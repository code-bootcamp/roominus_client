import { useState } from "react";
import CommentAnswerEditUI from "./CommentAnswerEdit.presenter";

export default function CommentAnswerEdit(props) {
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);
  const [answerEditId, setAnswerEditId] = useState("");

  const onClickEdit = (event) => {
    setIsAnswerEdit((prev) => !prev);
    setAnswerEditId(event.target.id);
  };

  return (
    <CommentAnswerEditUI
      answerEditId={answerEditId}
      // key={props.el.id}
      el={props.el}
      answerData={props.answerData}
      isAnswerEdit={isAnswerEdit}
      refetch={props.refetch}
      setIsAnswerEdit={setIsAnswerEdit}
      setAnswerEditId={setAnswerEditId}
      onClickDelete={props.onClickDelete}
      onClickEdit={onClickEdit}
    />
  );
}
