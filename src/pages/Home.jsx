import FeatureCard from "../components/Cards/CategoriesCard";
import HomeCategorySection from "../components/Cards/HomeCategorySection ";
import RelatedProducts from "../components/Cards/RelatedProducts";
import Carousel from "../components/Carousels/Carousels";
import "../components/Carousels/carousels.css";
import "../components/Cards/categories.css";
import HorizontalCard from "../components/Cards/HorizontalCard";
import {
  bagsproducts,
  tables,
  bikes,
  kitchen,
  homefinds,
  artisans,
  featureData,
  headphones,
  productData,
  detailScrollProducts,
} from "../data/data";
import ProductCard from "../components/Product/ProductCard";
import ProductDetailScroll from "../components/Cards/ProductList";
import SignIn from "../components/Cards/SignIn";

function Home() {
  return (
    <>
      <div className="container p-0 " style={{ maxWidth: "1500px" }}>
        <div className="relative" style={{ background: "#E3E6E6" }}>
          <div className="overflow-hidden">
            <Carousel />
          </div>

          {/* Cards Section */}
          <div className="fix-card-layer">
            <HomeCategorySection />
            <div className="container-fluid mt-3  px-0">
              <FeatureCard featureData={headphones} />
            </div>
            <RelatedProducts
              title="Related to items you've viewed"
              products={bagsproducts}
              imageSize={{ width: "160px", height: "200px" }} // Default
            />

            <RelatedProducts
              title="Best Tables for Home"
              products={tables}
              imageSize={{ width: "200px", height: "200px" }} // Custom for tables
            />
            <div className="container-fluid mb-3 px-0">
              <FeatureCard featureData={featureData} />
            </div>
            <RelatedProducts
              title="Starting ₹70,348 | From daily commutes to weekend thrills"
              products={bikes}
              imageSize={{ width: "270px", height: "168px" }} // Custom for tables
            />
            <RelatedProducts
              title="Up to 60% off | Best offers on kitchen products | Amazon Launchpad"
              products={kitchen}
              imageSize={{ width: "200px", height: "200px" }} // Custom for tables
            />
            <HorizontalCard />
            <div className="container-fluid mb-3 px-0">
              <FeatureCard featureData={featureData} />
            </div>
            <RelatedProducts
              title="Min. 50% off | Unique home finds | Amazon Brands & more"
              products={homefinds}
              imageSize={{ width: "200px", height: "200px" }} // Custom for tables
            />
            <ProductCard productData={productData} />
            {/* <RelatedProducts
          title="Min. 50% off | Unique home finds | Amazon Brands & more"
          products={trending}
          imageSize={{ width: "200px", height: "200px" }} // Custom for tables
        /> */}

            <RelatedProducts
              title="Min. 50% off | Unique home finds | Amazon Brands & more"
              products={artisans}
              imageSize={{ width: "200px", height: "200px" }} // Custom for tables
            />
          </div>
        </div>
      </div>
      <ProductDetailScroll products={detailScrollProducts} />
      <SignIn />
    </>
  );
}

export default Home;
