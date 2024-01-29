import { FC } from "react";
import "./App.scss";
interface CartItem {
  id: string;
  product_name: string;
  quantity: number;
  image: string;
}

interface CartModalProps {
  cart: CartItem[];
  onClose: () => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onDelete: (id: string) => void;
}

const CartModal: FC<CartModalProps> = ({
  cart,
  onClose,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  return (
    <div className="cart-modal">
      <h2
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Shopping Cart
      </h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img
              src={item.image}
              style={{
                width: "50px",
                height: "50px",
              }}
              alt=""
            />
            {item.product_name}:
            <button onClick={() => onIncrease(item.id)}>+</button>
            {item.quantity}{" "}
            <button onClick={() => onDecrease(item.id)}>-</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CartModal;
