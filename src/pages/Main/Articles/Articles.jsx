import "./articles.scss";
import Cards from "./Cards/CardsArc";
import Button from "../../../components/Layout/Button/Button"


export default function Articles() {
    return (
      <div className="articles">
        <p className="txt">Полезные статьи</p>
        <h3 className="title">Лучшие советы по подбору дорогих подарков</h3>
        <Cards />
        <Button>ЧИТАТЬ НАШ БЛОГ</Button>
      </div>
    );
  }