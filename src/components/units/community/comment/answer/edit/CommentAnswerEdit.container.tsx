import { useState } from "react";
import CommentAnswerEditUI from "./CommentAnswerEdit.presenter";

export default function CommentAnswerEdit(props) {
  const [isAnswerEdit, setIsAnswerEdit] = useState(false);
  const [answerEditId, setAnswerEditId] = useState("");

  return (
    <CommentAnswerEditUI
      answerEditId={answerEditId}
      el={props.el}
      answerData={props.answerData}
    />
  );
}
