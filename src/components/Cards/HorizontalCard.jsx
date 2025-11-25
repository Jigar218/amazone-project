import { IoMdCheckmark } from "react-icons/io";

const HorizontalCard = () => {
  return (
    <div
      className="container mx-auto border bg-white mb-3 p-4"
      style={{ maxWidth: "950px" }}
    >
      <div className="d-flex justify-content-center align-items-center gap-5 ">
        <div>
          <img
            src="https://m.media-amazon.com/images/I/61udKykvnxL._AC_PT0_BL0_SX485_SY500_FMwebp_QL95_.jpg"
            alt=""
            style={{ width: "250px" }}
          />
        </div>
        <div>
          <h6>BALDORA Hard Polycarbonate Luggage Trolley Bag...</h6>
          <p>
            <span className="save">Save 5%</span> with coupon
          </p>
          <p className="price-tag">
            <sup>₹</sup>9,999<sup>00</sup>{" "}
            <span className="real-price">₹36,999.00 </span>
            <span className="text-primary prime">
              <IoMdCheckmark className="mark d-inline" />
              prime
            </span>
          </p>
          <button className="rounded-5  btn-style">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
