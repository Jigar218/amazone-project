// import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
import Deals from "./pages/Deals";
import Products from "./pages/Products";
import {
  sidebarproducts,
  sidebarproductsAc,
  detailScrollProducts,
  detailScrollEarphone,
  sidebarproductsRefrigerator,
  sidebarproductsWashing,
  detailScrollBags,
  detailScrollfacewash,
  detailfaceProducts,
} from "./data/data";
import {
  products,
  acproduct,
  Refrigerators,
  microwaves,
  Washingmachine,
} from "./data/product";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/headphones"
          element={
            <Deals
              productsData={products}
              sidebaritems={sidebarproducts}
              scrollproduct1={detailScrollEarphone}
              scrollproduct2={detailScrollProducts}
            />
          }
        />
        <Route
          path="/ac"
          element={
            <Deals
              productsData={acproduct}
              sidebaritems={sidebarproductsAc}
              scrollproduct1={detailScrollEarphone}
              scrollproduct2={detailScrollProducts}
            />
          }
        />
        <Route
          path="/refrigerators"
          element={
            <Deals
              productsData={Refrigerators}
              sidebaritems={sidebarproductsRefrigerator}
              scrollproduct1={detailScrollEarphone}
              scrollproduct2={detailScrollProducts}
            />
          }
        />
        <Route
          path="/microwaves"
          element={
            <Deals
              productsData={microwaves}
              sidebaritems={sidebarproductsRefrigerator}
              scrollproduct1={detailScrollEarphone}
              scrollproduct2={detailScrollProducts}
            />
          }
        />
        <Route
          path="/washing"
          element={
            <Deals
              productsData={Washingmachine}
              sidebaritems={sidebarproductsWashing}
              scrollproduct1={detailScrollEarphone}
              scrollproduct2={detailScrollProducts}
            />
          }
        />
        <Route
          path="/bags"
          element={
            <Products
              scrollproduct3={detailScrollBags}
              scrollproduct2={detailScrollProducts}
              scrollproduct1={detailScrollEarphone}
            />
          }
        />
        <Route
          path="/facewash"
          element={
            <Products
              scrollproduct3={detailScrollBags}
              scrollproduct4={detailScrollfacewash}
              scrollproduct2={detailScrollProducts}
              scrollproduct1={detailScrollEarphone}
              scrollproduct5={detailfaceProducts}
            />
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
