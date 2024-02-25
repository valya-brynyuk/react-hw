import React from "react";
import style from "./Sidebar.module.css";

class Header extends React.Component {
  render() {
    return (
      <aside className={`${style.sidebar} ${this.props.className}`}>
        <img src="https://place-hold.it/300x500" alt="Banner" className={style.banner}/>
        <hr/>
        <img src="https://place-hold.it/300x500" alt="Banner" className={style.banner}/>
      </aside>
    );
  }
}

export default Header;