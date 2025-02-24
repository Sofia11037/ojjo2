import { useState } from "react";
import CategoryCards from "./CategoryCards/CategoryCards";
import Tabs from "./Tabs/Tabs";
import "./tabs_shop_caeds.scss";
import dataContent from "./Tabs/contentCategory.json";



export default function TabsShopCards() {
  const [activeTab, setActiveTab] = useState(0);
  function editActiveTab(id) {
    setActiveTab(id);
  }



  return (
    <div className="tabsShop_container">
      <div className="content">
        <div className="title">
          <p> К мероприятиям</p>
          <h2>Настоящая красота здесь!</h2>
        </div>
        <div className="container_tabs">
          <Tabs editActiveTab = {editActiveTab}/>
        </div>
        <div className="boxCards">
        <div className="container_cards">
          <CategoryCards dataContent={dataContent[activeTab]}/>
        </div>
        </div>
        
      </div>
    </div>
  );
}
