import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import { EditorType } from "@toast-ui/editor";
import { LegacyRef } from "react";

export default function ToastEditor(props: {
  defaultValue: string;
  onChangeContent: (editorType: EditorType) => void;
  editorRef: LegacyRef<Editor>;
}) {
  return (
    <Editor
      onChange={props.onChangeContent}
      initialValue={props.defaultValue}
      previewStyle="vertical"
      height="550px"
      initialEditType="markdown" // or wysiwyg
      useCommandShortcut={true}
      ref={props.editorRef}
      plugins={[colorSyntax]}
    />
  );
}
