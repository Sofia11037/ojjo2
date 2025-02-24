import "./tab_item.scss";

export default function TabItem({ name, editActiveTab, index }) {
  
function activeElement(string1, string2) {
  return string1 === string2;
}
  return (
    <div onClick={() => editActiveTab(index)} className="tab_item">
      <div className="tab">
        <span>{name}</span>
      </div>
    </div>
  );
}
