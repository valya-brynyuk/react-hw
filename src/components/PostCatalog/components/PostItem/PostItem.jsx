import React from "react";

const PostItem = (props) => {
  if (!props.id || !props.title || !props.body) {
    throw new Error("Id, title, body are required");
  }


  return (
    <li className="posts_single-post" data-post-id={props.id}>
      <h3 className="posts__post-title">{props.title}</h3>
      <p className="posts__post-description">{props.body}</p>
    </li>
  )

}

export default PostItem;
