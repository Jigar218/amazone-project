import React from "react";
import "./skinproduct.css";
import { FaStar, FaRegStar } from "react-icons/fa";

const CustomerReviews = () => {
  const images = [
    "https://m.media-amazon.com/images/I/61H8Uod1uvL._AC_UC154,154_CACC,154,154_QL85_.jpg?aicid=community-reviews",
    "https://m.media-amazon.com/images/I/615Fhh5pmqL._AC_UC154,154_CACC,154,154_QL85_.jpg?aicid=community-reviews",
    "https://m.media-amazon.com/images/I/61DAkpGa+FL._AC_UC154,154_CACC,154,154_QL85_.jpg?aicid=community-reviews",
  ];

  return (
    <div className="review-wrapper px-3 border-top pt-3">
      {/* LEFT SIDE */}
      <div className="left-review-box">
        <h3 className="heading-review">Customer reviews</h3>

        <div className="rating-score ">
          <span className="stars">★★★☆☆</span>
          <span className="rating-text">3 out of 5</span>
        </div>

        <p className="global-count">17 global ratings</p>

        {/* Progress bars */}
        <div className="rating-rows">
          {[5, 4, 3, 2, 1].map((star, i) => (
            <div className="rating-row" key={i}>
              <span>{star} star</span>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width:
                      star === 5
                        ? "40%"
                        : star === 4
                        ? "8%"
                        : star === 3
                        ? "8%"
                        : star === 1
                        ? "44%"
                        : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <p className="ratings-calc text-primary">How are ratings calculated?</p>

        <div className="write-review-box border-bottom   pb-4">
          <h6 className="fs-5 fw-bold">Review this product</h6>
          <span>Share your thoughts with other customers</span>
          <button className="review-btn ">Write a product review</button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right-review-box">
        <div className="image-header">
          <h3 className="head-img">Reviews with images</h3>
          <span className="see-all">See all photos ›</span>
        </div>

        <div className="review-images border-bottom pb-3">
          {images.map((img, index) => (
            <img src={img} key={index} alt="review" className="rev-img" />
          ))}
        </div>

        <h3 className="top-review-title mt-4 ">Top reviews from India</h3>

        {/* Review Card */}
        <div className="review-card mt-4">
          <div className="rev-user">
            <div className="rev-avatar">M</div>
            <span className="rev-name">Madhu M.</span>
          </div>

          <div className="rev-stars m-0">
            ★☆☆☆☆
            <span className="rev-title ms-2">I was cheated</span>
          </div>
          <p className="rev-date m-0 ">Reviewed in India on 28 November 2025</p>
          <span className="verified">Verified Purchase</span>

          <p className="rev-desc m-0 p-0">
            This was a sample item and amazon charged me rs 115 for this... How
            can they cheat me
          </p>

          <p className="help-count m-0">2 people found this helpful</p>

          <div className="help-actions">
            <button className="help-btn">Helpful</button>
            <button className="report-btn">Report</button>
          </div>
        </div>

        {/* 2nd Review */}
        <div className="review-card mt-4">
          <div className="rev-user">
            <div className="rev-avatar">R</div>
            <span className="rev-name">Ravindra</span>
          </div>

          <div className="rev-stars m-0">
            ★★★★★
            <span className="rev-title ms-2">Good</span>
          </div>
          <p className="rev-date m-0 ">Reviewed in India on 30 November 2025</p>
          <span className="verified">Verified Purchase</span>

          <p className="rev-desc m-0 p-0">Good</p>

          <p className="help-count m-0">2 people found this helpful</p>

          <div className="help-actions">
            <button className="help-btn">Helpful</button>
            <button className="report-btn">Report</button>
          </div>
        </div>
        {/* 2nd Review */}
        <div className="review-card mt-4 border-bottom">
          <div className="rev-user">
            <div className="rev-avatar">H</div>
            <span className="rev-name">Hemi.m</span>
          </div>

          <div className="rev-stars m-0">
            ★☆☆☆☆
            <span className="rev-title ms-2">This is sample piece</span>
          </div>
          <p className="rev-date m-0 ">Reviewed in India on 30 November 2025</p>
          <span className="verified">Verified Purchase</span>

          <p className="rev-desc m-0 p-0">
            Product is very good but it's a free sample piece and they have
            chargeed 169.
          </p>

          <p className="help-count m-0">3 people found this helpful</p>

          <div className="help-actions">
            <button className="help-btn">Helpful</button>
            <button className="report-btn">Report</button>
          </div>
        </div>
        <p className="see text-primary">See more reviews</p>
      </div>
    </div>
  );
};

export default CustomerReviews;
