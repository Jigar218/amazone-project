// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { useState } from "react";
// import "../../Cards/productcardList.css";
// import "../ProductDisplayList/products.css";
// import { FaStar } from "react-icons/fa";
// import { IoMdCheckmark } from "react-icons/io";
// import { FaRegStar } from "react-icons/fa";

// const SimilarProduct = ({ products }) => {
//   const itemsPerPage = 6; // Show 6 cards per page
//   const totalPages = Math.ceil(products.length / itemsPerPage);

//   const [currentPage, setCurrentPage] = useState(1);

//   // Slicing products based on current page
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   return (
//     <>
//       <div className="detail-scroll-container p-0 px-2 m-0  mt-3 border-top ">
//         {/* Top Header */}

//         <div className="detail-scroll-header ">
//           <div>
//             <strong className="fs-5">Explore more from SWISS MILITARY</strong>{" "}
//           </div>
//           <span className="page-number">
//             Page {currentPage} of {totalPages}
//           </span>
//         </div>

//         {/* Scroll Area */}
//         <div className="scroll-wrapper">
//           <button
//             className="arrow-btn left"
//             onClick={handlePrev}
//             disabled={currentPage === 1}
//           >
//             <FaChevronLeft />
//           </button>

//           <div className="scroll-items mx-4 px-2 ">
//             {currentProducts.map((item, index) => (
//               <div key={index} className="scroll-card">
//                 <img src={item.img} alt={item.title} />
//                 <p className="product-titles p-0 m-0 ">{item.title}</p>
//                 <div className="d-flex align-item-center ratings-stars">
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaStar />
//                   </span>
//                   <span>
//                     <FaRegStar />
//                   </span>
//                   <span className="reviews ms-1"> {item.reviews}</span>
//                 </div>

//                 <p className="products-price mt-1">
//                   <span className="text-danger">{item.discount}</span>
//                   {item.price}
//                 </p>

//                 <p className=" p-0 ml">{item.ml}</p>
//                 <p className="item-mrpprice">
//                   M.R.P.: <span className="line-through">{item.mrp}</span>
//                 </p>
//                 <p className="d-flex prime-sub">
//                   <IoMdCheckmark className="prime-check right-mark" />
//                   <span className="prime-sub">prime</span>
//                 </p>
//                 <p className="coupon">
//                   <span className="save-coupon">{item.save}</span>
//                   <span className="ms-1 ">with coupon</span>
//                 </p>
//               </div>
//             ))}
//           </div>

//           <button
//             className="arrow-btn right"
//             onClick={handleNext}
//             disabled={currentPage === totalPages}
//           >
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SimilarProduct;

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import "../../Cards/productcardList.css";
import "../ProductDisplayList/products.css";
import { FaStar, FaRegStar } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const SimilarProduct = ({ products }) => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  // ⭐ AUTO-CALCULATE how many cards fit in the row
  useEffect(() => {
    function measure() {
      if (!containerRef.current || !cardRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = cardRef.current.offsetWidth;

      const count = Math.floor(containerWidth / cardWidth);

      setItemsPerPage(count < 1 ? 1 : count);
    }

    measure();
    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="detail-scroll-container p-0 px-2 m-0 mt-3 border-top">
      {/* Header */}
      <div className="detail-scroll-header">
        <strong className="fs-5">Explore more from SWISS MILITARY</strong>

        <span className="page-number">
          Page {currentPage} of {totalPages}
        </span>
      </div>

      {/* Product Strip */}
      <div className="scroll-wrapper" ref={containerRef}>
        {/* Left Arrow */}
        <button
          className="arrow-btn left"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <FaChevronLeft />
        </button>

        {/* Cards */}
        <div className="scroll-items mx-4 px-2">
          {currentProducts.map((item, index) => (
            <div
              key={index}
              className="scroll-card"
              ref={index === 0 ? cardRef : null}
            >
              <img src={item.img} alt={item.title} />

              <p className="product-titles">{item.title}</p>

              <div className="d-flex align-item-center ratings-stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <span className="reviews ms-1">{item.reviews}</span>
              </div>

              <p className="products-price mt-1">
                <span className="text-danger">{item.discount}</span>
                {item.price}
              </p>

              <p className="p-0 ml">{item.ml}</p>

              <p className="item-mrpprice">
                M.R.P.: <span className="line-through">{item.mrp}</span>
              </p>

              <p className="d-flex prime-sub">
                <IoMdCheckmark className="prime-check right-mark" />
                <span className="prime-sub">prime</span>
              </p>

              <p className="coupon">
                <span className="save-coupon">{item.save}</span>
                <span className="ms-1">with coupon</span>
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
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

export default SimilarProduct;
