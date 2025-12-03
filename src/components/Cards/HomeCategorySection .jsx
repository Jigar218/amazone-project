import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

import "./cards.css";
const categories = [
  {
    title: "Continue shopping deals",
    items: [
      {
        img: "https://m.media-amazon.com/images/I/717jTPRVXDL._AC_SY145_.jpg",
        link: "/bags",
      },
      {
        img: "https://m.media-amazon.com/images/I/71AS8OyATtL._AC_SY145_.jpg",
        link: "/bags",
      },
      {
        img: "https://m.media-amazon.com/images/I/71pcqzAkDML._AC_SY145_.jpg",
        link: "/bags",
      },
      {
        img: "https://m.media-amazon.com/images/I/51hMS+vs8gL._AC_SY145_.jpg",
        link: "/bags",
      },
    ],
    moreLink: "/deals",
    moreText: "See more deals",
  },
  {
    title: "Revamp your home in style",
    items: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
        text: "Cushion covers, bedsheets & more",
        link: "/cushions",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
        text: "Figurines, vases & more",
        link: "/decor",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
        text: "Home storage",
        link: "/storage",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
        text: "Lighting solutions",
        link: "/lighting",
      },
    ],
    moreLink: "/home-style",
    moreText: "Explore all",
  },
  {
    title: "Appliances for your home | Up to 55% off",
    items: [
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
        text: "Air conditioners",
        link: "/ac",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
        text: "Refrigerators",
        link: "/refrigerators",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
        text: "Microwaves",
        link: "/microwaves",
      },
      {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
        text: "Washing machines",
        link: "/washing",
      },
    ],
    moreLink: "/appliances",
    moreText: "See more",
  },
];

const HomeCategorySection = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
      {categories.map((category, index) => (
        <div key={index} className="bg-white  border rounded-0 cards  ">
          <h3 className="card-title">{category.title}</h3>

          <div className="grid grid-cols-2 ">
            {category.items.map((item, i) => (
              <div
                key={i}
                className="item-box "
                onClick={() => navigate(item.link)}
              >
                <img src={item.img} alt={item.text} className="card-image " />
                {item.text && (
                  <p className="text-xs text-gray-600  m-0">{item.text}</p>
                )}
              </div>
            ))}
          </div>

          <p
            className="text-blue-600 text-sm cursor-pointer "
            onClick={() => navigate(category.moreLink)}
          >
            {category.moreText}
          </p>
        </div>
      ))}

      {/* Right-side Sign-in Card */}
      <div className="hidden lg:block ">
        <div
          className="bg-white shadow rounded-0 p-4  d-flex  flex-col"
          style={{ height: "150px" }}
        >
          <h3 className="signin-title">Sign in for your best experience</h3>
          <button className="bg-yellow-400 mt-2 w-full py-2 rounded-5 hover:bg-yellow-500">
            Sign in securely
          </button>
        </div>
        <div
          className="bg-white shadow rounded-0 p-3  d-flex flex-col mt-3 cursor-pointer"
          style={{ height: "250px" }}
        >
          <div
            className="d-flex justify-content-between align-items-center"
            onClick={() => navigate("/bags")}
          >
            <img
              src="https://m.media-amazon.com/images/I/61IyXoXbd4L._AC_SY145_.jpg"
              alt=""
            />
            <div className="ms-3 ">
              <h3 className="ads-title">
                Safari Genius Alley 55cm Cabin Trolley Bag Hard Case
                Polypropylene, 4...
              </h3>
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
                <span className="text-black">3,797</span>
              </div>
              <p className="bg-danger d-inline-block text-white off-item">
                {" "}
                76% off
              </p>
              <p className="limit-item ">Limited deal offer</p>
              <p className="percentage-off ">
                <span className="text-danger">-76% </span> 1,699<sup>00</sup>
              </p>
              <p className="discounted-price">
                M.R.P: <span className="mrp"> 6,999.000 </span>
                <span className="text-primary ms-1 ">
                  <IoMdCheckmark className="check d-inline" /> prime
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategorySection;
