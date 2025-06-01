import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import "./ProductList.css";
import { addItem } from "./CartSlice";
import { useSelector } from "react-redux";

const ProductCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const isInCart = cart.some((item) => item.name === plant.name);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };
  return (
    <li className="product-card">
      <img className="product-image" src={plant.image} alt={plant.name} />
      <h3 className="product-title">{plant.name}</h3>
      <p className="product-description">{plant.description}</p>
      <p className="product-price">{plant.cost}</p>
      <button
        className={`product-button ${isInCart ? "disabled" : ""}`}
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        Add to Cart
      </button>
    </li>
  );
};

ProductCard.propTypes = {
  plant: PropTypes.object.isRequired,
};

export default ProductCard;
