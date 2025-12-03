import { useLocation } from "react-router-dom";
import SingleProductPage from "../components/ProductPage/SingleProducts/SingleProductPage";
import SkinProductsPage from "../components/ProductPage/SkinProducts/SkinProductsPage";

const Products = ({
  scrollproduct3,
  scrollproduct2,
  scrollproduct1,
  scrollproduct4,
  scrollproduct5,
}) => {
  const location = useLocation();

  if (location.pathname === "/bags") {
    return (
      <SingleProductPage
        detailScroll3={scrollproduct3}
        detailScroll2={scrollproduct2}
        detailScroll1={scrollproduct1}
      />
    );
  }

  if (location.pathname === "/facewash") {
    return (
      <SkinProductsPage
        detailScroll3={scrollproduct3}
        detailScroll2={scrollproduct2}
        detailScroll1={scrollproduct1}
        detailScroll4={scrollproduct4}
        detailScroll5={scrollproduct5}
      />
    );
  }

  return <div>Page not found</div>;
};

export default Products;
