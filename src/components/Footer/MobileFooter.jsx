import "./footer.css";

const Footer = () => {
  return (
    <footer className="d-block d-lg-none d-md-none sm-bg-screen">
      <div className="footer-options container ">
        <div className="footer-sections ">
          <div className="row">
            <div className="col-6 ">
              <ul className="list-unstyled text-white sm-screen">
                <li>Amazon.in</li>
                <li>Your Orders</li>
                <li>Amazon App Download</li>
                <li>Your Lists</li>
                <li>Your Recently Viewed Items</li>
                <li>Recalls and Product Safety Alerts</li>
                <li>Customer Service</li>
              </ul>
            </div>

            <div className="col-6 ">
              <ul className="list-unstyled text-white sm-screen">
                <li>our Amazon.in</li>
                <li>Amazon Pay</li>
                <li>Amazon Live</li>
                <li>Your Account</li>
                <li>Returns</li>
                <li>Sell</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
