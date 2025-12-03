import React, { useState } from "react";
import { Range } from "react-range";
import "./products.css";

const PriceFilter = ({ minPrice, maxPrice, setFilters }) => {
  const [values, setValues] = useState([500, 2000]);

  const priceRanges = [
    { label: "Up to ₹1,000", min: 0, max: 1000 },
    { label: "₹1,000 - ₹1,300", min: 1000, max: 1300 },
    { label: "₹1,300 - ₹1,700", min: 1300, max: 1700 },
    { label: "₹1,700 - ₹2,600", min: 1700, max: 2600 },
    { label: "Over ₹2,600", min: 2600, max: 5000 },
  ];

  return (
    <div className="price-filter">
      <h6 className="heading">Price</h6>
      <span className="price-range">
        ₹{values[0]} – ₹{values[1]}
      </span>
      <div className="d-flex align-items-center gap-3">
        <Range
          step={10}
          min={minPrice}
          max={maxPrice}
          values={values}
          onChange={(ranges) => setValues(ranges)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "4px",
                width: "75%",
                background: "#ccc",
                marginTop: "15px",
                marginLeft: "12px",
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                backgroundColor: "#0076e3",
                border: "4px solid white",
                boxShadow: "0 0 4px rgba(0, 0, 0, 0.3)",
              }}
            />
          )}
        />

        <button
          className="go-btn rounded-5"
          onClick={() => setFilters({ min: values[0], max: values[1] })}
        >
          Go
        </button>
      </div>
      <div className="price-options mt-3">
        {priceRanges.map((range, index) => (
          <div
            key={index}
            className="price-range-option"
            onClick={() => setValues([range.min, range.max])}
          >
            {range.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceFilter;
