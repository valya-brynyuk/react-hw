import React, {useEffect, useRef} from "react";
import '@toast-ui/editor/dist/toastui-editor.css';
import Editor from '@toast-ui/editor';

const MarkdownEditor = (props) => {
  let editor = null;
  const myRef = useRef();
  let debounceDescriptor = 0;

  if (!props.onContentChange || typeof props.onContentChange !== "function") {
    throw new Error("The provided onContentChange should be a function");
  }

  const editorChangeHandler = () => {
    clearTimeout(debounceDescriptor);
    debounceDescriptor = setTimeout(() => {
      const content = editor.getMarkdown();
      props.onContentChange(content);
    }, 400);

  }

  useEffect(() => {
    editor = new Editor({
      el: myRef.current,
      hideModeSwitch: true,
      initialValue: props.initialValue,
    });

    editor.addHook('change', editorChangeHandler);

    return () => {
      editor.removeHook('change');
      editor.destroy();
      editor = null;
    }
  }, []);


  return (
    <div ref={myRef}></div>
  );
}

export default MarkdownEditor;