import React from "react";
import classNames from "classnames";

class BtnGroup extends React.Component {
  items = [];

  constructor(props) {
    super(props);

    this.state = {
      activeButton: ''
    };
  }

  #getBtnClasses(type) {
    return classNames('btn', type, this.state.activeButton === type ? 'btn-primary' : 'btn-secondary')
  }

  btnClickHandler(type) {
    this.setState({activeButton: type});
  }

  render() {
    return (
      <div className="btn-group" role="group">
        <button type="button" className={this.#getBtnClasses('left')} onClick={() => this.btnClickHandler('left')}>Left</button>
        <button type="button" className={this.#getBtnClasses('right')} onClick={() => this.btnClickHandler('right')}>Right</button>
      </div>
    );
  }
}

export default BtnGroup;