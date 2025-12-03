import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { RiArrowDropDownFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.png";
import flag from "../../assets/india.png";
import { FaRegUser } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiArrowDropRightLine } from "react-icons/ri";
import "./navbar.css";
const Navbars = () => {
  return (
    <div style={{ fontSize: "14px" }}>
      {/* TOP NAVBAR */}
      <Navbar
        expand="lg"
        style={{ background: "#131921", padding: "6px 20px" }}
        className="d-flex flex-column flex-lg-row"
      >
        {/* 📱Mobile Top Row */}
        <div className="d-flex d-lg-none align-items-center justify-content-between w-100 ">
          {/* Left Section (Menu + Logo) */}
          <div className="d-flex align-items-center me-auto">
            <FaBars size={20} className="text-white me-2" />

            <Link
              to="/"
              className="d-flex align-items-center mobile-logo text-decoration-none"
            >
              <img src={logo} alt="logo" style={{ height: "28px" }} />
              <span className="logo text-white">.in</span>
            </Link>
          </div>
          {/* Right Section (Sign-in + Cart) */}
          <div className="d-flex align-items-center text-white">
            Sign in
            <RiArrowDropRightLine />
            <FaRegUser size={20} className="me-3 ms-1" />
            <div className="position-relative">
              <PiShoppingCartSimpleBold size={25} />
              <span className="position-absolute cart-length">0</span>
            </div>
          </div>
        </div>
        {/*  Desktop Logo */}
        <Link
          to="/"
          className="d-none d-lg-flex align-items-center  text-decoration-none"
        >
          <img src={logo} alt="logo" style={{ height: "28px" }} />
          <span className="logo text-white">.in</span>
        </Link>
        {/*  Location (Only Desktop) */}
        <div className="text-white d-none d-lg-flex align-items-center location me-3 mt-1">
          <IoLocationOutline style={{ fontSize: "16px" }} />
          <div className="pt-1 ms-1">
            <p className="d-inline text-gray-300" style={{ fontSize: "12px" }}>
              Delivering to Mumbai 400022
            </p>
            <p className="update">Update location</p>
          </div>
        </div>
        {/*  Search Bar (Both) */}
        <Form
          className="d-flex mx-auto grow  search-bar-size"
          style={{ maxWidth: "800px" }}
        >
          {" "}
          <Form.Select
            className="options"
            style={{ width: "70px", borderRadius: "5px 0 0 5px" }}
          >
            {" "}
            <option className="">All</option> <option className="">All</option>{" "}
          </Form.Select>{" "}
          <FormControl
            type="search"
            placeholder="Search Amazon.in"
            className="border-0 input-style"
            style={{ borderRadius: "0" }}
          />{" "}
          <Button
            style={{
              background: "#F3A847",
              borderRadius: "0 5px 5px 0",
              border: "none",
            }}
          >
            {" "}
            <FaSearch className="text-gray-600" />{" "}
          </Button>{" "}
        </Form>
        {/* 🌎 Language + Account Info (Desktop only) */}
        {/* Account Info */}
        <div className="text-white d-none d-lg-flex ps-3 ">
          <div className="d-flex mt-2">
            <img src={flag} alt="flag" className="flag me-1" />
            <small className="">EN</small>
            <RiArrowDropDownFill className="arrows" />
          </div>
        </div>
        {/* Account Info */}{" "}
        <div className="text-white d-none d-lg-block ms-2 ">
          <p className="d-inline-block sign-in p-0">
            {" "}
            Hello, sign in <br />{" "}
            <span className="acc d-inline-block">Account & Lists</span>{" "}
          </p>{" "}
        </div>{" "}
        {/* Returns */}{" "}
        <div className="text-white d-none d-lg-block ms-3 ">
          {" "}
          <p className="d-inline-block sign-in p-0">
            {" "}
            Returns <br /> <span className="acc d-inline-block">
              & Orders
            </span>{" "}
          </p>{" "}
        </div>
        {/* 🛒 Cart Desktop */}
        <div className="text-white d-none d-lg-flex ps-2 position-relative">
          <span className="position-absolute cart-length">0</span>
          <PiShoppingCartSimpleBold size={30} />
          <span className="mt-2 ms-1">Cart</span>
        </div>
        <div className="d-flex d-lg-none text-white gap-4 w-100 justify-content-start">
          <span>
            Shop by <br /> Category
          </span>
          <span>Deals</span>
          <span>Sell</span>
        </div>
      </Navbar>
      {/* 📱 MOBILE MENU (Shop Categories) */}
      {/* 📍 MOBILE LOCATION */}
      <div className="d-flex d-lg-none align-items-center gap-2 bg-[#232F3E] text-white px-3 py-2">
        <IoLocationOutline size={18} />
        <span style={{ fontSize: "13px" }}>
          Deliver to John - Mumbai 400101
        </span>
      </div>
      {/* 🔹 BOTTOM NAVBAR */}{" "}
      <Navbar
        expand="lg"
        style={{ background: "#232F3E", height: "39px", padding: "0px 0" }}
        className="d-none d-lg-block"
      >
        {" "}
        <div className="d-flex w-100 justify-content-between align-items-center flex-wrap">
          {" "}
          {/* Left Side Menu */}{" "}
          <Nav className="d-flex align-items-center flex-wrap">
            {" "}
            <Nav.Link href="#" className="text-white d-flex">
              <FaBars className="mt-1 me-2" /> All
            </Nav.Link>{" "}
            {[
              "Fresh",
              "MX Player",
              "Sell",
              "Bestsellers",
              "Today's Deals",
              "Mobiles",
              "New Releases",
              "Customer Service",
              "Prime",
              "Electronics",
              "Fashion",
            ].map((item) => (
              <Nav.Link key={item} href="#" className="text-white">
                {" "}
                {item}{" "}
              </Nav.Link>
            ))}{" "}
          </Nav>{" "}
          <div
            className="d-flex align-items-center "
            style={{ height: "39px" }}
          >
            {" "}
            <img
              src="https://m.media-amazon.com/images/G/31/img21/APAY/ITD25/SMW_400x39_1._CB778584269_.png"
              alt="ads"
              className="deals"
              style={{ height: "100%", objectFit: "contain" }}
            />{" "}
          </div>{" "}
        </div>{" "}
      </Navbar>
    </div>
  );
};

export default Navbars;
