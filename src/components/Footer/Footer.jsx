import "./footer.css";
import logo from "../../assets/logo.png";
import flag from "../../assets/india.png";
import { CiGlobe } from "react-icons/ci";
import MobileFooter from "./MobileFooter.jsx";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div
        onClick={scrollToTop}
        className="back-top d-flex  justify-content-center align-items-center "
      >
        <h6 className="title-footer m-0">Back to top</h6>
      </div>

      <div className="footer-options  d-none d-md-block">
        <div
          className="footer-sections container"
          style={{ maxWidth: "1000px" }}
        >
          <div className="row d-flex justify-content-between pb-5 ">
            <div className="col-6 col-md-3 " style={{ maxWidth: "132px" }}>
              <h6>Get to Know Us</h6>
              <p>About Amazon</p>
              <p>Careers</p>
              <p>Press Releases</p>
              <p>Amazon Science</p>
            </div>

            <div className="col-6 col-md-3" style={{ maxWidth: "138px" }}>
              <h6>Connect with Us</h6>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>

            <div className="col-6 col-md-3 " style={{ maxWidth: "207px" }}>
              <h6>Make Money with Us</h6>
              <p>Sell on Amazon</p>
              <p>Sell under Amazon Accelerator</p>
              <p>Protect and Build Your Brand</p>
              <p>Amazon Global Selling</p>
              <p>Supply to Amazon</p>
              <p>Become an Affiliate</p>
              <p>Fulfillment by Amazon</p>
              <p>Advertise Your Products</p>
              <p>Amazon Pay on Merchants</p>
            </div>

            <div className="col-6 col-md-3 ms-2" style={{ maxWidth: "221px" }}>
              <h6>Let Us Help You</h6>
              <p>Your Account</p>
              <p>Returns Centre</p>
              <p>Recalls and Product Safety Alerts</p>
              <p>100% Purchase Protection</p>
              <p>Amazon App Download</p>
              <p>Help</p>
            </div>
          </div>
        </div>
        <hr className="full-line d-none  d-md-block" />

        <div className="footer-bottom d-none   d-md-flex justify-content-center align-items-center container-fluid gap-5 pt-4">
          <img src={logo} alt="Amazon Logo" className="footer-logo me-5 " />

          <div className="footer-selects ">
            <button className="footer-btn me-2">
              <CiGlobe className="d-inline-flex" /> English
            </button>
            <button className="footer-btn">
              {/* <div className="d-flex align-items-center gap-2"> */}
              <img
                src={flag}
                alt="flag"
                className="flag d-inline-block me-2 mb-0"
              />
              India
              {/* </div> */}
            </button>
          </div>
        </div>
      </div>

      <MobileFooter />

      <div className="footer-bottom-links">
        <div className="container" style={{ maxWidth: "1000px" }}>
          <div className="row d-none d-lg-flex justify-content-start gap-4">
            <div className="col-6 col-md-2 footer-link">
              <p className="footer-title">AbeBooks</p>
              <p>Books, art</p>
              <p>& collectibles</p>
            </div>

            <div className="col-6 col-md-2 footer-link">
              <p className="footer-title">Amazon Web Services</p>
              <p>Scalable Cloud</p>
              <p>Computing Services</p>
            </div>

            <div className="col-6 col-md-2 footer-link">
              <p className="footer-title">Audible</p>
              <p>Download</p>
              <p>Audio Books</p>
            </div>

            <div className="col-6 col-md-2 footer-link">
              <p className="footer-title">IMDb</p>
              <p>Movies, TV</p>
              <p>& Celebrities</p>
            </div>
          </div>
          <div className="row justify-content-start gap-4 d-none d-lg-flex ">
            <div className="col-6 col-md-2 footer-link">
              <p className="footer-title">Shopbop</p>
              <p>Designer</p>
              <p>Fashion Brands</p>
            </div>

            <div className="col-6 col-md-2 footer-link">
              <p className="footer-title">Amazon Business</p>
              <p>Everything For</p>
              <p>Your Business</p>
            </div>

            <div className="col-6 col-md-2 footer-link">
              <p className="footer-title">Prime Now</p>
              <p>2-Hour Delivery</p>
              <p>on Everyday Items</p>
            </div>

            <div className="col-6 col-md-2 footer-link">
              <p className="footer-title">Amazon Prime Music</p>
              <p>100 million songs, ad-free</p>
              <p>Over 15 million podcast episodes</p>
            </div>
          </div>
          <div className="d-lg-none d-flex flex-column align-items-center justify-content-center">
            <button className="footer-btn me-2 border-0  d-flex align-items-center justify-content-center gap-2">
              <CiGlobe className="d-inline-flex" /> English
            </button>
            <p className="mt-4 mb-2 text-white d-lg-none ">
              Already a customer? Sign in
            </p>
          </div>
          {/* Bottom Text */}
          <div className="footer-info">
            <span>Conditions of Use & Sale</span>
            <span>Privacy Notice</span>
            <span>Interest-Based Ads</span>
          </div>
          <div className="footer-copy">
            © 1996-2025, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
