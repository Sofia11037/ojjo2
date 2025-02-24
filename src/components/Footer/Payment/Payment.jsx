import "./payment.scss";

export default function Payment() {
    return (
        <div className="payment">
            <h4 className="title">ОПЛАТА</h4>
            <p className="txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
            <div className="images">
                <div className="img">
                    <img src="../image/forPayment/visa.png" alt="" />
                </div>
                <div className="img">
                    <img src="../image/forPayment/mastercard.png" alt="" />
                </div>
            </div>
        </div>

    );
}