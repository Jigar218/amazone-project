import "./skinproduct.css";
const SkinProductNav = () => {
  return (
    <div className="d-none d-md-block">
      <ul className="d-flex gap-3 skin-nav border-bottom">
        <li className="fw-semibold">Beauty</li>
        <li>Luxury Beauty</li>
        <li>Bestsellers</li>
        <li>Make-up & Nails</li>
        <li>Skin Care</li>
        <li>Hair Care & Styling</li>
        <li>Fragrance</li>
        <li>Men's Grooming</li>
      </ul>
    </div>
  );
};

export default SkinProductNav;
