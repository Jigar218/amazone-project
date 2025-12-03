import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import "../../Cards/productcardList.css";
import "./products.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const RecommendedProduct = ({ products }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  //  AUTO-FIT cards based on available width
  useEffect(() => {
    function measureCards() {
      if (!containerRef.current || !cardRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = cardRef.current.offsetWidth;

      const fitCount = Math.floor(containerWidth / cardWidth);

      setItemsPerPage(fitCount < 1 ? 1 : fitCount);
    }

    measureCards();
    window.addEventListener("resize", measureCards);

    return () => window.removeEventListener("resize", measureCards);
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
    <div className="detail-scroll-container p-0 px-2 m-0  mt-3">
      <div className="detail-scroll-header">
        <strong className="fs-5">
          Recommended based on your browsing history
        </strong>
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
              className="scroll-card"
              ref={index === 0 ? cardRef : null} // measure only first card
            >
              <img src={item.img} alt={item.title} />

              <p className="product-titles p-0 m-0 ">{item.title}</p>

              <div className="d-flex align-item-center ratings-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <span className="reviews ms-1">{item.reviews}</span>
              </div>

              <p className="products-price mt-1">{item.price}</p>

              <p className="d-flex">
                <IoMdCheckmark className="right-mark" />
                <span className="prime-sub">prime</span>
              </p>
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
    </div>
  );
};

export default RecommendedProduct;
