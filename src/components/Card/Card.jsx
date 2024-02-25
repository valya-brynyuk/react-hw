import React from "react";
import style from "./Card.module.css";

class Card extends React.Component {
  btnClickHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!this.props.onClick) {
      return;
    } else if (typeof this.props.onClick !== 'function') {
      throw new Error('Card on Click handler must be a function')
    }

    this.props.onClick({
      title: this.props.title,
      text: this.props.text,
    });
  }

  render() {
    return (
      <div className={style.card}>
        <div className={style.body}>
          <h4 className={style.title}>{this.props.title}</h4>
          <p className={style.text}>{this.props.text}</p>
          <button type="button" className={style.button} onClick={this.btnClickHandler}>{this.props.btnText}</button>
        </div>
      </div>
    );
  }
}

export default Card;