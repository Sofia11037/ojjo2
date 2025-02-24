import "./headerHome.scss";
import { NavLink } from "react-router-dom";
import HeaderFooter from "./HeaderFooter/HeaderFooter";
import Button from "../../../components/Layout/Button/Button";

export default function HeaderHome() {
  return (
    <div className="container_haeder">
      <div className="title">
        <h1>Долго, дорого, богато!</h1>
        <NavLink to="/catalog"><Button>Каталог изделий</Button></NavLink>
      </div>
      <div className="header_footer">
        <HeaderFooter />
      </div>
    </div>
  );
}
