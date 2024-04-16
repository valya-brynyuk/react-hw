import React from "react";
import PostItem from "./components/PostItem/PostItem.jsx";

class PostCatalog extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.posts || !Array.isArray(this.props.posts)) {
      throw new Error("Posts must be an array");
    }
  }

  render() {
    return (
      <div className="posts">
        <ul className="posts__list">
          {
            this.props.posts.map(post => (
              <PostItem key={`${post.id}-post-item`} id={post.id} title={post.title} body={post.body}/>))
          }

        </ul>
      </div>
    )
  }
}

export default PostCatalog;
