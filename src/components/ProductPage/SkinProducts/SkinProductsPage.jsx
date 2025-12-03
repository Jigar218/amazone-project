import React from "react";
import SignIn from "../../Cards/SignIn";
import ProductDetailScroll from "../../Cards/ProductList";
import SkinProduct from "./SkinProduct";
import FrequentlyBought from "./FrequentlyBought";
import SimilarProduct from "../SingleProducts/SimilarBrand";
import ImpInformation from "./ImpInformation";
import SingleProDetails from "../SingleProducts/SingleProDetails";
import CustomerReviews from "./CustomerReviews";

import SkinProductNav from "./SkinProductNav";
import BrandCards from "./BrandCards";

const SkinProductsPage = ({ detailScroll2, detailScroll4, detailScroll5 }) => {
  const product = {
    title: "Cetaphil Hydrating Foaming Cream Cleanser 29 ml",
    link: "Visit the Cetaphil Store",
    price: "₹99",
    discount: "41%",
    mrp: "169",
    rating: "3.0",
    reviews: "17 rating",
    images: [
      "	https://m.media-amazon.com/images/I/61JZPwrTciL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/31YBX8c0+vL._SS40_.jpg",
    ],
    purchase: "10K+ bought in past month",
  };

  return (
    <div>
      <SkinProductNav />
      <div className="container" style={{ maxWidth: "1500px" }}>
        <SkinProduct product={product} />

        <FrequentlyBought />
        <SimilarProduct products={detailScroll4} />
        <ProductDetailScroll products={detailScroll5} />
        <ImpInformation />
        <SingleProDetails />
        <SimilarProduct products={detailScroll4} />
        <BrandCards />
        <CustomerReviews />
      </div>
      <SimilarProduct products={detailScroll4} />
      <ProductDetailScroll products={detailScroll2} />
      <SignIn />
    </div>
  );
};

export default SkinProductsPage;
