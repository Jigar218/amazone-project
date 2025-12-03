// import React from "react";
// import "./productheader.css";

// const ProductHeader = () => {
//   return (
//     <div className="product-header">
//       {/* Navigation Row */}
//       <div className="category-nav justify-content-between pb-3 border-bottom ">
//         <span className="sub-category">Electronics</span>
//         <span className="sub-category">Mobiles & Accessories</span>
//         <span className="sub-category">Laptops & Accessories</span>
//         <span className="sub-category">TV & Home Entertainment</span>
//         <span className="sub-category">Audio</span>
//         <span className="sub-category">Cameras</span>
//         <span className="sub-category">Computer Peripherals</span>
//         <span className="sub-category">Smart Technology</span>
//         <span className="sub-category">Musical Instruments</span>
//         <span className="sub-category">Office & Stationery</span>
//       </div>

//       {/* Results Count */}
//       <div className="result-count  d-flex align-items-center  m-0 p-0">
//         <p className="">1–24 of 225 results</p>
//         <select className="sort-dropdown">
//           <option>Bestselling</option>
//           <option>Price: Low to High</option>
//           <option>Price: High to Low</option>
//           <option>Newest Arrivals</option>
//         </select>
//       </div>
//       <hr className="m-0 p-0" />
//     </div>
//   );
// };

// export default ProductHeader;
import React from "react";
import "./productheader.css";
import { MdOutlineFilterList } from "react-icons/md";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
const ProductHeader = () => {
  return (
    <div className="product-header">
      {/* Desktop / Tablet Header */}
      <div className="d-none d-sm-block">
        <div className="category-nav justify-content-between pb-3 border-bottom">
          <span className="sub-category">Electronics</span>
          <span className="sub-category">Mobiles & Accessories</span>
          <span className="sub-category">Laptops & Accessories</span>
          <span className="sub-category">TV & Home Entertainment</span>
          <span className="sub-category">Audio</span>
          <span className="sub-category">Cameras</span>
          <span className="sub-category">Computer Peripherals</span>
          <span className="sub-category">Smart Technology</span>
          <span className="sub-category">Musical Instruments</span>
          <span className="sub-category">Office & Stationery</span>
        </div>

        <div className="result-count d-flex align-items-center">
          <p className="m-0">1–24 of 225 results</p>
          <select className="sort-dropdown">
            <option>Bestselling</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      {/* Mobile Compact Header */}
      <div className="d-block d-sm-none mobile-filter-bar ">
        <button className="filter-btn">
          <MdOutlineFilterList />
        </button>
        <button className="filter-btn">
          {" "}
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
            </span>{" "}
            <span className="text-black"> & Up</span>
          </div>
        </button>
        <button className="filter-btn">All Discounts</button>
        <button className="filter-btn">Today's Deals</button>
        <button className="filter-btn">Wireless Tech ▾</button>
        <button className="filter-btn">Discount ▾</button>
        <button className="filter-btn">Availability ▾</button>
        <button className="filter-btn">Availability ▾</button>
      </div>

      <hr className="m-0 p-0" />
    </div>
  );
};

export default ProductHeader;
