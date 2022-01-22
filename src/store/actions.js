import {
  ADD_DATA_ERROR,
  ADD_DATA_LOADING,
  ADD_DATA_SUCCESS,
  LOG_OUT_USER,
} from "./actionTypes";

export const addDataLoading = () => ({
  type: ADD_DATA_LOADING,
});
export const addDATASuccess = (data) => ({
  type: ADD_DATA_SUCCESS,
  payload: data,
});
export const addDATAError = (data) => ({
  type: ADD_DATA_ERROR,
  payload: data,
});
export const logOutUser = (data) => ({
  type: LOG_OUT_USER,
  payload: data,
});
