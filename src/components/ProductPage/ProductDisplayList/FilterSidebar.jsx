import "./products.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import PriceFilter from "./PriceFilter";

const FilterSidebar = ({ filters, setFilters, sidebarproducts }) => {
  return (
    <div className="filter-container px-2">
      {/* Delivery Day */}
      <div className="filter-section">
        <h6 className="heading">Delivery Day</h6>
        <label>
          <input
            type="checkbox"
            onChange={(e) =>
              setFilters({ ...filters, delivery: e.target.checked })
            }
          />
          <span> Get It by Tomorrow </span>
        </label>
        <label>
          <input
            type="checkbox"
            onChange={(e) =>
              setFilters({ ...filters, delivery2: e.target.checked })
            }
          />
          <span> Get It in 2 Days</span>
        </label>
      </div>

      {/* Category */}
      <div className="filter-section mt-3">
        <h6 className="heading">Category</h6>
        <ul className="items-list">
          <li>
            <div className="d-flex  align-items-center">
              <MdOutlineKeyboardArrowLeft />
              Electronics
            </div>
          </li>
          <li>
            <div className="d-flex  align-items-center">
              <MdOutlineKeyboardArrowLeft /> Headphones & Accessories{" "}
            </div>
          </li>
          <li className="">
            {" "}
            <div className="d-flex  align-items-center">
              <span className="fw-semibold ms-3">Headphones</span>{" "}
            </div>
            <ul className="items-list">
              <li>In-Ear</li>
              <li>Over-Ear</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Customer Review */}
      <div className="filter-section mt-3">
        <h6 className="heading">Customer Reviews</h6>

        <div className="d-flex align-item-center rating-star">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaRegStar />
          </span>
          <span className="rating-star-text ">& up</span>
        </div>
      </div>
      {/* Condition */}
      <div className="filter-section mt-3">
        <h6 className="heading">Item Condition</h6>
        <label>
          <input
            type="checkbox"
            onChange={(e) =>
              setFilters({ ...filters, condition: e.target.checked })
            }
          />
          <span className="ms-1">New</span>
        </label>
      </div>

      {/* Price Range */}
      <PriceFilter minPrice={500} maxPrice={5000} setFilters={setFilters} />

      <div className="filter-section">
        <h6 className="heading">Deals & Discounts</h6>
        <ul className="list-unstyled items-list">
          <li>All Discounts</li>
          <li>Today's Deals</li>
        </ul>
      </div>
      <div className="filter-section">
        <h6 className="heading">Wireless Technology</h6>
        <label>
          <input type="checkbox" />
          <span> Bluetooth </span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Pay On Delivery</h6>
        <label>
          <input type="checkbox" />
          <span> Eligible for Pay On Delivery </span>
        </label>
      </div>
      <div className="filter-section">
        <h6 className="heading">Discounts</h6>
        <ul className="list-unstyled items-list">
          <li>10% Off or more</li>
          <li>25% Off or more</li>
          <li>35% Off or more</li>
          <li>50% Off or more</li>
          <li>60% Off or more</li>
          <li>70% Off or more</li>
        </ul>
      </div>

      <div className="filter-section mt-3">
        <h6 className="heading">Availability </h6>
        <label>
          <input type="checkbox" />
          <span className="ms-1"> Include Out of Stock</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Headphones Form Factor</h6>
        <label>
          <input type="checkbox" />
          <span className="ms-2">In Ear</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="ms-1"> Over Ear</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Connectivity</h6>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Wired </span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Wireless</span>
        </label>
      </div>

      <div className="filter-section mt-3">
        <h6 className="heading">Audio Driver Type</h6>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Dynamic Driver</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Balanced Armature Driver</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Water Resistance Level</h6>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Not Water Resistant</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Water Resistant</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Waterproof</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Included Components</h6>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Cable </span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="ms-2">User Manual</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Material</h6>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Plastic </span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Metal</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Count</h6>
        <label>
          <input type="checkbox" />
          <span className="ms-2">1 </span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="ms-2">3 & above</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Control Method</h6>
        <label>
          <input type="checkbox" />
          <span className="ms-2">App</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Push Button</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Remote</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Touch</span>
        </label>
        <label>
          <input type="checkbox" />
          <span className="ms-2">Voice</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Jack Size</h6>

        <label>
          <input type="checkbox" />
          <span className="ms-2">3.5 mm Jack</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Control</h6>

        <label>
          <input type="checkbox" />
          <span className="ms-2">Voice Control</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Features</h6>

        <label>
          <input type="checkbox" />
          <span className="ms-2">With Microphonek</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Electronic Accessories Brands</h6>

        <label>
          <input type="checkbox" />
          <span className="ms-2">Top Brands</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">Top Brands in Electronics</h6>

        <label>
          <input type="checkbox" />
          <span className="ms-2">Top Brands</span>
        </label>
      </div>
      <div className="filter-section mt-3">
        <h6 className="heading">New Arrivals</h6>
        <p>Last 90 days</p>
      </div>

      <div
        className=" d-flex flex-column  justify-content-center mt-5 "
        style={{ marginLeft: "55px" }}
      >
        {sidebarproducts.map((item, index) => (
          <div
            className="card p-3 rounded-0"
            style={{ maxWidth: "158px" }}
            key={index}
          >
            <img src={item.img} alt="" />
            <p className="desc">{item.desc}</p>
            <div className="d-flex align-item-center rating-star mini-card mt-0">
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaStar />
              </span>
              <span>
                <FaRegStar />
              </span>
              <span className="rating-star-text  text-primary">21</span>
            </div>
            <p className="text-danger">{item.price}</p>
            <div className=" d-flex justify-content-center">
              <button className="mini-btn rounded-5">Shop now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;
