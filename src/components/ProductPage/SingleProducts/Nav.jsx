import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./navs.css";

const Navs = () => {
  return (
    <div className="d-none d-lg-block">
      <div className="nav-links d-flex justify-content-between border-bottom mb-1 px-3 ">
        <h2 className="nav-logo d-flex align-items-center">Amazon Fashion</h2>
        <span>
          Women <FaChevronDown className="nav-icon" />
        </span>
        <span>
          Men <FaChevronDown className="nav-icon" />
        </span>
        <span>
          Kids <FaChevronDown className="nav-icon" />
        </span>
        <span>
          Bags & Luggage <FaChevronDown className="nav-icon" />
        </span>
        <span>
          Sportswear <FaChevronDown className="nav-icon" />
        </span>
        <span>
          Sales & Deals <FaChevronDown className="nav-icon" />
        </span>
        <img
          src="https://m.media-amazon.com/images/G/31/img17/Fashion/150-x-50._CB485918503_.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Navs;
