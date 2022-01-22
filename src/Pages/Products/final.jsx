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

export const Final = () => {
  //   const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let data = useSelector((state) => ({
    data: state.addDataReducer.productData,
  }));
  data = data.data;
  useEffect(() => {
    //     axios
    //       .get("https://meeshoclone-1.herokuapp.com/getProducts")
    //       .then((response) => dispatch(addDATASuccess(response)));
    //   }, []);
    fetch("https://meeshoclone-1.herokuapp.com/getProducts")
      .then((res) => res.json())
      .then((res) => {
        console.log(("res", res));
        dispatch(addDATASuccess(res));
      });
  }, []);

  return (
    <div className="productFullPage" id="proContainer">
      {data.map((e) => (
        <div
          className="productCard"
          onClick={() => {
            navigate(`/details/${e._id}`);
          }}
        >
          <div key={e._id} className="card-body text-left">
            <div className="card">
              <img
                src={e.images}
                alt="product"
                className="card-img-top productImg"
              />
            </div>
            <div className="card-title">
              <h4 className="card-title">{e.title}</h4>
            </div>

            <div className="price">
              <div className="currentPrice">
                <FaRupeeSign />
                {e.Currentprice}
              </div>
              <div className="actualPrice">
                <del>{e.original_price}</del>
              </div>
              <div className="discount">
                <FaPercentage className="percentage" />
                {e.discounted_price} off
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
                  {e.rating}
                  <FaStar className="FaStar" />
                </span>
                Supplier
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
