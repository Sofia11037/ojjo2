import "./links.scss";
import Link from "../../Layout/Link/Link"

export default function Links() {
    return (
        <div className="links">
            <h4 className="title">ПОЛЕЗНЫЕ ССЫЛКИ</h4>
            <ul className="list">
                <li><Link>Доставка</Link></li>
                <li><Link>Оплата </Link></li>
                <li><Link>Акции</Link></li>
                <li><Link>Политика конфиденциальности</Link></li>
            </ul>
        </div>

    );
}