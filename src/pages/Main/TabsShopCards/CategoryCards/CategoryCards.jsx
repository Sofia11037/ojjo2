import "./category_cards.scss";
import CardItem from "../CardItem/CardItem";

export default function CategoryCards({dataContent}) {
  console.log(dataContent);
  return (
    <div className="container_cards">
      {dataContent.map((item) => (
        <CardItem {...item} key={item.id} />
      ))}
    </div>
  );
}