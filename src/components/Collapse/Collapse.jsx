import React from "react";
import classNames from "classnames";

class Collapse extends React.Component {
  items = [];

  constructor(props) {
    super(props);

    this.state = {
      opened: this.props.opened
    };
  }

  openedHandler = (e) => {
    e.preventDefault();
    this.setState((state) => {
      return {
        opened: !state.opened
      }
    })
  }

  render() {
    const btnClass = classNames(
      'collapse',
      {'show': this.state.opened}
    )

    return (

      <div>
        <p>
          <a className="btn btn-primary" data-bs-toggle="collapse" href="#" role="button"
             aria-expanded={this.state.opened} onClick={this.openedHandler}>Link
            with href</a>
        </p>
        <div className={btnClass}>
          <div className="card card-body">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

export default Collapse;