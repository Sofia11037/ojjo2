import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

export default function Header() {
  const [isFirstClick, setIsFirstClick] = useState(true);

  return (
    <nav>
      <div className="nav_container">
        <div className="nav_left">
          <NavLink to="/">Контрагентам</NavLink>
          <NavLink to="/">Дизайнерам</NavLink>
          <NavLink to="/">Вакансии</NavLink>
        </div>
        <NavLink to="/" className="logo">
          <img className="logo-img" src="/image/logo.png" alt="logo" />
        </NavLink>
        <div className="nav_right">
          <div className="search">
            <img src="/icons/search.svg" alt="search" />
            <span>Поиск</span>
          </div>
          <div className="auth">Вход/Регистрация</div>
          <div className="inter">
            <img src="/icons/user.svg" alt="user" />
            <img src="/icons/heart.svg" alt="heart" />
          </div>
        </div>
        <div className="bar">
          <NavLink to={isFirstClick ? "/select" : "/"} onClick={() => setIsFirstClick(!isFirstClick)}>
            <img src="/icons/bar.svg" alt="menu" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
