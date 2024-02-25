import React from "react";
import style from "./Content.module.css";

class Content extends React.Component {
  render() {
    return (
      <main className={`${this.props.className}`}>
        {this.props.children}
      </main>
    );
  }
}

export default Content;