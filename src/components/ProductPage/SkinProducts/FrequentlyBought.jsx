import React, { useState } from "react";
import "./frequently.css";
import { IoInformationCircleOutline } from "react-icons/io5";
const FrequentlyBought = () => {
  const products = [
    {
      id: 1,
      title: "Cetaphil Hydrating Foaming Cream Cleanser 29 ml",
      price: 99.79,
      qtyInfo: "(₹344.10/100 ml)",
      img: "	https://images-eu.ssl-images-amazon.com/images/I/61JZPwrTciL._AC_UL232_SR232,232_.jpg",
      isMain: true,
    },
    {
      id: 2,
      title:
        "NIVEA Nourishing Body Milk 600ml Body Lotion with Hyaluronic Acid | 72Hr Hydration",
      price: 380,
      qtyInfo: "(₹63.33/100 ml)",
      img: "	https://images-eu.ssl-images-amazon.com/images/I/4125gF+XmHL._AC_UL232_SR232,232_.jpg",
    },
    {
      id: 3,
      title:
        "Vaseline Deep Moisture Body Lotion | For Dry Skin | Cushion Soft Skin | With Ceramides",
      price: 296,
      qtyInfo: "(₹74.00/100 ml)",
      qtyRequired: "Minimum quantity required: 1",
      img: "https://images-eu.ssl-images-amazon.com/images/I/51ZPHi1UbJL._AC_UL232_SR232,232_.jpg",
    },
  ];

  const [selected, setSelected] = useState([1, 2, 3]); // all selected initially

  const toggleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((i) => i !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const totalPrice = products
    .filter((p) => selected.includes(p.id))
    .reduce((sum, p) => sum + p.price, 0)
    .toFixed(2);

  return (
    <div className="freq-container border-top px-4">
      <h2 className="freq-title">Frequently bought together</h2>
      <div className="freq-main">
        {/* LEFT SIDE ITEMS */}
        <div className="freq-items">
          {products.map((p, index) => (
            <div className="freq-item" key={p.id}>
              <div className="freq-img-box ">
                <input
                  type="checkbox"
                  checked={selected.includes(p.id)}
                  onChange={() => toggleSelect(p.id)}
                  className="freq-checkbox bg-primary"
                />
                <img src={p.img} className="freq-img" alt="" />
              </div>

              <p className="freq-title-text">
                {p.isMain && <span className="bold">This item: </span>}
                {p.title}
              </p>

              <p className="freq-price">
                ₹{p.price}
                <span className="freq-sub">{p.qtyInfo}</span>
              </p>

              {p.qtyRequired && (
                <p className="freq-qty-required ">{p.qtyRequired}</p>
              )}

              {/* Add + sign except last */}
              {index !== products.length - 1 && (
                <div className="freq-plus">+</div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE TOTAL PRICE */}
        <div className="freq-right ms-4">
          <p className="freq-total text-center m-0 p-0">
            Total price: <span>₹{totalPrice}</span>
          </p>

          <button className="freq-btn mt-1">Add all 3 to Cart</button>
          <p className="freq-disclaimer d-flex align-items-center mt-3">
            <IoInformationCircleOutline className="info-icon text-primary" />
            These items are dispatched from and sold by different sellers.
          </p>
          <p className="freq-show">Show details</p>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyBought;
