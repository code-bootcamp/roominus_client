import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";

export default function ToastEditor(props) {
  console.log(props.defaultValue);
  return (
    <Editor
      onChange={props.onChangeContent}
      initialValue={props.defaultValue}
      previewStyle="vertical"
      height="550px"
      // initialEditType="wysiwyg"
      initialEditType="markdown"
      useCommandShortcut={true}
      ref={props.editorRef}
      plugins={[colorSyntax]}
    />
  );
}
