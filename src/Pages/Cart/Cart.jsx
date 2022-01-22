import { useDispatch } from "react-redux";
import { shallowEqual, useSelector } from "react-redux";
import { changeCheckoutStage } from "../../Redux/Cart/Action";
// import CartDetails from "../../Components/Cart Components/CartDetails";
import CartNavbar from "../../components/CartComponents/CartNavbar";
// import PriceDetails from "../../Components/Cart Components/PriceDetails";
import { useEffect, useState } from "react";

import styles from "./Cart.module.css";
import priceDetailsStyles from "../../components/CartComponents/PriceDetails.module.css";
import { useNavigate } from "react-router-dom";

import CartDetails from "../../components/CartComponents/CartDetails";
import PriceDetails from "../../components/CartComponents/PriceDetails";

const Cart = () => {
  const { cart, stage } = useSelector((state) => state.cart, shallowEqual);
  const dispatch = useDispatch();

  const history = useNavigate();

  const [total, setTotal] = useState(0);

  const handleContinue = () => {
    dispatch(changeCheckoutStage(2));
    history("/cart/checkout");
  };

  useEffect(() => {
    let res = 0;
    cart?.forEach((curr) => (res += curr.qty * curr.discounted_price));
    setTotal(res);
    dispatch(changeCheckoutStage(1));
  }, [cart]);

  return (
    <div className={styles.root}>
      <CartNavbar active={stage} />
      {cart.length === 0 ? (
        <div className={styles.empty}>
          <img
            style={{ marginTop: "7rem" }}
            src="https://meesho.com/assets/Checkout/empty-cart.png"
            alt="empty-cart"
          />
          <p style={{ marginTop: "3rem" }}>Your cart is empty</p>
          <button
            onClick={() => {
              window.location.replace("/");
            }}
            style={{ padding: "1rem 2rem", marginTop: "2rem" }}
            className={priceDetailsStyles.continue}
          >
            {" "}
            View Products{" "}
          </button>
        </div>
      ) : (
        <div className={styles.main}>
          <CartDetails cart={cart} />
          <div className={styles.priceBar}>
            <PriceDetails
              totalPrice={total}
              delivery={0}
              cod={0}
              first={true}
              isContinue={true}
              onContinue={handleContinue}
            />
            <img
              className={styles.helpImg}
              src="https://images.meesho.com/images/marketing/1588578650850.png"
              alt="safe meesho"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
