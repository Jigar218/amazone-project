import ProductDetailScroll from "../../Cards/ProductList";
import SignIn from "../../Cards/SignIn";
import RecommendedProduct from "../ProductDisplayList/RecommedProduct";
import CustomerReviews from "./CustomerReviews";
import Navs from "./Nav";

import ProductImg from "./ProductImg";
import SimilarProduct from "./SimilarBrand";

import SingleProDetails from "./SingleProDetails";

import SingleProduct from "./SingleProduct";

const SingleProductPage = ({ detailScroll2, detailScroll3, detailScroll1 }) => {
  const product = {
    title:
      "Swiss Military Black Gold Collection Kinetic 20 Inch Hard Cabin Size Trolley Bag & PP Body with Aluminium Frame, TSA Lock, 360 Degree Wheeling System Luggage Trolley Bag, Wet Pouch Organizer-White",
    link: "Visit the Swiss Military Store",
    price: 10499,
    discount: "30%",
    mrp: 14990,
    rating: 5,
    reviews: 1,
    images: [
      "	https://m.media-amazon.com/images/I/412N1KblsFL._SS40_.jpg",
      "https://m.media-amazon.com/images/I/41tuTwt0-mL._SS40_.jpg",
      "	https://m.media-amazon.com/images/I/41BB-RfI5pL._SS40_.jpg",
      "https://m.media-amazon.com/images/I/41gssbR+MsL._SS40_.jpg",
    ],
  };

  const ratingsData = [
    { stars: 5, count: 1 },
    { stars: 4, count: 0 },
    { stars: 3, count: 0 },
    { stars: 2, count: 0 },
    { stars: 1, count: 0 },
  ];

  return (
    <div>
      <Navs />
      <div className="container" style={{ maxWidth: "1500px" }}>
        <SingleProduct product={product} />

        <SimilarProduct products={detailScroll3} />
        <ProductDetailScroll products={detailScroll2} />
        <ProductImg />
        <SingleProDetails />
        <SimilarProduct products={detailScroll3} />
        <ProductDetailScroll products={detailScroll2} />
        <CustomerReviews ratingsData={ratingsData} />
      </div>
      <RecommendedProduct products={detailScroll1} />
      <ProductDetailScroll products={detailScroll2} />
      <SignIn />
    </div>
  );
};

export default SingleProductPage;
