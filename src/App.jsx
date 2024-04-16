import React, {useEffect} from "react";
import PostCatalog from "./components/PostCatalog/PostCatalog.jsx";
import {getPosts} from "./services/posts.js";


const App = () => {
  const [posts, setPosts] = React.useState([]);
  let abortController = null;
  useEffect(() => {
    abortController = new AbortController();
    getPosts(abortController).then(data => {
      setPosts(data)
    }).catch(alert);
    return () => {
      if (abortController) {
        abortController.abort();
      }
    }
  }, []);

  return (
    <PostCatalog posts={posts}/>
  );

};

export default App;