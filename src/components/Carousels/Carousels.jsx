import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousels.css";
import { Link } from "react-router-dom";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="container-fluid p-0 m-0">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="custom-carousel"
      >
        <Carousel.Item>
          <Link to="/deals">
            <img
              alt="Deals"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/sudipta/BAU/GW/17th/GW_Hero_Pc_Budget_Store._CB778349436_.jpg"
              height="100%"
              width="1500px"
              data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/sudipta/BAU/GW/17th/GW_Hero_Pc_Budget_Store._CB778349436_.jpg"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="WA"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg"
            height="100%"
            width="1500px"
            data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="Daily essentials"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/Baby2025/Nov25/SVD/Heros/XGL/SVD_PC_Hero_02._CB778865641_.jpg"
            height="100%"
            width="1500px"
            data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/Baby2025/Nov25/SVD/Heros/XGL/SVD_PC_Hero_02._CB778865641_.jpg"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="Indoor plants for decor"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/2025/LawnGarden/NOVEMBER/GATEWAYNOV/GW-Hero-Pc-Plants-for-home-decor._CB778927908_.jpg"
            height="100%"
            width="1500px"
            data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/2025/LawnGarden/NOVEMBER/GATEWAYNOV/GW-Hero-Pc-Plants-for-home-decor._CB778927908_.jpg"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            alt="Amazon fashion"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30001._CB542120021_.jpg"
            height="100%"
            width="1500px"
            data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/2024/BAU_BTF/Nov/Unrec/Shoes/1/30001._CB542120021_.jpg"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
