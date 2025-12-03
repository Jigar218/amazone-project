import React from "react";

const ProductImg = () => {
  const proImages = [
    {
      img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/603a19c0-746e-48a1-b029-87b7ecfc7238.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    },
    {
      img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9c4fb0e1-addf-4bab-a4fd-bdd85ed93d88.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    },
    {
      img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/b401a550-4fc8-4e79-870c-8e0beb4db9de.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    },
    {
      img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/733d680e-7a67-4979-81b7-c0b56ea3bb3f.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    },
    {
      img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/36288f28-96d6-43ac-a9dd-9db456294ddb.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    },
    {
      img: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/7f0d3a65-1733-4f71-aa5f-1ef877587d97.__CR0,0,1464,600_PT0_SX1464_V1___.jpg",
    },
  ];

  return (
    <div className="m-0 p-0">
      <p className="fw-semibold fs-5 m-0 p-0 px-3">Product Description</p>

      <div className="p-3">
        {proImages.map((item, index) => (
          <div
            key={index}
            className="d-flex justify-content-center align-items-center mb-3"
          >
            <img
              src={item.img}
              alt="img"
              style={{
                width: "100%",

                height: "auto",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImg;
