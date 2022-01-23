import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart/Cart";
import CheckoutPage from "../Pages/Cart/CheckoutPage";

import PaymentPage from "../Pages/Cart/PaymentPage";
import SummaryPage from "../Pages/Cart/SummaryPage";

export const CartRoutes = () => {
  return (
    <Routes>
      <Route exact path="/cart" element={<Cart />}></Route>
      <Route exact path="/cart/checkout" element={<CheckoutPage />}></Route>
      <Route exact path="/cart/payment" element={<PaymentPage />}></Route>
      <Route exact path="/cart/summary" element={<SummaryPage />}></Route>
      <Route path="*" element={<div> </div>}></Route>
    </Routes>
  );
};
