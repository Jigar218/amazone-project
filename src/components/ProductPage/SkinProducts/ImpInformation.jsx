import React from "react";
import "./skinproduct.css";
const ImpInformation = () => {
  return (
    <div className="px-4">
      <h6 className="info-heading ">Important information</h6>
      <div className="px-4">
        <h6 className="info-sub">Safety Information:</h6>
        <p className="info-text">Avoid contact with eyes</p>
      </div>
      <div className="px-4">
        <h6 className="info-sub">Ingredients:</h6>
        <p className="info-text">
          AQUA, GLYCERIN, SODIUM COCOYL GLUTAMATE, SODIUM COCOAMPHOACETATE,
          PEG-75, CITRIC ACID, PROPYLENE GLYCOL, SODIUM BENZOATE, PEG-40
          HYDROGENATED CASTOR OIL, DISODIUM EDTA,DIPOTASSIUM GLYCYRRHIZATE,
          ALLANTOIN, SACCHARIDE ISOMERATE, CAFFEINE, SODIUM LAUROYL LACTYLATE,
          SODIUM CITRATE, CERAMIDE NP, PHENOXYETHANOL, CERAMIDE AP,
          PHYTOSPHINGOSINE, CHOLESTEROL, XANTHAN GUM, CARBOMER,
          ETHYLHEXYLGLYCERIN, CERAMIDE EOP. FIL.1738.V00
        </p>
      </div>
      <div className="px-4 border-bottom">
        <h6 className="info-sub"> Directions: </h6>
        <p className="info-text">
          Cetaphil rich cream-to-foam cleanser is clinically proven to
          effectively remove pore-clogging dirt, oil and makeup without
          stripping or drying out the skin. It maintains skin’s natural
          protective barrier and skin’s pH to leave skin feeling hydrated after
          cleansing.
        </p>
      </div>
      <div className="   border-bottom pt-3">
        <h6 className="info-sub"> Product description </h6>
        <p className="info-text">
          Cetaphil rich cream-to-foam cleanser is clinically proven to
          effectively remove pore-clogging dirt, oil and makeup without
          stripping or drying out the skin. It maintains skin’s natural
          protective barrier and skin’s pH to leave skin feeling hydrated after
          cleansing.
        </p>
      </div>
      <div className="">
        {" "}
        <h6 className="info-heading pt-3">Product information</h6>
        <div className="tech-wrapper">
          {/* LEFT BLOCK */}
          <div className="tech-block">
            <h3 className="tech-heading">Technical Details</h3>

            <table className="tech-table">
              <tbody>
                <tr>
                  <td className="tech-key">Manufacturer</td>
                  <td className="tech-value">
                    Manufactured by: G Production Inc. 19400 Route
                    Transcanadienne, Baie d’Urfé, H9X 3S4 CANADA
                  </td>
                </tr>

                <tr>
                  <td className="tech-key">Country of Origin</td>
                  <td className="tech-value">Canada</td>
                </tr>

                <tr>
                  <td className="tech-key">Item model number</td>
                  <td className="tech-value">F49012</td>
                </tr>

                <tr>
                  <td className="tech-key">Product Dimensions</td>
                  <td className="tech-value">4 x 2.4 x 6.7 cm; 29 g</td>
                </tr>

                <tr>
                  <td className="tech-key">ASIN</td>
                  <td className="tech-value">B0F94421HC</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* RIGHT BLOCK */}
          <div className="tech-block">
            <h3 className="tech-heading">Additional Information</h3>

            <table className="tech-table">
              <tbody>
                <tr>
                  <td className="tech-key">Manufacturer</td>
                  <td className="tech-value">
                    "Manufactured by: G Production Inc. 19400 Route
                    Transcanadienne, Baie d’Urfé, H9X 3S4 CANADA"
                  </td>
                </tr>

                <tr>
                  <td className="tech-key">Packer</td>
                  <td className="tech-value">
                    G Production Inc. 19400 Route Transcanadienne, Baie d’Urfé,
                    H9X 3S4 CANADA
                  </td>
                </tr>

                <tr>
                  <td className="tech-key">Importer</td>
                  <td className="tech-value">Galderma India</td>
                </tr>

                <tr>
                  <td className="tech-key">Item Weight</td>
                  <td className="tech-value">29 g</td>
                </tr>

                <tr>
                  <td className="tech-key">Item Dimensions LxWxH</td>
                  <td className="tech-value">40 x 24 x 67 Millimeters</td>
                </tr>

                <tr>
                  <td className="tech-key">Net Quantity</td>
                  <td className="tech-value">29.0 millilitre</td>
                </tr>

                <tr>
                  <td className="tech-key">Generic Name</td>
                  <td className="tech-value">
                    Cetaphil Hydrating Foaming Cream Cleanser 29 ml
                  </td>
                </tr>

                <tr className="border-bottom">
                  <td className="tech-key">Best Sellers Rank</td>
                  <td className="tech-value ">
                    #50 in Beauty <br />
                    #1 in Makeup Cleansing Foams
                  </td>
                </tr>
              </tbody>
            </table>

            <h3 className="tech-heading feedback-title border-bottom">
              Feedback
            </h3>
            <p className="feedback-text ms-3">
              Would you like to{" "}
              <span className="feedback-link">
                tell us about a lower price?
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpInformation;
