import "./card_item.scss";
export default function CardItem({ path, title }) {
  return (
    <div className="container_card" style={{ backgroundImage: `url(${path})` }}>
      <h3>{title}</h3>
    </div>
  );
}
