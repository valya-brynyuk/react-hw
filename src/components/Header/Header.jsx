import React from "react";
import style from "./Header.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={`${style.header} ${this.props.className}`}>
        <a href="/"><img src="https://place-hold.it/80x50" alt="logo" className={style.logo}/></a>
        <nav>
          <ul className={style.menu}>
            <li><a href="#" className={style.menuItemLink}>About</a></li>
            <li><a href="#" className={style.menuItemLink}>Contact us</a></li>
            <li><a href="#" className={style.menuItemLink}>Pricing</a></li>
            <li><a href="#" className={style.menuItemLink}>FAQs</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;