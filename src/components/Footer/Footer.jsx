import "./footer.scss";
import Links from "./Links/Links";
import Payment from "./Payment/Payment";
import Contact from "./Contact/Contact";
import SocialMedia from "./SocialMedia/SocialMedia";
import Newsletter from "./Newsletter/Newsletter";



export default function Footer() {
  return (
    <>
    <Newsletter />
    <div className="footer">
      <div className="footer-top">
        <Links />
        <Payment />
        <Contact />
        <SocialMedia />
      </div>
      <div className="footer-bottom">
        <p className="txt">(c) 2020 OJJO jewelry</p>
        <p className="txt">Договор публичной офферты</p>
        <p className="txt">Контрагентам</p>
        <p className="txt">Сделано Figma.info</p>
      </div>
    </div>
    </>
  );
}
