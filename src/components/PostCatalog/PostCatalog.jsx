import React from "react";
import PostItem from "./components/PostItem/PostItem.jsx";

const PostCatalog = (props) => {
  if (!props.posts || !Array.isArray(props.posts)) {
    throw new Error("Posts must be an array");
  }


  return (
    <div className="posts">
      <ul className="posts__list">
        {
          props.posts.map(post => (
            <PostItem key={`${post.id}-post-item`} id={post.id} title={post.title} body={post.body}/>))
        }

      </ul>
    </div>
  )

}

export default PostCatalog;
