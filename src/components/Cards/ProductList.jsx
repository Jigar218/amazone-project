import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import "./productcardList.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
const ProductDetailScroll = ({ products }) => {
  const itemsPerPage = 6; // Show 6 cards per page
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  // Slicing products based on current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="detail-scroll-container p-3">
      {/* Top Header */}
      <div className="detail-scroll-header">
        <div>
          <strong>Related to items you've viewed</strong>{" "}
          <span className="see-more">See more</span>
        </div>
        <span className="page-number">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      {/* Scroll Area */}
      <div className="scroll-wrapper">
        <button
          className="arrow-btn left"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </button>

        <div className="scroll-items mx-4 px-2">
          {currentProducts.map((item, index) => (
            <div key={index} className="scroll-card">
              <img src={item.img} alt={item.title} />
              <p className="product-title">{item.title}</p>
              <div className="d-flex align-item-center rating">
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaStar />
                </span>
                <span>
                  <FaRegStar />
                </span>
                <span className="reviews"> {item.reviews}</span>
              </div>
              <p className="deal mt-1">
                <span className="limited-deal">{item.offer}</span> Limited time
                deal
              </p>
              <p className="products-price">{item.price}</p>
              <p className="items-price">
                M.R.P:
                <span className="mrp ">{item.mrp}</span>
              </p>
              <p className="delivery">
                Get it by <span className="fw-semibold">{item.delivery}</span>
              </p>
              <p className="delivery">FREE Delivery by Amazon</p>
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

export default ProductDetailScroll;
