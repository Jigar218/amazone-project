import React from "react";
import "./brandcards.css";

const BrandCards = () => {
  const brands = [
    {
      img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/734f5d3d-6ea4-4e3d-93ec-ea347c63cc13._CR0,0,1200,628_SX460_CB1169409_QL70_.png",
      brand:
        "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/335e9e51-93f6-469f-ab3a-63006cfbdbeb._CR0,0,1080,1080_AC_SX96_SY48_CB1169409_QL70_.png",
      title: "Anti-Pimple Face Wash",
    },
    {
      img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f77349db-e98a-43ca-b0a9-daf2bb2231b6._CR0,0,1200,628_SX460_CB1169409_QL70_.jpg",
      brand:
        "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/9572498f-63d1-48fb-b9f3-59ee5f7f50e7._CR0,0,1080,1080_AC_SX96_SY48_CB1169409_QL70_.png",
      title: "Deep Clean Facewash",
    },
    {
      img: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/b11c6bbe-634c-4c88-8052-3a5506cb044b._CR0,0,1200,628_SX460_CB1169409_QL70_.jpeg",
      brand:
        "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/ebf0b06e-99cb-4e1f-91cf-73ee7029e5c3._CR0,0,1063,1063_AC_SX96_SY48_CB1169409_QL70_.jpg",
      title: "Dark Spot Reduction",
    },
  ];

  return (
    <div className=" border-top px-3 pt-3 ">
      <h6 className="Brands">Brands in this category on Amazon</h6>
      <div className="brand-container mt-3">
        {brands.map((b, i) => (
          <div className="brand-card" key={i}>
            <img src={b.img} className="brand-img" alt="" />

            {/* TEXT VISIBLE ALWAYS */}
            <div className="brand-info d-flex justify-content-center ">
              <img src={b.brand} className="" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCards;
