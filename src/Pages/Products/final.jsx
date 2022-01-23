import "./card.css";

import { useEffect, useState } from "react";
import { FaPercentage } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addDataLoading,
  addDATASuccess,
  setProductData,
} from "../../store/actions";
import { Navigate, useNavigate } from "react-router-dom";
import { Navbar } from "../../components/header-footer'/Navbar";

export const Final = () => {
  //   const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // data = data.data;
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("https://meeshoclone-1.herokuapp.com/getProducts")
      .then((res) => res.json())
      .then((res) => {
        // console.log(("res", res));
        dispatch(addDATASuccess(res));
      });
  };
  let { data } = useSelector((state) => ({
    data: state.addDataReducer.productData,
  }));
  console.log("data", data);
  return (
    <>
      <Navbar />
      <div className="productFullPage" id="proContainer">
        {data.map(
          ({
            _id,
            category,
            title,
            original_price,
            discounted_price,
            images,
            rating,
          }) => (
            <div
              className="productCard"
              onClick={() => {
                navigate(`/details/${_id}`);
              }}
            >
              <div key={_id} className="card-body text-left">
                <div className="card">
                  <img
                    src={images}
                    alt="product"
                    className="card-img-top productImg"
                  />
                </div>
                <div className="card-title">
                  <h4 className="card-title">{title}</h4>
                </div>

                <div className="price">
                  <div className="currentPrice">
                    <FaRupeeSign />
                    {original_price}
                  </div>
                  <div className="actualPrice">
                    <del>{original_price}</del>
                  </div>
                  <div className="discount">
                    <FaPercentage className="percentage" />
                    {discounted_price} off
                  </div>
                </div>

                <div className="startingOffer">
                  <p className="startingOffer">
                    <FaPercentage className="percentage" />
                    <FaRupeeSign />
                    100 disocunt on first order
                  </p>
                </div>

                <div className="freeDelivery text-center">
                  <div className="badge">
                    <span>Free Delivery</span>
                  </div>
                </div>

                <div className="ratings">
                  <p>
                    <span className="badge">
                      {rating}
                      <FaStar className="FaStar" />
                    </span>
                    Supplier
                  </p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
};
