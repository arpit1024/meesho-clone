import {
  ADD_DATA_ERROR,
  ADD_DATA_LOADING,
  ADD_DATA_SUCCESS,
  LOG_OUT_USER,
  SET_PRODUCT_DATA,
} from "./actionTypes";
const init = { productData: [], getData: null };
export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_DATA_SUCCESS:
      return {
        ...state,
        productData: payload,
        loading: false,
      };
    case ADD_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case LOG_OUT_USER:
      return {
        ...state,
        getData: payload,
      };
    case SET_PRODUCT_DATA:
      return {
        ...state,
        getData: payload,
      };
    default:
      return state;
  }
};
