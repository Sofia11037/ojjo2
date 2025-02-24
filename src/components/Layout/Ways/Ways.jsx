import "./ways.scss";


export default function Ways() {
  return (
    <div className="ways">
        <div className="way-one">
            <div className="us">
                <img src="../../../../public/icons/about/delivery.svg" alt="" />
                <p>Бесплатная доставка</p>
            </div>
            <div className="us">
            <img src="../../../../public/icons/about/list.svg" alt="" />
            <p>Индивидуальный дизайн</p>
            </div>
        </div>

        <div className="way-two">
            <div className="us">
            <img src="../../../../public/icons/about/ribbon-design.svg" alt="" />
            <p>Бесплатная примерка</p>
            </div>
            <div className="us">
            <img src="../../../../public/icons/about/jewelry.svg" alt="" />
            <p>Личный подход</p>
            </div>
        </div>
    </div>
  );
}


