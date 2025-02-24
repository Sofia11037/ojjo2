import "./tabs.scss";
import tabs from "./tabs.json";
import TabItem from "../TabItem/TabItem";

export default function Tabs({editActiveTab}) {

  return (
    <div className="tabs_container">
      <div className="header">
        {tabs.map((item, index) => (
          <TabItem {...item} key={item.id} editActiveTab = {editActiveTab} index = {index} />
        ))}
      </div>
    </div>
  );
}
