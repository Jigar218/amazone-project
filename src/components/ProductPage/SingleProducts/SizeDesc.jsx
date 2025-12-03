import React, { useState } from "react";
import "./singleproduct.css";
const SizeDesc = () => {
  const [selectedSize, setSelectedSize] = useState("S");

  // Different description according to size
  const sizeDescriptions = {
    S: [
      "Premium Polycarbonate Build: Made with durable, impact-resistant polycarbonate for long-lasting strength, lightweight handling, and stylish finish – ideal for cabin luggage use during air travel and business trips.",
      "Aluminium Frame Closure: Equipped with a strong aluminium frame mechanism that enhances security, eliminates zip issues, and offers a luxurious structure and style for elite travelers.",
      "360° Spinner Wheels: Features 4 smooth-glide 360° rotatable wheels for effortless and noise-free movement through airports, metros, or busy terminals – handle tight spaces with ease.",
      "TSA-Approved Lock System: Comes with dual TSA lock for international travel safety, allowing security personnel access without damage while protecting your valuables from theft or tampering.",
      "Wet Pouch & Organizer Pockets: Includes interior utility organizer mesh pockets and a water-resistant wet pouch – perfect for toiletries, swimwear, or small laundry during short stays.",
      "Compact Yet Spacious (44L): This 20” cabin-size bag offers ample space for weekend trips or quick getaways with a capacity of 44 liters and fits in most airline overhead bins with ease.",
    ],
    M: [
      "Strong Yet Lightweight Build: Made with high-grade polycarbonate shell that resists impacts, scratches, and rough handling while staying lightweight for effortless lifting during transit or at check-in.",
      "Aluminium Frame with Dual TSA Locks: Enhanced with aluminium closing frame and dual TSA-approved locks to ensure maximum luggage safety and travel convenience.",
      "360-Degree Rotating Wheels: Equipped with 4 silent spinner wheels for smooth multi-directional movement through airports and crowded areas.",
      "Spacious 76-Litre Capacity: Medium-size luggage with 76L storage ideal for 5–7 days of travel – great for family trips, business tours, and festive holidays.",
      "Interior Utility Organizer with Wet Pouch: Comes with multiple mesh compartments and a dedicated wet pouch to store toiletries, damp clothes, or grooming essentials separately.",
    ],
    L: [
      "Ultra-Spacious 121L Capacity: Designed for extended travel, this large-size trolley bag holds all your essentials for trips lasting 10+ days, making it ideal for vacations, business tours, or international travel.",
      "Premium Polycarbonate Shell: Made from durable polycarbonate with an aluminium frame, it resists scratches, shocks, and dents—offering long-lasting protection while remaining lightweight and stylish.",
      "Dual TSA Locks for Global Travel: Integrated with dual premium TSA locks that provide peace of mind during security checks, ensuring your luggage stays secure and compliant with international travel norms.",
      "Effortless 360° Movement: Equipped with four multi-directional spinner wheels that rotate 360 degrees for smooth, silent, and stable mobility—perfect for navigating busy terminals and uneven surfaces.",
      "Advanced Interior Organizer with Wet Pouch: Features utility mesh zipper compartments, elastic garment straps, and a wet pouch to keep damp items or toiletries separate from your clean clothes.",
      "Ergonomic Travel-Ready Design: Comes with an aluminium push-button trolley handle, strong side & top carry handles, and premium lining—blending convenience, luxury, and utility into one luggage solution.",
    ],
  };
  const colour = [
    {
      img: "https://m.media-amazon.com/images/I/31MoH2XYoIL._SS64_.jpg",
      price: "₹10,499.00",
      realprice: "₹14,4990.00",
    },
    {
      img: "https://m.media-amazon.com/images/I/31MoH2XYoIL._SS64_.jpg",
      price: "₹10,499.00",
      realprice: "₹14,4990.00",
    },
  ];
  return (
    <div>
      {/* Selected Size */}
      <p className="mt-2">
        Color: <strong>White</strong>
      </p>

      <div className="d-flex gap-2 ">
        {colour.map((item, index) => (
          <div
            className="card border border-dark p-1"
            key={index}
            style={{ height: "135px" }}
          >
            <img src={item.img} alt="" className="border-bottom" />
            <p style={{ fontSize: "13px", width: "60px" }} className="ps-1">
              {item.price}
            </p>
            <p
              style={{ fontSize: "12px", marginTop: "-12px", color: "gray" }}
              className="ps-1 line-through"
            >
              {item.realprice}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-2">
        Size: <strong>{selectedSize}</strong>
      </p>

      {/* Size Options */}
      <div className="d-flex gap-2 size-chart">
        {["S", "M", "L"].map((size) => (
          <p
            key={size}
            className={`size-option ${selectedSize === size ? "active" : ""}`}
            onClick={() => setSelectedSize(size)}
            style={{
              cursor: "pointer",
              border: "1px solid #ccc",
              borderRadius: "4px",
              background:
                selectedSize === size ? " rgb(194, 194, 255)" : "#fff",
              fontWeight: selectedSize === size ? "bold" : "normal",
            }}
          >
            {size}
          </p>
        ))}
      </div>

      {/* Description */}
      <div className="mt-2 size-desc">
        <ul className="list-styled">
          {sizeDescriptions[selectedSize].map((point, index) => (
            <li key={index} className="desc-point">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SizeDesc;
