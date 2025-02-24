import "./contact.scss";
import { NavLink } from "react-router-dom";

export default function Contact() {
    return (
        <NavLink to="/contacts"><div className="contacts">
            <h4 className="title">КОНТАКТЫ</h4>
            <div className="contact">
                <ul className="list">
                    <li>8 (812) 234-56-55</li>
                    <li>8 (812) 234-56-55</li>
                    <li>ojjo@ojjo.ru</li>
                </ul>
            </div>
        </div></NavLink>
    );
}