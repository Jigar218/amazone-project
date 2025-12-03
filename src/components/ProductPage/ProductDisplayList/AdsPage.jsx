import { IoMdCheckmark } from "react-icons/io";
import productimg from "../../../assets/image.png";
const AdsPage = () => {
  return (
    <div className=" d-flex justify-content-center  mt-3">
      <div>
        <h6>Need help?</h6>
        <p className="text-primary">
          Visit the help section <span className="text-dark">or</span> contact
          us
        </p>
      </div>
      <div className="border mt-5 d-none d-lg-block">
        <img src={productimg} alt="" />
      </div>
    </div>
  );
};

export default AdsPage;
