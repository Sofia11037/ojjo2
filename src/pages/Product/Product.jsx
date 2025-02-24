import "./product.scss";
import CardOfProduct from "./CardOfProduct/CardOfProduct";
import { NavLink } from "react-router-dom";
import About from "../../components/Layout/About/About";
import Cards from "../MainFilter/Cards/Cards";
import catalog from "../MainFilter/dataCatalog.json";
import { useParams } from "react-router-dom";





export default function Product() {
  const params = useParams();
  const product = catalog.find((item) => +item.id === +params.id);
    return (
      <div className="container">
        <div className="path">
            <p><NavLink to="/">Главная</NavLink></p>
            <p><NavLink to="/catalog">Каталог</NavLink></p>
            <p><NavLink>Категория</NavLink></p>
            <p><NavLink className="last">Подвеска Dolce & Gabarra</NavLink></p>
        </div>
        <CardOfProduct key={product.id} data={product} />

        <About />
        <div className="more-box">
        <h5 className="subtitle">Мы подготовили для вас кое-что еще</h5>
        <h3 className="title">Товары, которые могут Вам понравиться</h3>
        </div>
        <div className="cards_filter">
          {catalog.slice(0, 3).map(item => (
            <Cards key={item.id} data={item} />
          ))}
        </div>


      </div>
    );
  }