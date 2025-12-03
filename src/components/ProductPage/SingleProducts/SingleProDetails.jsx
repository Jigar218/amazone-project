import React from "react";
import "./singleproduct.css";
const SingleProDetails = () => {
  return (
    <div>
      <p className="px-3 m-0 mb-2 fs-5 fw-semibold border-top">
        Product details
      </p>
      <ul className="pro-details px-4">
        <li>
          <strong>Product Dimensions : </strong>35 x 23 x 55 cm; 2.27 kg
        </li>

        <li>
          <strong>Date First Available : </strong> 11 July 2025
        </li>
        <li>
          <strong>Manufacturer : </strong> Swiss Military
        </li>
        <li>
          <strong>ASIN : </strong> B0FHB5G82B
        </li>
        <li>
          <strong>Item model number : </strong> KINETIC_HTL139_WHT_55CM
        </li>
        <li>
          <strong>Country of Origin : </strong> China
        </li>
        <li>
          <strong>Department : </strong> Unisex Adult
        </li>
        <li>
          <strong>Packer : </strong> SWISS MILITARY CONSUMER GOODS LIMITED,
          W-39, OKHLA INDUSTRIAL AREA, Delhi, DELHI - 110020
        </li>
        <li>
          <strong>Importer : </strong> Swiss Military
        </li>
        <li>
          <strong>Item Weight : </strong> 2 kg 270 g
        </li>
        <li>
          <strong>Item Dimensions LxWxH : </strong> 35 x 23 x 55 Centimeters
        </li>
        <li>
          <strong>Net Quantity : </strong> 1.0 count
        </li>
        <li>
          <strong>Generic Name : </strong> Luggage- Suitcase
        </li>

        <li>
          <strong>Best Sellers Rank : </strong> #5,230 in Bags, Wallets and
          Luggage (
          <span className="text-primary">
            {" "}
            See Top 100 in Bags, Wallets and Luggage{" "}
          </span>
          )
          <br />
          #418 in{" "}
          <span className="text-primary">Suitcases & Trolley Bags </span>
        </li>
        <li>
          <strong>Customer Reviews : </strong>
          5.0
        </li>
      </ul>
    </div>
  );
};

export default SingleProDetails;
