import React from "react";
import { FaStar } from "react-icons/fa";
import "./similarbrands.css";

const CustomerReviews = ({ ratingsData }) => {
  // Calculate total reviews
  const totalRatings = ratingsData.reduce((acc, cur) => acc + cur.count, 0);

  return (
    <div className="reviews-container">
      <div className="left-section">
        {/* Header */}
        <h3 className="reviews-title ">Customer reviews</h3>
        <div className="rating-display">
          <span className="star-icon d-flex align-items-center">
            <FaStar className="m-0" />
            <FaStar className="m-0" />
            <FaStar className="m-0" />
            <FaStar className="m-0" />
            <FaStar className="m-0 me-2" />
          </span>
          <span className="rating-score">5 out of 5</span>
        </div>
        <p className="global-rating mt-2">{totalRatings} global rating</p>

        {/* Rating bars */}
        {ratingsData.map((rating) => (
          <div className="rating-row" key={rating.stars}>
            <span className="rating-label">{rating.stars} star</span>
            <div className="rating-bar">
              <div
                className="rating-fill"
                style={{
                  width: `${
                    rating.count > 0 ? (rating.count / totalRatings) * 100 : 0
                  }%`,
                }}
              ></div>
            </div>
            <span className="rating-percent">
              {totalRatings > 0
                ? Math.round((rating.count / totalRatings) * 100)
                : 0}
              %
            </span>
          </div>
        ))}

        {/* Dropdown text */}
        <p className="rating-calculation">How are ratings calculated?</p>

        <hr />

        {/* Review button */}
        <h4 className="review-heading ">Review this product</h4>
        <p className="review-text ">Share your thoughts with other customers</p>
        <button className="review-btn mb-3">Write a product review</button>
        <hr />
      </div>
      {/* Right side content */}
      <div className="right-section  ">
        <h4 className="no-review">No customer reviews</h4>
        <div className="no-review-box">
          There are 0 customer reviews and {totalRatings} customer rating.
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
