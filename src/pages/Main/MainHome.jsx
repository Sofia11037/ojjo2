import TabsShopCards from "./TabsShopCards/TabsShopCards";
import Salons from "./Salons/Salons";
import Articles from "./Articles/Articles";
import SocialNetworks from "./SocialNetworks/SocialNetworks";
import HeaderHome from "./HeaderHome/HeaderHome"
import "./main_home.scss";

export default function Main() {
  return (
    <div className="main">
      <HeaderHome />
      <TabsShopCards />
      <Salons />
      <Articles />
      <SocialNetworks />
    </div>
  );
}
