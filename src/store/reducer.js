import {
  ADD_DATA_ERROR,
  ADD_DATA_LOADING,
  ADD_DATA_SUCCESS,
} from "./actionTypes";
const init = { productData: [] };
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

    default:
      return state;
  }
};
