import "./contacts.scss";
import { NavLink } from "react-router-dom";

export default function Contacts() {
    return (
      <div className="container contacts">
        <div className="path">
            <p><NavLink to="/">Главная</NavLink></p>
            <p><NavLink className="last">Контакты</NavLink></p>
        </div>
        <h3 className="title3">КОНТАКТЫ</h3>
        <div className="box">
            <div className="office">
                <h5 className="title5">Главный офис</h5>
                <div className="name">
                    <div  className="img"><img src="../../../public/icons/office.svg" alt="" /></div>
                    <div>
                        <p>Невский 140, офис 1-5</p>
                        <p>Невский 140, офис 1-5</p>
                    </div>
                </div>
            </div>

            <div className="numbers">
                <h5 className="title5">Телефоны</h5>
                <div className="name">
                    <div  className="img"><img src="../../../public/icons/number.svg" alt="" /></div>
                    <div>
                        <p>8 (812) 458-56-45</p>
                        <p>8 (812) 458-56-45</p>
                    </div>
                </div>
            </div>

            <div className="e-mail">
                <h5 className="title5">E-mail</h5>
                <div className="name">
                    <div  className="img"><img src="../../../public/icons/email.svg" alt="" /></div>
                    <div>
                        <p>office@ojjo.com</p>
                        <p>office@ojjo.com</p>
                    </div>
                </div>
            </div>

            <div className="address">
                <h5 className="title5">Доп. адреса</h5>
                <div className="name">
                    <div className="img"><img src="../../../public/icons/office.svg" alt="" /></div>
                    <div>
                        <p>Невский 142, офис 1-5</p>
                        <p>Загородный 145, офис 11-15</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="line"></div>
        <div className="map"><img src="../../../public/gallery/maps.png" alt="" /></div>
        
      </div>
    );
  }