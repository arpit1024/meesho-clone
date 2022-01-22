import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addDATAError, addDataLoading, addDATASuccess } from "../store/actions";
import { Navbar } from "./header-footer'/Navbar";
export const Home = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state) => ({
    productData: state.addDataReducer.productData,
  }));
  const some = (id) => {
    console.log("ID", id);
  };
  useEffect(() => {
    dispatch(addDataLoading());
    fetch("http://localhost:2345/getProducts")
      .then((res) => res.json())
      .then((res) => dispatch(addDATASuccess(res)))
      .catch((err) => {
        dispatch(addDATAError(err));
      });
  }, []);
  console.log("REDUC HOOK", productData);
  return <></>;
};
