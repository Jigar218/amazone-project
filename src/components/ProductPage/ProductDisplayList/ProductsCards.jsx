import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./paginationCards.css";

const ProductsCards = ({ products }) => {
  const cardsPerPage = 33;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = products.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container-fluid px-0">
      {/* Cards */}
      <div className="row gy-2">
        <p className="fs-5 fw-semibold mb-0">Results</p>
        <p className="fs-6 mt-0  ">
          Check each product page for other buying options.
        </p>
        {currentCards.map((item, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-3 p-0">
            <div className="amazon-card">
              <div className="img-bg">
                <img className="product-img" src={item.img} alt={item.title} />
              </div>

              <div className="color-options">
                {item?.colors?.map((color, idx) => (
                  <span
                    key={idx}
                    className="color-dot"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
                {item.moreColors && (
                  <span className="more-colors">+{item.moreColors}</span>
                )}
              </div>

              <h3 className="product-title">{item.title}</h3>

              <div className="rating">
                <span className="text-black">{item.rating} </span> <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <span className="reviews">({item.reviews})</span>
              </div>

              <p className="item-text mt-1">{item.text}</p>

              <div className="price mb-3">
                <span className="item-price">₹{item.price}</span>
                <span className="mrp">M.R.P.: ₹{item.mrp}</span>
                <span className="offer">({item.offer}% off)</span>
              </div>

              <p className="delivery">
                FREE delivery <strong>{item.deliveryText}</strong>
              </p>
              <p className="delivery">
                or fastest delivery <strong>{item.fastdelivery}</strong>
              </p>
              <p className="service">{item.service}</p>

              <button className="cart-btn rounded-5">Add to cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-container">
        <button
          className="pag-btn"
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ‹ Previous
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`pag-btn ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => handlePageClick(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="pag-btn"
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next ›
        </button>
      </div>
    </div>
  );
};

export default ProductsCards;
