import React, { useState } from "react";
import "./skinproduct.css";

const ProductInfo = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="info-container">
      <p className="use-date p-0 m-0 mb-1">
        Use by: <span>01 NOV 2027</span>
      </p>

      {/* TABLE */}
      <div className="details-table border-bottom pb-2">
        <div className="row-item">
          <span className="left fw-semibold">Brand: </span>
          <span className="right "> Cetaphil</span>
        </div>

        <div className="row-item">
          <span className="left  fw-semibold">Item Weight: </span>
          <span className="right"> 29 Grams</span>
        </div>

        <div className="row-item">
          <span className="left  fw-semibold">
            Item :
            <span className="right ms-3 fw-normal">
              40 × 24 × 67 Millimeters
            </span>{" "}
            <br />
            dimensions
          </span>
        </div>

        <div className="row-item">
          <span className="left  fw-semibold">Scent: </span>
          <span className="right">Unscented</span>
        </div>

        <div className="row-item">
          <span className="left  fw-semibold">
            Age Range: <span className="right fw-normal ms-1">Adult</span>{" "}
            <br />
            (Description)
          </span>
        </div>

        {/* EXPANDED CONTENT */}
        {showMore && (
          <>
            <div className="row-item">
              <span className="left  fw-semibold">Skin Type: </span>
              <span className="right"> Dry to Normal, sensitive skin</span>
            </div>

            <div className="row-item">
              <span className="left  fw-semibold">Product Benefits: </span>
              <span className="right">
                Nourishing cream to foam removes dirt, oil & makeup without
                drying the skin barrier
              </span>
            </div>

            <div className="row-item">
              <span className="left  fw-semibold">Special Feature: </span>
              <span className="right">
                Nourishing cream to foam removes dirt, oil & makeup without
                drying the skin barrier
              </span>
            </div>

            <div className="row-item">
              <span className="left  fw-semibold">Active Ingredients: </span>
              <span className="right">
                “Hydrating Glycerin Essential Vitamin B3 & Pro-Vitamin B5
                Soothing Aloe Vera”
              </span>
            </div>

            <div className="row-item">
              <span className="left  fw-semibold">Item Form: </span>
              <span className="right">Foam</span>
            </div>
          </>
        )}

        {/* BUTTON */}
        <button className="see-more" onClick={() => setShowMore(!showMore)}>
          {showMore ? " See less" : " See more"}
        </button>
      </div>

      <h3 className="about-title pt-2">About this item</h3>

      <ul className="about-list">
        <li>
          Helps Defends against 5 signs of skin sensitivity (Weakened skin
          barrier, Dryness, Irritation, Roughness, Tightness)
        </li>
        <li>No Added Fragrance / Fragrance free</li>
        <li>Non-Irritating</li>
        <li>Won't clog pores</li>
        <li>Hypoallergenic</li>
      </ul>
    </div>
  );
};

export default ProductInfo;
