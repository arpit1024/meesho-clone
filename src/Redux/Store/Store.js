import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "../Cart/Reducer";
import thunk from "redux-thunk";
import { reducer } from "../../store/reducer";
const rootReducer = combineReducers({
  cart: cartReducer,
  addDataReducer: reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
