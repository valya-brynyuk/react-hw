import React from "react";

const ALLOWED_TYPES = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

class Alert extends React.Component {
  constructor(props) {
    super(props);

    if (!ALLOWED_TYPES.includes(this.props.type)) {
      throw new Error(`Type ${this.props.type} is not allowed`);
    }
  }

  render() {
    return (
      <div className={`alert alert-${this.props.type}`} role="alert">
        {this.props.text}
      </div>
    );
  }
}

export default Alert;