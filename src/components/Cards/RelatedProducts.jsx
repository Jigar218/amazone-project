import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";
import "./realtedProduct.css";

const RelatedProducts = ({ title, products, imageSize }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  return (
    <div className="related-container">
      <div className="related-header">
        <h3>{title}</h3>
        <span className="see-more">See more</span>
      </div>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div ref={scrollRef} className="images-wrapper gap-2">
          {products.map((item, index) => (
            <div
              className="image-card"
              key={index}
              style={{
                width: imageSize?.width || "160px", // 👈 Added here
                flex: "0 0 auto",
              }}
            >
              <img
                src={item.img}
                alt="product"
                style={{
                  width: "100%",
                  height: imageSize?.height || "200px",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default RelatedProducts;
