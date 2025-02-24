import "./newsletter.scss"
import Button from "../../Layout/Button/Button"

export default function Newsletter() {
    return (
        <div className="newsletter">
            <p className="txt">Полезные советы и персональный предложения</p>
            <h3 className="title">Эксклюзивная рассылка</h3>

            <div className="services">
                <div className="offers">
                    <ul className="list">
                        <li>Личный менеджер</li>
                        <li>Доставка и оформление</li>
                        <li>Индивидуальный дизайн</li>
                    </ul>
                </div>

                <div className="email">
                    <div className="input">
                        <input type="text" placeholder="ВАШ E-MAIL" />
                        <Button>ОТПРАВИТЬ</Button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}