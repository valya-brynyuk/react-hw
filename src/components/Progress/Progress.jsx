import React from "react";

class Progress extends React.Component {

  render() {
    return (
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{width: `${this.props.percentage}%`}}
             aria-valuenow={this.props.percentage} aria-valuemin="0"
             aria-valuemax="100"></div>
      </div>
    );
  }
}

export default Progress;