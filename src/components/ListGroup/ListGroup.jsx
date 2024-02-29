import React from "react";

class ListGroup extends React.Component {
  items = [];

  constructor(props) {
    super(props);
    if (this.props.children) {
      this.items = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
    }
  }

  render() {
    return (
      <ul className="list-group">
        {this.items.map((item, index) => (
          <li key={`item-${index}`} className="list-group-item">{item}</li>
        ))}
      </ul>
    );
  }
}

export default ListGroup;