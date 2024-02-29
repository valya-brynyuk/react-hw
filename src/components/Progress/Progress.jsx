import React from "react";

class Progress extends React.Component {
  constructor() {
    super();

    if (!Number.isFinite(this.props.percentage)) {
      throw new Error('Percentage must be a valid number');
    } else if (this.props.percentage < 0) {
      throw new Error('Percentage must be greater than 0');
    } else if (this.props.percentage > 100) {
      throw new Error('Percentage must be less than 100');
    }
  }

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