import { useState } from "react";
import "./product.css";

function ProductCard({ productData }) {
  return (
    <div className="row g-3 justify-content-center">
      {productData.map((product, index) => (
        <SingleProduct key={index} product={product} />
      ))}
    </div>
  );
}

function SingleProduct({ product }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="col-12 col-sm-6  col-md-6 col-lg-3 d-flex">
      <div className="product-card w-100 ">
        <h5 className="product-title">{product.title}</h5>

        {/* Main Image */}
        <img
          src={product.variants[activeIndex].img}
          alt={product.title}
          className="product-main-img"
        />

        {/* Product Info */}
        <p className="product-desc">
          {product.variants[activeIndex].description}
        </p>
        <p>
          <span className="dicountprice">
            {" "}
            {product.variants[activeIndex].price}
          </span>
          <sup>00</sup>
          <span className="ms-2 mrp">M.R.P: </span>
          <span className="line-through mrp-price">
            {product.variants[activeIndex].mrp}
          </span>
        </p>

        {/* Thumbnail List */}
        <div className="d-flex gap-2 mt-3 small-images ">
          {product.variants.map((variant, index) => (
            <img
              key={index}
              src={variant.img}
              className={`thumbnail-img ${
                activeIndex === index ? "active" : ""
              } `}
              onClick={() => setActiveIndex(index)}
              alt={`thumb-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
