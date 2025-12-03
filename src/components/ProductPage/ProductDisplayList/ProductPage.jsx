import React, { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import ProductsCards from "./ProductsCards";
import AdsPage from "./AdsPage";
// import { sidebarproducts } from "../../../data/data";
import "./products.css";
// import { products } from "../../../data/product";
import ProductDetailScroll from "../../Cards/ProductList";
// import { detailScrollProducts, detailScrollEarphone } from "../../../data/data";
import RecommendedProduct from "./RecommedProduct";
import SignIn from "../../Cards/SignIn";
function ProductPage({
  productsData,
  sidebaritems,
  detailScroll1,
  detailScroll2,
}) {
  const [filters, setFilters] = useState({});
  const [min, setMin] = useState(390);
  const [max, setMax] = useState(2350);

  return (
    <>
      <div className="container" style={{ maxWidth: "1800px" }}>
        <div className="product-page">
          <div className="sidebar d-none d-lg-block">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              min={min}
              max={max}
              setMin={setMin}
              setMax={setMax}
              sidebarproducts={sidebaritems}
            />
          </div>

          <ProductsCards products={productsData} />
        </div>

        <AdsPage />
      </div>
      <RecommendedProduct products={detailScroll1} />
      <ProductDetailScroll products={detailScroll2} />
      <SignIn />
    </>
  );
}

export default ProductPage;
