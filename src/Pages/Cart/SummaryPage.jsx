import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CartNavbar from "../../components/CartComponents/CartNavbar";
import PriceDetails from "../../components/CartComponents/PriceDetails";
import { changeCheckoutStage, orderSuccessful } from "../../Redux/Cart/Action";

import styles from "./Cart.module.css";

import { Navigate, useNavigate } from "react-router-dom";
import CartDetails from "../../components/CartComponents/CartDetails";
import CartPayment from "../../components/CartComponents/CartPayment";
import AddressCard from "../../components/CartComponents/AddressCard";
import { Alert } from "react-bootstrap";

export function TransitionDown(props) {
  // return <Slide {...props} direction="down" />;
  return <div>Hello</div>;
}

const SummaryPage = () => {
  const { cart, margin, address, stage } = useSelector(
    (state) => state.cart,
    shallowEqual
  );
  const dispatch = useDispatch();
  const history = useNavigate();

  const [total, setTotal] = useState(0);
  const [open, setOpen] = useState(false);

  const handleContinue = () => {
    dispatch(changeCheckoutStage(1));
    dispatch(orderSuccessful());
    history("/");
  };

  useEffect(() => {
    let res = 0;
    cart?.forEach((curr) => (res += curr.qty * curr.discounted_price));
    setTotal(res);
    dispatch(changeCheckoutStage(4));
  }, [cart]);

  if (stage < 4) return <Navigate to="/cart" />;

  return (
    <div className={styles.root}>
      <CartNavbar active={stage} />
      <div className={styles.main}>
        <div className={styles.summary}>
          <CartDetails isSummary={true} cart={cart} />
          {address[0] && (
            <>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "1.2rem",
                  margin: "1rem 0rem",
                }}
              >
                Address Details
              </div>
              <AddressCard add={address[0]} />
            </>
          )}
          <CartPayment isSummary={true} />
        </div>

        <div className={styles.priceBar}>
          <PriceDetails
            totalPrice={total}
            delivery={0}
            cod={0}
            first={true}
            isContinue={true}
            onContinue={() => setOpen(true)}
            margin={margin}
            cash={true}
          />
        </div>
      </div>

      <Alert
        show={open}
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "30%",
        }}
        onClose={handleContinue}
        variant="success"
        dismissible
        delay="2000"
      >
        Order Placed Successfully!
      </Alert>
    </div>
  );
};

export default SummaryPage;
