import { useRef, useState, useEffect } from "react";
import "./skinproduct.css";
import {
  FaStar,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaAmazon } from "react-icons/fa";

import { BiSolidOffer } from "react-icons/bi";

import { LuMessageSquareText } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";
import ProductInfo from "./ProductInfo";

const SkinProduct = ({ product }) => {
  // ------- Offer Scroll States -------
  const offerRef = useRef(null);

  // ---------------zoom
  const [zoomVisible, setZoomVisible] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});
  const imgRef = useRef(null);

  // ------- Service Scroll States -------
  const serviceRef = useRef(null);
  const [canScrollServiceLeft, setCanScrollServiceLeft] = useState(false);
  const [canScrollServiceRight, setCanScrollServiceRight] = useState(false);

  const SCROLL_AMOUNT = 260;
  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${"	https://m.media-amazon.com/images/I/61JZPwrTciL._SX679_.jpg"})`,
      backgroundPosition: `${bgX}% ${bgY}%`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "200%",
    });
  };

  // ---- Generic Scroll Function ----
  const scroll = (ref, amount) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  // ---- Update Scroll Buttons Visibility ----
  const updateScrollStates = () => {
    if (serviceRef.current) {
      setCanScrollServiceLeft(serviceRef.current.scrollLeft > 0);
      setCanScrollServiceRight(
        serviceRef.current.scrollLeft <
          serviceRef.current.scrollWidth - serviceRef.current.clientWidth - 1
      );
    }
  };

  useEffect(() => {
    requestAnimationFrame(updateScrollStates);

    const updateOnResize = () => requestAnimationFrame(updateScrollStates);

    const offerElement = offerRef.current;
    const serviceElement = serviceRef.current;

    if (offerElement)
      offerElement.addEventListener("scroll", updateScrollStates);
    if (serviceElement)
      serviceElement.addEventListener("scroll", updateScrollStates);

    window.addEventListener("resize", updateOnResize);

    return () => {
      if (offerElement)
        offerElement.removeEventListener("scroll", updateScrollStates);
      if (serviceElement)
        serviceElement.removeEventListener("scroll", updateScrollStates);
      window.removeEventListener("resize", updateOnResize);
    };
  }, []);

  const offers = [
    {
      title: "Cashback",
      desc: "Upto ₹2.00 cashback as Amazon Pay Bal…",
      link: "1 offer >",
    },
    {
      title: "Partner Offers",
      desc: "Get GST invoice and save up to 18% on…",
      link: "3 offers >",
    },
  ];

  const services = [
    {
      icon: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png",
      text: "60 Month Warranty",
    },
    {
      icon: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB562506492_.png",
      text: "10 days Returnable",
    },
    {
      icon: "	https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB562506657_.png",
      text: "Pay on Delivery",
    },
    {
      icon: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB562550117_.png",
      text: "Amazon Delivered",
    },
    {
      icon: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB562549966_.png",
      text: "Free Delivery",
    },
    {
      icon: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB562506657_.png",
      text: "Top Brand",
    },
    {
      icon: "https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png",
      text: "Secure transaction",
    },
  ];

  return (
    <div className="container-fluid p-0">
      <p style={{ fontSize: "12px", color: "gray" }} className="px-3">
        Beauty › Make-up › Make-up Remover › Makeup Cleansing Foams
      </p>
      <div className="row">
        {/* LEFT - Images */}
        <div className="col-lg-6 col-md-4 col-12">
          <div className="image-gallery">
            <div className="thumbs">
              {product.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="thumb-img border rounded-2"
                  alt="thumb"
                />
              ))}
            </div>
            <div className="main-img-container">
              <img
                src="	https://m.media-amazon.com/images/I/61JZPwrTciL._SX679_.jpg"
                className="main-img"
                alt="product"
                ref={imgRef}
                onMouseEnter={() => setZoomVisible(true)}
                onMouseLeave={() => setZoomVisible(false)}
                onMouseMove={handleMouseMove}
              />
              {zoomVisible && (
                <div className="zoom-window" style={zoomStyle}></div>
              )}
            </div>
          </div>
        </div>

        {/* MIDDLE - Product Info */}
        <div className="col-lg-4 col-md-8 col-12 ">
          <h2 className="product-heading">{product.title}</h2>
          <p className="product-link d-flex p-0">{product.link}</p>

          {/* Ratings */}
          <div className="d-flex align-items-center rating-sections  pb-2">
            <span className="text-black fw-normal rate-no me-1">
              {product.rating}
            </span>
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <FaRegStar />
            <span className="rate-no text-primary ms-3">{product.reviews}</span>
          </div>
          <div className="border-bottom p-0 m-0">
            <p className="p-0 m-0 pb-1" style={{ fontSize: "12px" }}>
              {product.purchase}
            </p>
          </div>
          {/* Pricing */}

          <div className="pricing">
            <span className="discount">-30%</span>
            <span className="pricing">
              {product.price}
              <sup style={{ fontSize: "16px" }}>00</sup>
            </span>
          </div>
          <p className="mrp-text pt-1">
            M.R.P.: <span className="line-through">{product.mrp}</span>
          </p>
          <p className="mb-2 p-0 logo-label d-inline-flex align-items-center gap-1 text-white px-1 ">
            <FaAmazon />
            Fulfilled
          </p>
          <p className="taxes">Inclusive of all taxes</p>

          {/* Offer Title */}
          <p className="d-flex align-items-center fw-semibold mt-2">
            <BiSolidOffer className="me-3 fs-4" /> Offers
          </p>

          {/* -------- Offer Scroll Section -------- */}
          <div className="offers-section">
            <div className="offers-scroll" ref={offerRef}>
              {offers.map((o, i) => (
                <div key={i} className="offer-card">
                  <h6 className="offer-title">{o.title}</h6>
                  <p className="offer-desc">{o.desc}</p>
                  <p className="offer-link">{o.link}</p>
                </div>
              ))}
            </div>
          </div>

          {/* -------- Service Scroll Section -------- */}
          <div className="service-section mt-3">
            {canScrollServiceLeft && (
              <button
                className="scroll-btn left"
                onClick={() => scroll(serviceRef, -SCROLL_AMOUNT)}
              >
                <FaChevronLeft />
              </button>
            )}

            <div className="service-scroll" ref={serviceRef}>
              {services.map((s, i) => (
                <div key={i} className="service-item">
                  <div className="service-icon  d-flex justify-content-center">
                    <img src={s.icon} alt="" style={{ width: "35px" }} />
                  </div>
                  <p className="icon-text">{s.text}</p>
                </div>
              ))}
            </div>

            {canScrollServiceRight && (
              <button
                className="scroll-btn right"
                onClick={() => scroll(serviceRef, SCROLL_AMOUNT)}
              >
                <FaChevronRight />
              </button>
            )}
          </div>

          <div className=""></div>
          <ProductInfo />
          <p
            className="d-flex align-items-center text-primary border-bottom"
            style={{ fontSize: "13px" }}
          >
            {" "}
            <span className=" me-2 fs-5 text-dark">
              <LuMessageSquareText />
            </span>
            Report an issue with this product
          </p>
        </div>

        {/* RIGHT - Buy Section */}
        <div className="col-lg-2 col-md-12 col-12">
          <div className="buy-card">
            <p className="price-final m-0 p-0">
              ₹99<sup style={{ fontSize: "12px" }}>00</sup>
              <span className="ms-1 fw-normal" style={{ fontSize: "13px" }}>
                (₹344.10 /100 ml)
              </span>
            </p>
            <p className="shipping p-0 ">
              FREE delivery <strong>Saturday, 6 December.</strong> on orders
              dispatched by Amazon over ₹499.
              <span className="text-primary  text-decoration-underline">
                Details
              </span>
            </p>
            <p className="shipping p-0 ">
              Or fastest delivery <strong>Saturday, 7 December.</strong> Order
              within
              <span className="text-success"> 20 hrs 13 mins.</span>{" "}
              <span className="text-primary  text-decoration-underline">
                Details
              </span>
            </p>

            <p className="p-0 d-flex align-items-center address text-primary">
              <span className="loc-icon text-dark me-2">
                <IoLocationOutline />
              </span>
              Delivering to Mumbai 400022 - Update location
            </p>
            <div>
              <p className="text-success m-0 ">In Stock</p>

              <p className="p-0 m-0 in-stock">
                Ships from
                <span className="ms-2 text-dark">Amazon</span>
              </p>
              <p className="p-0 m-0 in-stock">
                Sold by
                <span
                  className="ms-2 text-primary"
                  style={{ fontSize: "12px" }}
                >
                  RK World Infocom <span className="ms-5">Pvt Ltd</span>
                </span>
              </p>
              <p className="p-0 m-0 in-stock">
                Payment
                <span className="ms-2 text-primary">Secure transaction</span>
              </p>
            </div>
            <div className="filter-section">
              <select className="qty-select mt-4">
                <option>Quantity: 1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button className=" add-cart-btn w-100 mt-2 rounded-5 py-1">
                Add to Cart
              </button>
              <button className=" buy-now-btn w-100 mt-2 rounded-5 py-1 ">
                Buy Now
              </button>
              <div className="border-bottom pb-1">
                <input type="checkbox" />{" "}
                <button className="gift-btn mt-2">Add Gift Option</button>
              </div>
            </div>
            <p className="wish-list rounded-2 px-2 py-1 mt-2">
              {" "}
              Add to Wish List
            </p>
          </div>
        </div>
      </div>

      <div className="p-3">
        <p>
          <span className="top-brand me-1">Top Brand </span>
          <strong>Swiss Military</strong>
        </p>
        <ul className="ul-list m-0 p-0">
          <li className="d-flex align-items-center summary mb-2  ">
            <span className="text-success me-2">
              <SiTicktick />
            </span>{" "}
            87% positive ratings from 10K+ customers
          </li>
          <li className="d-flex align-items-center mb-2 summary">
            {" "}
            <span className="text-success me-2">
              <SiTicktick />
            </span>{" "}
            10K+ recent orders from this brand
          </li>
          <li className="d-flex align-items-center summary">
            {" "}
            <span className="text-success me-2">
              <SiTicktick />
            </span>{" "}
            11+ years on Amazon
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SkinProduct;
