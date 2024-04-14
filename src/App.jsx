import React from "react";

import MarkdownEditor from "./components/MarkdownEditor/MarkdownEditor.jsx";

const App = () => {

  return (
    <MarkdownEditor onContentChange={console.log} initialValue={'Hello World'}/>
  );

}

export default App;