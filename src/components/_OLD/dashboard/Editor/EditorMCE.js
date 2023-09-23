import { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

import styles from "./Editor.module.css";

export default function EditorMCE({ initialValue }) {
  const [value, setValue] = useState(initialValue ?? '');
  useEffect(() => setValue(initialValue ?? ''), [initialValue]);

  return (
    <div className={styles.form_control}>
      <Editor
        apiKey="q3tkozz6vcabdqds13xo7mcpgfgo6gr8jkpclx00w1ngspmp"
        initialValue={initialValue}
        value={value}
        onEditorChange={(newValue, editor) => setValue(newValue)}
      />
    </div>
  );
}
