// import { Link } from "react-router-dom";
import "./categories.css";
import { useNavigate } from "react-router-dom";
function FeatureCard({ featureData }) {
  const navigate = useNavigate();
  return (
    <div className="row g-3 justify-content-center">
      {featureData.map((card, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex">
          <div className="feature-card w-100">
            <h4>{card.title}</h4>
            <div className="image-grid">
              {card.images.map((img, idx) => (
                <div
                  key={idx}
                  className="image-box"
                  onClick={() =>
                    navigate(card.link ? card.link[idx] : "/deals")
                  }
                  style={{ cursor: "pointer" }}
                >
                  {/* <Link to={"/deals"}> */}
                  <img src={img} alt={`feature-${idx}`} />
                  {card.captions && card.captions[idx] && (
                    <p className="img-text text-left">{card.captions[idx]}</p>
                  )}
                  {/* </Link> */}
                </div>
              ))}
            </div>
            {card.linktext && (
              <p className="text-primary mt-3">{card.linktext}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FeatureCard;
