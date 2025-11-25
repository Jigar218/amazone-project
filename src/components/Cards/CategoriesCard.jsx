import "./categories.css";

function FeatureCard({ featureData }) {
  return (
    <div className="row g-3 justify-content-center">
      {featureData.map((card, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex">
          <div className="feature-card w-100">
            <h4>{card.title}</h4>
            <div className="image-grid">
              {card.images.map((img, idx) => (
                <div key={idx} className="image-box">
                  <img src={img} alt={`feature-${idx}`} />
                  {card.captions && card.captions[idx] && (
                    <p className="img-text text-left">{card.captions[idx]}</p>
                  )}
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
