import {
  ADD_ADDRESS,
  ADD_MARGIN,
  ADD_TO_CART,
  CHANGE_CHECKOUT_STAGE,
  CHANGE_QTY,
  ORDER_SUCCESSFUL,
  REMOVE_FROM_CART,
} from "./ActionType";
import { loadData, saveData } from "../../Utils/localStorage";

const cart = loadData("Cart");
const address = loadData("Address") || [];
const orders = loadData("Orders") || [];

const init = {
  stage: 1,
  address: address,
  cart: cart || [],
  orders: orders,
  currentOrder: {},
  margin: 0,
};

const cartReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_ADDRESS: {
      return {
        ...state,
        address: [...state.address, action.payload.address],
      };
    }
    case ADD_TO_CART: {
      let newItem = true;
      let newCart = state.cart.map((el) => {
        if (el.id === action.payload.product.id) {
          newItem = false;
          return { ...el, qty: el.qty + 1 };
        }
        return el;
      });
      if (newItem)
        newCart = [...state.cart, { ...action.payload.product, qty: 1 }];
      saveData("Cart", newCart);
      return {
        ...state,
        cart: newCart,
      };
    }
    case CHANGE_QTY: {
      const updatedCart = state.cart.map((prod) =>
        action.payload.id === prod.id
          ? {
              ...prod,
              qty: action.payload.qty,
            }
          : prod
      );

      return {
        ...state,
        cart: updatedCart,
      };
    }
    case REMOVE_FROM_CART: {
      const updatedCart = state.cart.filter(
        (prod) => action.payload.id !== prod.id
      );
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case CHANGE_CHECKOUT_STAGE: {
      saveData("Address", state.address);
      saveData("Cart", state.cart);
      return {
        ...state,
        stage: action.payload.stage,
      };
    }
    case ORDER_SUCCESSFUL: {
      saveData("Cart", []);
      const orders = [
        ...state.orders,
        {
          items: state.cart,
          date: Date.now(),
          resell: state.isResell,
          margin: state.margin,
        },
      ];
      saveData("Orders", orders);
      return {
        ...state,
        stage: 1,
        cart: [],
        orders: orders,
      };
    }
    case ADD_MARGIN: {
      return {
        ...state,
        margin: action.payload.margin,
      };
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
