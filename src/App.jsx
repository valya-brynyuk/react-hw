import React from "react";

import MarkdownEditor from "./components/MarkdownEditor/MarkdownEditor.jsx";


export default class App extends React.Component {

  render() {

    return (
      <MarkdownEditor onContentChange={console.log} initialValue={'Hello World'} />
    );

  }
}