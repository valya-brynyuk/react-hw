import React from "react";
import classNames from "classnames";

class Carousel extends React.Component {
  items = [];

  constructor(props) {
    super(props);

    if (!Array.isArray(props.images)) {
      throw new Error('Images must be an array of images urls');
    }

    this.state = {
      activeIndex: 0
    };
  }

  prevHandler = () => {
    if (!this.props.images.length) {
      return;
    }
    this.setState((state) => {
      return {
        activeIndex: state.activeIndex - 1 < 0 ? this.props.images.length-1 : state.activeIndex - 1
      }
    })
  }

  nextHandler = () => {
    if (!this.props.images.length) {
      return;
    }
    this.setState((state) => {
      return {
        activeIndex: this.props.images.length <= state.activeIndex + 1 ? 0 : state.activeIndex + 1,
      }
    })
  }

  render() {


    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {this.props.images.map((image, index) => {
            const btnClass = classNames('carousel-item',
              {'active': index === this.state.activeIndex}
            )
            return (
              <div className={btnClass} key={image}>
                <img alt="" className="d-block w-100" src={image}/>
              </div>
            );
          })}
        </div>
        <button className="carousel-control-prev" onClick={this.prevHandler} data-bs-target="#carousel" type="button"
                data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" onClick={this.nextHandler} data-bs-target="#carousel" type="button"
                data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}

export default Carousel;