import React from "react";
import PostCatalog from "./components/PostCatalog/PostCatalog.jsx";
import {getPosts} from "./services/posts.js";

export default class App extends React.Component {
  #abortController = null;

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.#abortController = new AbortController();
    getPosts(this.#abortController).then(posts => {
      this.setState({posts});
    }).catch(alert);
  }

  componentWillUnmount() {
    if (this.#abortController) {
      this.#abortController.abort();
    }
  }

  render() {
    return (
      <PostCatalog posts={this.state.posts}/>
    );
  }

};

