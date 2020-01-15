import React from "react";
import navMenuStyles from "./navMenu.module.css";

import { Link } from 'react-router-dom'

function NavMenu(props) {
  return (
    <nav className={navMenuStyles.navMenu}>
      <ul className={navMenuStyles.navMenu__lista}>
        <li className={navMenuStyles.navMenu__item}>
          <Link className={navMenuStyles.navMenu__link} to="/">
            Bem vindo(a): <br />
            <strong>{props.usuario}</strong>
          </Link>
        </li>
        <li className={navMenuStyles.navMenu__item}>
          <a className={navMenuStyles.navMenu__link} href="/">
            Página Inicial
          </a>
        </li>
        <li className={navMenuStyles.navMenu__item}>
          <a className={navMenuStyles.navMenu__link} href="/hashtags">
            Hashtags
          </a>
        </li>
        <li className={navMenuStyles.navMenu__item}>
          <a className={navMenuStyles.navMenu__link} href="/logout">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export { NavMenu }