import React from "react";

class PostItem extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.id || !this.props.title || !this.props.body) {
      throw new Error("Id, title, body are required");
    }
  }

  render() {
    return (
      <li className="posts_single-post" data-post-id={this.props.id}>
        <h3 className="posts__post-title">{this.props.title}</h3>
        <p className="posts__post-description">{this.props.body}</p>
      </li>
    )
  }
}

export default PostItem;
