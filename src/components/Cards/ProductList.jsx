import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import "./productcardList.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductDetailScroll = ({ products }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const navigate = useNavigate();
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  // 🌟 AUTO CALCULATE HOW MANY CARDS FIT
  useEffect(() => {
    function measure() {
      if (!containerRef.current || !cardRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = cardRef.current.offsetWidth;

      const fitCount = Math.floor(containerWidth / cardWidth);

      setItemsPerPage(fitCount < 1 ? 1 : fitCount);
    }

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="detail-scroll-container p-3 m-0">
      <hr />

      <div className="detail-scroll-header">
        <div>
          <strong>Related to items you've viewed</strong>{" "}
          <span className="see-more">See more</span>
        </div>

        <span className="page-number">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      <div className="scroll-wrapper" ref={containerRef}>
        <button
          className="arrow-btn left"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </button>

        <div className="scroll-items mx-4 px-2">
          {currentProducts.map((item, index) => (
            <div
              key={index}
              className="scroll-card cursor-pointer"
              ref={index === 0 ? cardRef : null}
              onClick={() => navigate(item.link)}
            >
              <img src={item.img} alt={item.title} />

              <p className="product-title">{item.title}</p>

              <div className="d-flex align-items-center rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <span className="reviews">{item.reviews}</span>
              </div>

              <p className="deal mt-1">
                <span className="limited-deal">{item.offer}</span> Limited time
                deal
              </p>

              <p className="products-price">{item.price}</p>

              <p className="items-price">
                M.R.P: <span className="mrp">{item.mrp}</span>
              </p>

              <p className="delivery fw-normal">
                Get it by <span className="fw-semibold">{item.delivery}</span>
              </p>

              <p className="delivery fw-normal">FREE Delivery by Amazon</p>
            </div>
          ))}
        </div>

        <button
          className="arrow-btn right"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <FaChevronRight />
        </button>
      </div>

      <hr className="w-100" />
    </div>
  );
};

export default ProductDetailScroll;
