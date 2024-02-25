import React from "react";
import style from "./Card.module.css";

class Card extends React.Component {

  render() {
    return (
      <div className={style.card}>
        <div className={style.body}>
          {this.props.title?.length ? <h4 className={style.title}>{this.props.title}</h4> : null}
          {this.props.text?.length ? <p className={style.text}>{this.props.text}</p> : null}
        </div>
      </div>
    );
  }
}

export default Card;