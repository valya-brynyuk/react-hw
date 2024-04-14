import React from "react";
import '@toast-ui/editor/dist/toastui-editor.css';
import Editor from '@toast-ui/editor';

class MarkdownEditor extends React.Component {
  #editor = null;
  #myRef = null;
  #debounceDescriptor = 0;


  constructor(props) {
    super(props);
    if (!props.onContentChange || typeof props.onContentChange !== "function") {
      throw new Error("The provided onContentChange should be a function");
    }
    this.#myRef = React.createRef();

  }

  editorChangeHandler = () => {
    clearTimeout(this.#debounceDescriptor);
    this.#debounceDescriptor = setTimeout(() => {
      const content = this.#editor.getMarkdown();
      this.props.onContentChange(content);
    }, 400);

  }

  componentDidMount() {
    this.#editor = new Editor({
      el: this.#myRef.current,
      hideModeSwitch: true,
      initialValue: this.props.initialValue,
    });

    this.#editor.addHook('change', this.editorChangeHandler);
  }

  componentWillUnmount() {
    this.#editor.removeHook('change');
    this.#editor.destroy();
    this.#editor = null;
  }

  render() {
    return (
      <div ref={this.#myRef}></div>
    );
  }
}

export default MarkdownEditor;