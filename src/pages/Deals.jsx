// Deals.jsx
import ProductPage from "../components/ProductPage/ProductDisplayList/ProductPage";
import ProductHeader from "../components/ProductPage/ProductHeader";

const Deals = ({
  productsData,
  sidebaritems,
  scrollproduct1,
  scrollproduct2,
}) => {
  return (
    <>
      <ProductHeader />
      <ProductPage
        productsData={productsData}
        sidebaritems={sidebaritems}
        detailScroll1={scrollproduct1}
        detailScroll2={scrollproduct2}
      />
    </>
  );
};

export default Deals;
