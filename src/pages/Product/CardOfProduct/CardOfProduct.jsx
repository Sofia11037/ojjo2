import "./cardOfProduct.scss";
import Button from "../../../components/Layout/Button/Button";


export default function CardOfProduct({ data }) {
    return (
      <div className="container cardOfProduct">
        <div className="images">
            <div className="main-img">
            <img src={data.img} alt="" />
            </div>
            <div className="secondary-cards">
            <img src={data.img} alt="" />
            <img src={data.img} alt="" />
            <img src={data.img} alt="" />
            </div>
        </div>

        <div className="aboutProduct-box">
            <div className="aboutProduct">
                <h3 className="title">{data.collection} {data.brand}</h3>
                <div className="text">
                    <h5>Категория:  {data.collection}</h5>
                    <h5>Бренд:  {data.brand}</h5>
                </div>

                <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa. Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus. Et nulla sit convallis orci est, fames sit luctus lacus.</p>
                <p className="price">{data.price}</p>
                <div className="buy">
                    <Button>КУПИТЬ</Button>
                    <Button className="toСart">ДОБАВИТЬ В КОРЗИНУ</Button>
                </div>
            </div>
        </div>
      </div>
    );
  }