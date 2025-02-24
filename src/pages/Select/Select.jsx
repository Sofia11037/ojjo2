import { NavLink } from "react-router-dom";
import "./select.scss"

export default function Select() {


  return (
    <div  id="select-id" className="select">
        <div className="nav-phone-top">
            <div className="link"><NavLink>Контрагентам</NavLink></div>
            <div className="link"><NavLink>Дизайнерам</NavLink></div>
            <div className="link"><NavLink>Вакансии</NavLink></div>
            <div className="link"><NavLink>Вход/Регистрация</NavLink></div>
        </div>
        <div className="line"></div>
        <div className="nav-phone-bottom">
            <div className="inter">
          <img src="/icons/user.svg" alt="user" />
          <img src="/icons/heart.svg" alt="user" />
        </div>
        <div className="line"></div>
        <div className="social-media">
            <img src="/icons/youtubeBar.svg" alt="" />
            <img src="/icons/vkBar.svg" alt="" />
            <img src="/icons/facebookBar.svg" alt="" />
            <img src="/icons/telegramBar.svg" alt="" />
            <img src="/icons/etsyBar.svg" alt="" />
        </div>
        </div>
    </div>
  );
}
