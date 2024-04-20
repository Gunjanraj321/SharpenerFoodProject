import classes from "./Cart.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartItems =<ul className={classes['cart-items']}>
    {[{ id: "c1", name: "sushi", amount: 2, price: "19.99" }
  ].map((item) => <li>{item.name}</li>)}</ul>;

  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div>
            <span>Total Amount</span>
            <span>35.52</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
        </div>
    </Modal>
  );
};

export default Cart;
